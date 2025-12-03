// src/admin/components/AdminLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main column */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <Topbar />

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
