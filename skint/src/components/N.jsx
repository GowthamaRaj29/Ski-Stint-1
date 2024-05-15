import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/N.css'; // Make sure to create a corresponding CSS file
import logoImage from './SKI-Coimbatore-Logo.webp'; // Import your image here

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('body-shift');
  };

  return (
    <>
      <div className={`sidenavbar ${isOpen ? 'open' : ''}`}>
        {/* Image added here */}
        <div className="navbar-image-container">
          <img src={logoImage} alt="Logo" className="navbar-logo" />
        </div>
        
        <br/>
        <br/>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/taskboard" className="nav-link active">Taskboard</Link>
        <Link to="/users" className="nav-link">Users</Link>
        <Link to="/report" className="nav-link">Report</Link>
      </div>
      
      <button className="menu-button"  onClick={toggleNavbar}>
      ☰

      </button>
    </>
  );
};

export default SideNavbar;
