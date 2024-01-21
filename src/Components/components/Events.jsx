import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="events container">
      <div className="bg-white">
        <h1 className="display-4" style={{ fontWeight: '700', color: '#34A853', textDecoration: 'underline' }}>Disease Awareness Events</h1>
        <div className="bg-white d-flex flex-column justify-content-center align-items-center">
          <img src="/images/events.png" className='img-fluid' alt="Disease Awareness Events" />
        </div>
        <p className='events-desc'>At <span style={{ fontWeight: '700', color: '#34A853' }}>HealthHub</span>, we are committed to empowering our community with knowledge, awareness, and proactive healthcare. Our Disease Awareness Events are designed to bring professionals and individuals together to foster understanding, offer support, and inspire action.</p>
      </div>
    </div>
  );
}

export default Events;
