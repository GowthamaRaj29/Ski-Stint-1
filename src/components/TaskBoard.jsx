import React, { useState, useEffect } from 'react';
import '../assets/TaskBoard.css'; // Import CSS file
import tasksData from './Task.json'; // Import JSON file

const Taskboard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All'); // Initial filter state

  useEffect(() => {
    // Set tasks data from JSON file
    setTasks(tasksData);
  }, []); // Empty dependency array to run only once on component mount

  // Function to handle download button click
  const handleDownload = () => {
    // Logic for downloading report...
    alert('Downloading report...');
  };

  // Function to handle task card click
  const handleTaskClick = (taskId) => {
    setSelectedTask(taskId === selectedTask ? null : taskId);
  };

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Filter tasks based on the selected option
  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <div className='bg'>
    <div className="taskboard-container" >
      <div className="taskboard-title">
        <h1>Admin Taskboard</h1>
      </div>
      {/* Menu for task filtering */}
      <div className="taskboard-menu">
        <button className={`taskboard-filter-button ${filter === 'All' ? 'active' : ''}`} onClick={() => handleFilterChange('All')}>All</button>
        <button className={`taskboard-filter-button ${filter === 'Completed' ? 'active' : ''}`} onClick={() => handleFilterChange('Completed')}>Completed</button>
        <button className={`taskboard-filter-button ${filter === 'Incomplete' ? 'active' : ''}`} onClick={() => handleFilterChange('Incomplete')}>Incomplete</button>
        <button className={`taskboard-filter-button ${filter === 'Overdue' ? 'active' : ''}`} onClick={() => handleFilterChange('Overdue')}>Overdue</button>
      </div>
      <div className="taskboard-cards">
        {filteredTasks.map(task => (
          <div key={task.id} className={`taskboard-card ${task.status === 'Complete' ? 'completed' : 'incomplete'}`} onClick={() => handleTaskClick(task.id)}>
            <h2>{task.name}</h2>
            <p>Assigned By: {task.assignedBy}</p> {/* Display assigned by person's name below the task name */}
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
  );
};

export default Taskboard;
