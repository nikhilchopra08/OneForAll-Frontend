// RegistrationForm.js

import React from "react";

const RegistrationForm = ({ registrationData, setRegistrationData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="form">
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={registrationData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={registrationData.password}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={registrationData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={registrationData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* Add more gender options as needed */}
        </select>
      </label>
      <label>
        Height:
        <input
          type="number"
          name="height"
          value={registrationData.height}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={registrationData.weight}
          onChange={handleChange}
          required
        />
      </label>
    </form>
  );
};

export default RegistrationForm;
