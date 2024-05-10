import React, { useState, useEffect } from 'react';

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or API endpoint
    fetch('Tasks1.json')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleDownloadReport = () => {
    // Logic to download report
    console.log('Downloading report...');
  };

  return (
    <div className='task-description'>
      
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Staff</th>
            <th>Assigned By</th>
            <th>Assigned To</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.staff}</td>
              <td>{task.assignedBy}</td>
              <td>{task.assignedTo}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={handleDownloadReport}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskComponent;
