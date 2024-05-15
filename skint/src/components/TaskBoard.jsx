import React, { useState } from 'react';
import '../assets/TaskBoard.css'; // Import CSS file
import tasksData from './Task.json'; // Import JSON file
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Taskboard = () => {
  const [tasks, setTasks] = useState(tasksData); // Initialize tasks state with JSON data
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All');
  const [anchorEl, setAnchorEl] = useState(null); // State to anchor the menu to the three-dot button
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to control the navbar
  
  const handleDownload = () => {
    alert('Downloading report...');
  };

  const handleTaskClick = (taskId) => {
    setSelectedTask(taskId === selectedTask ? null : taskId);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    console.log(option);
    handleMenuClose();
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const filteredTasks = tasks.filter(task => {
    const isFiltered = filter === 'All' || task.status === filter;
    return isFiltered;
  });

  return (
    
    <div className={`bg ${isNavbarOpen ? 'shift-right' : ''}`}>
      
      <div className="taskboard-container1">
        {/* Add the search bar here */}
       
        
        <div className="taskboard-menu">
          <Fab variant="extended" onClick={() => handleFilterChange('All')} sx={{ mr: 1 }}>
            All
          </Fab>
          <Fab variant="extended" onClick={() => handleFilterChange('Completed')} sx={{ mr: 1 }}>
            Completed
          </Fab>
          <Fab variant="extended" onClick={() => handleFilterChange('Incomplete')} sx={{ mr: 1 }}>
            Incomplete
          </Fab>
          <Fab variant="extended" onClick={() => handleFilterChange('Overdue')} sx={{ mr: 1 }}>
            Overdue
          </Fab>
          <div className='tm'>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleMenuItemClick('Principle')}>Principle</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Hod')}>Hod</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Tutor')}>Tutor</MenuItem>
          </Menu>
        </div>
        <div className='muja'>
        
        <div className="taskboard-cards">
          {filteredTasks.map(task => (
            <div key={task.id} className={`taskboard-card ${task.status === 'Complete' ? 'completed' : 'incomplete'}`} onClick={() => handleTaskClick(task.id)}>
              <h2>{task.name}</h2>
              <p>Assigned By: {task.assignedBy}</p>
              {selectedTask === task.id && (
                <div className="task-description">
                  <p className="task-detail">ID: {task.id}</p>
                  <p className="task-detail">Description: {task.description}</p>
                  <p className="task-detail">Assigned By: {task.assignedBy}</p>
                  <p className="task-detail">Assigned To: {task.assignedTo}</p>
                  <p className="task-detail">Start Date: {task.startDate}</p>
                  <p className="task-detail">End Date: {task.endDate}</p>
                  <p className="task-detail">Status: {task.status}</p>
                  <button className="taskboard-download-button" onClick={handleDownload}>Download Report</button>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
     
  );
};

export default Taskboard;
