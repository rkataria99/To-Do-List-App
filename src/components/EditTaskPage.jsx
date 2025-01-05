import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask } from './features/tasksSlice';

const EditTaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === parseInt(id))
  );

  const [status, setStatus] = useState('');

  useEffect(() => {
    if (task) {
      setStatus(task.completed ? 'Completed' : 'Pending');
    }
  }, [task]);

  const handleUpdate = () => {
    dispatch(updateTask({ id: parseInt(id), status }));
    navigate('/');
  };

  if (!task) return <div>Task not found!</div>;

  return (
    <div>
      <h2>Edit Task</h2>
      <p><h2>{task.title}</h2></p>
      <p><h2>{task.description}</h2></p>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleUpdate}>Update Status</button>
    </div>
  );
};

export default EditTaskPage;
 
