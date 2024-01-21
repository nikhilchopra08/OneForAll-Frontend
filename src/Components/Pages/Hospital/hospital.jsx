import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/hospital/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setHospitals(data.hospitals);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    // Fetch hospitals on component mount
    fetchHospitals();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Hospital List</h2>

      <div className="row">
        {hospitals.map((hospital) => (
          <div key={hospital._id} className="col-md-4 mb-4">
            <div className="card" style={{ minHeight: '28rem' }}>
              <img
                src={hospital.Image}
                alt={hospital.name}
                className="card-img-top img-fluid rounded"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{hospital.name}</h5>
                <p className="card-text">{hospital.Address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
