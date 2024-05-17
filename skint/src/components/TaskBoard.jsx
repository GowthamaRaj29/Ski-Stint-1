import CloseIcon from '@mui/icons-material/Close';
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
import '../assets/TaskBoard.css';
import SideNavbar from './sideNavbar';
import tasksData from './Task.json';
import BrandExample from './topNavbar';

const Taskboard = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All');
  const [anchorElDesignation, setAnchorElDesignation] = useState(null);
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [sortBy, setSortBy] = useState('First start first');
  const [designationCategories, setDesignationCategories] = useState([
    'Principal',
    'Dean',
    'HOD',
    'Tutor',
  ]);
  const [sortingOptions, setSortingOptions] = useState([
    'First start first',
    'Last start first',
    'First finish first',
    'Last finish first',
    'First update first',
    'Last update first',
    'First created first',
    'Last created first',
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
    setSortBy(option);
    handleSortClose();
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

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const sortTasks = (tasks) => {
    switch (sortBy) {
      case 'First start first':
        return tasks.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      case 'Last start first':
        return tasks.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      case 'First finish first':
        return tasks.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
      case 'Last finish first':
        return tasks.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
      case 'First update first':
        return tasks.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
      case 'Last update first':
        return tasks.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      case 'First created first':
        return tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'Last created first':
        return tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return tasks;
    }
  };

  const filteredTasks = sortTasks(
    tasks.filter((task) => {
      const isFiltered =
        filter === 'All' ||
        task.status === filter ||
        task.designation === filter; // Filter based on designation as well
      return isFiltered;
    })
  );

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <BrandExample />
      <div className={`bg ${isNavbarOpen ? 'shift-right' : ''}`}>
        <SideNavbar />
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
          </div>
          <div className="muja">
            <div className="taskboard-cards">
              {filteredTasks.map((task) => (
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
                  <p>Assigned By: {task.assignedBy} ({task.designation})</p>
                </div>
              ))}
            </div>
            <Dialog onClose={handleCloseDialog} open={openDialog} fullWidth maxWidth="md">
              <DialogTitle>Task Details</DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
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
                      <span>Description:</span> {selectedTask.description}
                    </div>
                    <div className="task-detail">
                      <span>Start Date:</span> {selectedTask.startDate}
                    </div>
                    <div className="task-detail">
                      <span>End Date:</span> {selectedTask.endDate}
                    </div>
                    <div className="task-detail">
                      <span>Status:</span> {selectedTask.status}
                    </div>
                    <div className="task-detail">
                      <span>Designation:</span> {selectedTask.designation}
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
