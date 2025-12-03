import React from 'react';
import type { DesignStatus } from '../../types';

interface StatusPillProps {
  status: DesignStatus;
}

const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  const label = status.charAt(0).toUpperCase() + status.slice(1);

  const styleMap: Record<DesignStatus, string> = {
    pending: 'bg-slate-100 text-slate-700 border-slate-200',
    printing: 'bg-blue-100 text-blue-700 border-blue-200',
    completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${styleMap[status]}`}
    >
      {label}
    </span>
  );
};

export default StatusPill;
