// RegistrationComponent.js

import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import './RegistrationForm.css'; // Create a separate component for the registration form
// import Image from "./YourImageComponent"; // Replace with the actual image component

const RegistrationComponent = () => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/User/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: registrationData.email,
          password: registrationData.password,
          age: registrationData.age,
          gender: registrationData.gender,
          Height: registrationData.height,
          Weight: registrationData.weight,
        }),
        
      });
  
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      const responseContent = await response.text();
      console.log("Response Content:", responseContent);
  
      // Rest of the code...
    } catch (error) {
      console.error("Network or server error:", error);
      alert("Network or server error. Please try again later.");
    }
  };
  

  return (
    <div className="register-c">
      <div className="register">
        <h2>Welcome User</h2>
        <RegistrationForm
          registrationData={registrationData}
          setRegistrationData={setRegistrationData}
        />
        <button onClick={handleRegistration}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationComponent;
