import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/doctors/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDoctors(data.doctors); // Assuming the response JSON property is "doctors"
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Fetch doctors on component mount
    fetchDoctors();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Doctor List</h2>

      <div className="row">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={doctor.Image} // Provide a default image URL if not available
                alt={doctor.name}
                className="card-img-top img-fluid rounded"
                style={{ height: '200px', objectFit: 'cover' }} // Adjust the height and object-fit property
              />
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.degree}</p>
                <p className="card-text">Rating: {doctor.rating || 'N/A'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
