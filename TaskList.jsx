import React from "react";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
