import React, { useState, useEffect } from 'react';

const CalorieCounter = () => {
  const [query, setQuery] = useState(''); // Default query
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const appId = "72a4ac56";
  const apiKey = "ac68cc5db8a368aa3eaa0f84b2f074a2";

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

// Inside the fetchData function
const fetchData = async () => {
    try {
      const apiUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
  
      const requestBody = {
        query: query,
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': appId,
          'x-app-key': apiKey,
        },
        body: JSON.stringify(requestBody),
      };
  
      const response = await fetch(apiUrl, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Check if the response has the expected structure
      if (data && data.foods && data.foods.length > 0) {
        setResponse(data);
      } else {
        setError('Invalid API response');
      }
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nutritionix API Example</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="foodQuery" className="form-label">
            Food Query:
          </label>
          <input
            type="text"
            className="form-control"
            id="foodQuery"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {error && <p className="text-danger">Error: {error}</p>}
      {response && (
        <div>
          <p className="fw-bold">Nutrition Information:</p>
          <ul>
            <li>Calories: {response.foods[0].nf_calories || 'N/A'}</li>
            <li>Protein: {response.foods[0].nf_protein || 'N/A'}</li>
            <li>Carbohydrates: {response.foods[0].nf_total_carbohydrate || 'N/A'}</li>
            <li>Fats: {response.foods[0].nf_total_fat || 'N/A'}</li>
            <li>Minerals: {response.foods[0].nf_p || 'N/A'}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalorieCounter;