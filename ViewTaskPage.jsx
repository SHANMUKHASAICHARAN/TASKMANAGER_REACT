import React, { useEffect, useState } from 'react';
import './PageStyles.css';

function ViewTaskPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ priority: '', status: '' });
  const [page, setPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  const filteredTasks = tasks.filter(task => {
    return (!filter.priority || task.priority === filter.priority) &&
           (!filter.status || task.status === filter.status);
  });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginated = filteredTasks.slice((page - 1) * tasksPerPage, page * tasksPerPage);

  const deleteTask = (id) => {
    const updated = tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updated));
    setTasks(updated);
  };

  const completed = tasks.filter(t => t.status === 'Completed').length;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="page" style={{ backgroundImage: `url('/viewtask-bg.jpg')` }}>
      <div className="form">
        <h2>View Tasks</h2>
        <div className="filters">
          <select onChange={(e) => setFilter({ ...filter, priority: e.target.value })}>
            <option value="">All Priorities</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
            <option value="">All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <p>Total: {tasks.length} | Completed: {completed} | {percent}% Done</p>

        {paginated.map(task => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}>{i + 1}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewTaskPage;
