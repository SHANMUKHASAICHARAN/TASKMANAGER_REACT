import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddTaskPage from './pages/AddTaskPage';
import ViewTaskPage from './pages/ViewTaskPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/add-task" element={<AddTaskPage />} />
      <Route path="/view-tasks" element={<ViewTaskPage />} />
    </Routes>
  );
}

export default App;
