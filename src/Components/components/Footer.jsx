import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div className="footer container">
      <footer className="bg-white row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">

        <div className="col mb-3">
          <img className="d-flex align-items-center mb-3" src='./logo.png' width={180} alt="Company Logo" />
          <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis.</p>
          <img src='./images/socials.png' className='my-4' alt="Social Icons" />
        </div>

        <div className="col mb-3">

        </div>

        <div className="col mb-3">
          <h5 style={{ fontWeight: '700', color: '#34A853', fontSize: '18px' }} className='mb-4'>Product</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-muted">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 style={{ fontWeight: '700', color: '#34A853', fontSize: '18px' }} className='mb-4'>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-muted">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 style={{ fontWeight: '700', color: '#34A853', fontSize: '18px' }} className='mb-4'>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-muted">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          </ul>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
