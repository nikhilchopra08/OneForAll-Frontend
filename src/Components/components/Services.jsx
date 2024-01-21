import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services container">
      <div className="bg-white row">
        <h1 className="display-4" style={{ fontWeight: '700', color: '#34A853', textDecoration: 'underline' }}>Services we provide:-</h1>
        <p className='service-desc'>One Platform for all your needs</p>

        <div className="d-flex justify-content-center flex-column align-items-center service-items col-lg-6 px-5">
          <Link to="/appointment">
            <div className='service1 service d-flex align-items-center gap-4'>
              <img src="/images/date.png" width={50} alt="Book an Appointment" />
              <div className='service-text d-flex flex-column gap-3'>
                <h2>Book an appointment</h2>
                <p>Book an appointment with a doctor to discuss health concerns and receive treatment.</p>
              </div>
            </div>
          </Link>

          <Link to="/medicines">
            <div className='service1 service d-flex align-items-center gap-4'>
              <img src="/images/medicines.png" width={50} alt="Buy Medicines" />
              <div className='service-text d-flex flex-column gap-3'>
                <h2>Buy Medicines</h2>
                <p>We ensure our customers get 100% genuine medicines with the highest savings in the shortest time possible.</p>
              </div>
            </div>
          </Link>

          <Link to="/calorie-counter">
            <div className='service1 service d-flex align-items-center gap-4'>
              <img src="/images/calculator.png" width={50} alt="Calorie Calculator" />
              <div className='service-text d-flex flex-column gap-3'>
                <h2>Calorie Calculator</h2>
                <p>Empower your health journey with our precise calorie calculator, your trusted companion in achieving your fitness goals</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="d-flex justify-content-center flex-column align-items-center service-items col-lg-6 px-5">
          <Link to="/tracker">
            <div className='service1 service d-flex align-items-center gap-4'>
              <img src="/images/health.png" width={50} alt="Prescription Tracker" />
              <div className='service-text d-flex flex-column gap-3'>
                <h2>Prescription Tracker</h2>
                <p>Your medical records are managed in a digital format and shared only with authorized healthcare with your consent.</p>
              </div>
            </div>
          </Link>

          <Link to="/diseaseAware">
            <div className='service1 service d-flex align-items-center gap-4'>
              <img src="/images/wellness.png" width={50} alt="Wellness" />
              <div className='service-text d-flex flex-column gap-3'>
                <h2>Disease Awareness</h2>
                <p>At OFA , We are committed to empowering our community with knowledge, awareness and proactive healthcare</p>
              </div>
            </div>
          </Link>

          <Link to="/Routinetracker">
            <div className='service1 service d-flex align-items-center gap-4'>
              <img src="/images/tracker.png" width={50} alt="Routine Tracker" />
              <div className='service-text d-flex flex-column gap-3'>
                <h2>Routine Tracker</h2>
                <p>Stay on top of your wellness goals with our routine tracker, making it easy to build healthy habits, one day at a time.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
