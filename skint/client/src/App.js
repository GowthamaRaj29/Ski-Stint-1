import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Dashboard from './components/Dashboard/DashBoard';

import SideNavbar from './components/Dashboard/sideNavbar.jsx';
import Taskboard from './components/TaskBoard/TaskBoard.jsx';
import User2 from './components/userpage/User2.jsx';

function App() {
  return (
   
      <div>
        <BrowserRouter>
    
       
        <Routes>
          <Route className="active" path='/' element={<Dashboard/>}></Route>
          <Route className="active" path='/taskboard' element={<Taskboard/>}></Route>
          <Route path='/userpage'element={<User2/>}></Route>
        </Routes>
       
        </BrowserRouter>
      </div>
    
  );
}

export default App;
