import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import '../assets/N.css';
import tasksData from './Task.json'; // Import JSON file

function BrandExample() {
  const [searchText, setSearchText] = useState('');
  
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };



  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar style={{ backgroundColor: 'white' }}>
        <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
            <Navbar.Brand href="#home" style={{ color: '#6D82D2', fontWeight: 'bold', fontSize: '1.5rem' }} className='brand'>
              SKI-STINT
            </Navbar.Brand>
          </div>
          <div style={{ flex: '2', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
              <FaSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#DFDFDF' }} />
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearch}
                style={{
                  width: '100%',
                  padding: '8px 20px 8px 40px', // Adjust padding to account for the icon
                  borderRadius: '15px',
                  border: '1px solid #ccc',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
            {/* This empty div ensures the title and search bar are centered */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;
