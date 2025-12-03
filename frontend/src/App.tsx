import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminApp from './admin/AdminApp';

const App: React.FC = () => {
  return (
    <Routes>
      {/* PUBLIC WEBSITE */}
      <Route path="/" element={<HomePage />} />

      {/* ADMIN SYSTEM */}
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  );
};

export default App;
