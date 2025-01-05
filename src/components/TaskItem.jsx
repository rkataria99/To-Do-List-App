// src/components/TaskItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <li>
      <div className="task-item-header">
        <div>
          <h3>{task.title}</h3>
        </div>
        <div>
          <span className={task.completed ? 'status-completed' : 'status-pending'}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
      
      {/* The edit button on the next line below */}
      <div className="task-item-edit">
        <Link to={`/edit/${task.id}`}>
          <button className="edit-button">Edit</button>
        </Link>
      </div>
    </li>
  );
};

export default TaskItem;
