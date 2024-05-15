import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../assets/TaskBoard.css';
import tasksData from './Task.json';

const Taskboard = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDownload = () => {
    alert('Downloading report...');
  };

  const handleTaskClick = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setSelectedTask(task);
    setOpenDialog(true);
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

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={`bg ${isNavbarOpen ? 'shift-right' : ''}`}>
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
              <div 
                key={task.id} 
                className={`taskboard-card ${task.status === 'Completed' ? 'completed' : task.status === 'Incomplete' ? 'incomplete' : task.status === 'Overdue' ? 'overdue' : ''}`} 
                onClick={() => handleTaskClick(task.id)}
              >
                <h2>{task.name}</h2>
                <p>Assigned By: {task.assignedBy}</p>
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
                  <button className="taskboard-download-button" onClick={handleDownload}>Download Report</button>
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleCloseDialog}>Ok</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Taskboard;
