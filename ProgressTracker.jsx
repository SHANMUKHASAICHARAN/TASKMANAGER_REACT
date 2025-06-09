import React from "react";

function ProgressTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.status === "Completed").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2>Progress Tracker</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Progress: {percent}%</p>
    </div>
  );
}

export default ProgressTracker;
