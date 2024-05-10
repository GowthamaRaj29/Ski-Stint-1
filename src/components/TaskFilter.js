import React from 'react';

const TaskFilters = ({ selectedFilter, setSelectedFilter }) => {
  const filterOptions = ['All', 'Current', 'Incomplete', 'Complete', 'Overdue'];

  return (
    <div className="task-filters">
      {filterOptions.map(option => (
        <button
          key={option}
          className={`filter-button ${selectedFilter === option ? 'active' : ''}`}
          onClick={() => setSelectedFilter(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
