import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageStyles.css';

function AddTaskPage() {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'Pending'
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ ...task, id: Date.now() });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    navigate('/view-tasks');
  };

  return (
    <div className="page" style={{ backgroundImage: `url('/addtask-bg.jpg')` }}>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select name="status" value={task.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskPage;
