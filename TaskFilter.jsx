import React, { useState } from "react";

function Filters({ onFilterChange }) {
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = () => {
    onFilterChange({ priority, status });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2>Filters</h2>
      <label>Priority: </label>
      <select value={priority} onChange={(e) => { setPriority(e.target.value); handleChange(); }}>
        <option value="">All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      &nbsp;&nbsp;
      <label>Status: </label>
      <select value={status} onChange={(e) => { setStatus(e.target.value); handleChange(); }}>
        <option value="">All</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}

export default Filters;
