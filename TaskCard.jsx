import React from "react";

function TaskCard({ task, onDelete }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
