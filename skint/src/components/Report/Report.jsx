
import React, { useState } from 'react';


import BrandExample from '../Dashboard/topNavbar';

import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import './Report.css';



import SideNavbar from './sideNavbar';


const Report = () => {
  const [individualStartDate, setIndividualStartDate] = useState(null);
  const [individualEndDate, setIndividualEndDate] = useState(null);

  const [bulkStartDate, setBulkStartDate] = useState(null);
  const [bulkEndDate, setBulkEndDate] = useState(null);
  
  const [searchText, setSearchText] = useState('');


  const [isNavbarOpen, setIsNavbarOpen] = useState(false);






  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

 

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];



  return (
    <div className='body-shift'>
      <BrandExample searchText={searchText} handleSearch={handleSearch} />
      <div className={`bg ${isNavbarOpen ? 'shift-right' : ''}`}>
        <SideNavbar/>
       
        
       
       <h1>Report</h1>
 
       <div className="report-section">
         <h2>Individual Report</h2>
         <div className="form-group">
           <label>Designation</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Department</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Name</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Start Date</label>
           <DatePicker selected={individualStartDate} onChange={date => setIndividualStartDate(date)} />
         </div>
         <div className="form-group">
           <label>End Date</label>
           <DatePicker selected={individualEndDate} onChange={date => setIndividualEndDate(date)} />
         </div>
         <button className="report-button">GET REPORT</button>
       </div>
 
       <div className="report-section">
         <h2>Bulk Report</h2>
         <div className="form-group">
           <label>Designation</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Department</label>
           <Select options={options} />
         </div>
         <div className="form-group">
           <label>Start Date</label>
           <DatePicker selected={bulkStartDate} onChange={date => setBulkStartDate(date)} />
         </div>
         <div className="form-group">
           <label>End Date</label>
           <DatePicker selected={bulkEndDate} onChange={date => setBulkEndDate(date)} />
         </div>
         <button className="report-button">GET REPORT</button>
       </div>
      </div>
    </div>
  );
};

export default Report;
