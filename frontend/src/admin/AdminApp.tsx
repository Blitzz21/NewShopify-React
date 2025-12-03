import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DesignsPage from './pages/DesignsPage';

const AdminApp: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        {/* /admin/designs */}
        <Route path="designs" element={<DesignsPage />} />
        {/* /admin → /admin/designs */}
        <Route path="" element={<Navigate to="designs" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminApp;
