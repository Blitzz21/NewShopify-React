import React from 'react';
import type { DesignStatus } from '@/types/designs';

interface FiltersBarProps {
  status: 'all' | DesignStatus;
  onStatusChange: (status: 'all' | DesignStatus) => void;
  search: string;
  onSearchChange: (value: string) => void;
  total: number;
}

const STATUSES: Array<{ label: string; value: 'all' | DesignStatus }> = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Printing', value: 'printing' },
  { label: 'Completed', value: 'completed' }
];

export const FiltersBar: React.FC<FiltersBarProps> = ({
  status,
  onStatusChange,
  search,
  onSearchChange,
  total
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 flex-wrap">
        {STATUSES.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => onStatusChange(s.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              status === s.value
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {s.label}
          </button>
        ))}
        <span className="text-xs text-slate-500">{total} jobs</span>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by product / ID..."
          className="h-9 w-64 border border-slate-200 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>
    </div>
  );
};
