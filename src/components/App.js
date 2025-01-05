import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddTaskPage from './AddTaskPage';
import EditTaskPage from './EditTaskPage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>To-Do List</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
