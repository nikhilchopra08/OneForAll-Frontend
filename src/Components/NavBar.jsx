// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router, import Link

const Navbar = () => {

  const accessToken = localStorage.getItem('accessToken');

  if(!accessToken){
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#34a853' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src='/logo.png' width={`100`} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
          <ul className="navbar-nav ml-auto gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: "25px", fontWeight: "500",color: "white" }}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register" style={{ fontSize: "25px", fontWeight: "500" ,color: "white"}}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ fontSize: "25px", fontWeight: "500",color: "white" }}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }
  else{
    return(
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#34a853' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src='/logo.png' width={`100`} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
          <ul className="navbar-nav ml-auto gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: "25px", fontWeight: "500",color: "white" }}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register" style={{ fontSize: "25px", fontWeight: "500" ,color: "white"}}>Book an appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ fontSize: "25px", fontWeight: "500",color: "white" }}>Medicines</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
    
  }
};

export default Navbar;