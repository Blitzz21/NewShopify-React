// src/admin/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const baseItem =
    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors';

  return (
    <aside className="w-64 bg-slate-950 text-slate-100 flex flex-col border-r border-slate-900">
      {/* Brand / title */}
      <div className="px-4 py-4 border-b border-slate-900">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
          BC Apparel
        </div>
        <div className="mt-1 text-lg font-semibold">
          Production Admin
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
        <NavLink
          to="/admin/designs"
          className={({ isActive }) =>
            `${baseItem} ${
              isActive
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-200 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          🖨 Print Jobs
        </NavLink>

        {/* Future sections – just placeholders for now */}
        <NavLink
          to="/admin/completed"
          className={({ isActive }) =>
            `${baseItem} ${
              isActive
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          ✅ Completed (soon)
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `${baseItem} ${
              isActive
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          ⚙ Settings (Phase 4)
        </NavLink>
      </nav>

      {/* Footer info */}
      <div className="px-4 py-3 border-t border-slate-900 text-[11px] text-slate-500">
        <div>Phase 2 • No auth</div>
        <div className="mt-1">
          Shift: <span className="text-slate-300">Production</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
