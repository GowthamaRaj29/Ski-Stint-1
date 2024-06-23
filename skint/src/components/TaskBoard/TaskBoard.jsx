import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import BrandExample from './topNavbar';
import tasksData from '../Task.json';
import '../../assets/TaskBoard.css';
import deslogo from '../images/dl.png';
import noDataImage from '../images/norecord.jpg'; // Import the no data image
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import SideNavbar from './sideNavbar';


const Taskboard = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [anchorElDesignation, setAnchorElDesignation] = useState(null);
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [sortBy, setSortBy] = useState('First start first');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [designationCategories, setDesignationCategories] = useState([
    'Principal',
    'Dean',
    'HOD',
    'Tutor',
  ]);
  const [sortingOptions, setSortingOptions] = useState([
    'First start first',
    'Last start first',
    'Department',
  ]);
  const [departments, setDepartments] = useState([
    'All',
    'CSE',
    'AIML',
    'AI&DS',
    'MECH',
    'EEE',
    'ECE',
    'CIVIL',
    'IOT',
    'CybSec',
  ]);

  const handleDesignationClick = (event) => {
    setAnchorElDesignation(event.currentTarget);
  };

  const handleDesignationClose = () => {
    setAnchorElDesignation(null);
  };

  const handleDesignationItemClick = (category) => {
    setFilter(category);
    handleDesignationClose();
  };

  const handleSortClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorElSort(null);
  };

  const handleSortItemClick = (option) => {
    if (option === 'Department') {
      setAnchorElDepartment(anchorElSort);
      setAnchorElSort(null);
    } else {
      setSortBy(option);
      setAnchorElSort(null);
    }
  };

  const handleDepartmentItemClick = (department) => {
    setSelectedDepartment(department);
    setSortBy('Department');
    setAnchorElDepartment(null);
  };

  const handleDownload = () => {
    alert('Downloading report...');
  };

  const handleTaskClick = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const sortTasks = (tasks) => {
    switch (sortBy) {
      case 'First start first':
        return tasks.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      case 'Last start first':
        return tasks.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      case 'Department':
        return tasks.filter(task => selectedDepartment === 'All' || task.department === selectedDepartment);
      default:
        return tasks;
    }
  };

  const filteredTasks = sortTasks(
    tasks.filter((task) => {
      const matchesSearch = task.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            task.assignedBy.toLowerCase().includes(searchText.toLowerCase()) ||
                            task.assignedTo.toLowerCase().includes(searchText.toLowerCase()) ||
                            task.description.toLowerCase().includes(searchText.toLowerCase());
      const isFiltered = filter === 'All' || task.status === filter || task.designation === filter || task.department === filter;
      return matchesSearch && isFiltered;
    })
  );

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className='body-shift'>
      <BrandExample searchText={searchText} handleSearch={handleSearch} />
      <div className={`bg ${isNavbarOpen ? 'shift-right' : ''}`}>
        <SideNavbar/>
        
        
        <div className="taskboard-container1">
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
           
            <div className="tm">
              <IconButton
                style={{ color: '#393939' }}
                aria-label="more"
                aria-controls="designation-menu"
                aria-haspopup="true"
                onClick={handleDesignationClick}
              >
                <MoreVertIcon />
              </IconButton>

              <IconButton
                style={{ color: '#393939' }}
                aria-label="brightness"
                aria-controls="sort-menu"
                aria-haspopup="true"
                onClick={handleSortClick}
              >
                <SwapVertIcon />
              </IconButton>
            </div>
            <Menu
              id="designation-menu"
              anchorEl={anchorElDesignation}
              keepMounted
              open={Boolean(anchorElDesignation)}
              onClose={handleDesignationClose}
            >
              {designationCategories.map((category) => (
                <MenuItem key={category} onClick={() => handleDesignationItemClick(category)}>
                  {category}
                </MenuItem>
              ))}
            </Menu>
            <Menu
              id="sort-menu"
              anchorEl={anchorElSort}
              keepMounted
              open={Boolean(anchorElSort)}
              onClose={handleSortClose}
            >
              {sortingOptions.map((option) => (
                <MenuItem key={option} onClick={() => handleSortItemClick(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
            <Menu
              id="department-menu"
              anchorEl={anchorElDepartment}
              keepMounted
              open={Boolean(anchorElDepartment)}
              onClose={() => setAnchorElDepartment(null)}
            >
              {departments.map((department) => (
                <MenuItem key={department} onClick={() => handleDepartmentItemClick(department)}>
                  {department}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="muja">
            <h3>📌Task-board</h3>
            <div className="taskboard-cards">
              {filteredTasks.length === 0 ? (
                <div className="no-records">
                  <img src={noDataImage} alt="No Data" />
                  <p>No Record Found !!</p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`taskboard-card ${
                      task.status === 'Completed'
                        ? 'completed'
                        : task.status === 'Incomplete'
                        ? 'incomplete'
                        : task.status === 'Overdue'
                        ? 'overdue'
                        : ''
                    }`}
                    onClick={() => handleTaskClick(task.id)}
                  >
                    <h2>{task.name}</h2>
                    <p className="p">
                      <span>Assigned By: {task.assignedBy} ({task.designation})</span>
                      <span className="end-date">Assigned-Date: {task.startDate}</span>
                    </p>
                  </div>
                ))
              )}
            </div>
            <Dialog onClose={handleCloseDialog} open={openDialog} fullWidth maxWidth="md">
              <DialogTitle>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '23px' }}>
                  <img src={deslogo} alt="Logo" className='dl' style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
                  Task Details
                </div>
              </DialogTitle>
              <DialogContent dividers>
                {selectedTask && (
                  <div className="task-description">
                    <div className="task-detail">
                      <span>ID:</span> {selectedTask.id}
                    </div>
                    <div className="task-detail">
                      <span>Assigned By:</span> {selectedTask.assignedBy}
                    </div>
                    <div className="task-detail">
                      <span>Assigned To:</span> {selectedTask.assignedTo}
                    </div>
                    <div className="task-detail">
                      <span>Task Name:</span> {selectedTask.name}
                    </div>
                    <div className="task-detail">
                      <div className='description-text'><span>Description: </span> {selectedTask.description}</div>
                    </div>
                    <div className="task-detail">
                      <span>Start Date:</span> {selectedTask.startDate} <span>End Date:</span> {selectedTask.endDate}
                    </div>
                    <div className="task-detail">
                      <span>Status:</span> {selectedTask.status}
                    </div>
                   
                    <button className="taskboard-download-button" onClick={handleDownload}>
                      Download Report
                    </button>
                  </div>
                )}
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleCloseDialog}>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskboard;
