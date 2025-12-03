import React from 'react';
import type { DesignStatus } from '@/types/designs';

interface StatusDropdownProps {
  current: DesignStatus;
  onChange: (status: DesignStatus) => void;
}

export const StatusDropdown: React.FC<StatusDropdownProps> = ({
  current,
  onChange
}) => {
  return (
    <select
      value={current}
      onChange={(e) => onChange(e.target.value as DesignStatus)}
      className="border border-slate-200 rounded-md text-xs px-2 py-1 bg-white"
    >
      <option value="pending">Pending</option>
      <option value="printing">Printing</option>
      <option value="completed">Completed</option>
    </select>
  );
};
