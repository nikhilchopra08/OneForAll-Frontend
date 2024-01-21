import React from 'react';

const Banner = () => {
  return (
    <div className="banner container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
          <img src="./public/images/health-matters.png" alt="Health Matters" width="200" style={{ marginBottom: '25px' }} />
          <h1 className="display-4" style={{ fontWeight: '700' }}>
            <span style={{ color: '#34A853' }}>One Step Solution</span><br />for all your health needs.
          </h1>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-end">
          <img src="/images/doctors.png" alt="Doctors" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
