import React from 'react';

const DiseaseAware = () => {
  const divStyle = {
    backgroundImage: '', // Replace with the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to 100% of the viewport height
    padding: '20px', // Optional: Add padding for better visual appearance
  };

  return (
    <div style={divStyle}>
      {/* Your content goes here */}
      <img src='./src/Components/diseaseAware.jpeg'/>
    </div>
  );
}

export default DiseaseAware;