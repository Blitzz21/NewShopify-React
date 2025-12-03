// src/admin/components/Topbar.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const getPageTitle = (pathname: string): string => {
  if (pathname.startsWith('/admin/designs')) return 'Print Jobs';
  if (pathname.startsWith('/admin/completed')) return 'Completed Jobs';
  if (pathname.startsWith('/admin/settings')) return 'Settings';
  return 'Dashboard';
};

const Topbar: React.FC = () => {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6">
      <div>
        <h1 className="text-base font-semibold text-slate-900">
          {title}
        </h1>
        <p className="text-xs text-slate-500">
          Internal tools for production staff
        </p>
      </div>

      <div className="flex items-center gap-3 text-xs">
        <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Environment: <span className="font-semibold">Dev</span>
        </span>
        <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
          Phase 2
        </span>
      </div>
    </header>
  );
};

export default Topbar;
