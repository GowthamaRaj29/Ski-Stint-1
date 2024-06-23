import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import '../../assets/N.css';

function BrandExample({ searchText, handleSearch }) {
  const handleInboxClick = () => {
    window.location.href = '/inbox'; // Navigate to inbox page
  };

  return (
    <div className="navbar-container">
      <Navbar className="navbar">
        <Container className="navbar-content">
          <div className="navbar-brand-container">
            <Navbar.Brand href="#home" className="brand">
              SKI-STINT
            </Navbar.Brand>
          </div>
         
          <div className="navbar-admin-container">
            <div className="admin-info">
              <div className="admin-icon">A</div>
              <span className="admin-text">Hey Admin</span>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;
