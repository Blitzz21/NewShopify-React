import React from 'react';
import type { Design } from '../../types';
import StatusPill from './StatusPill';

interface DesignsTableProps {
  designs: Design[];
  loading: boolean;
  error: string | null;
  page: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onPageChange: (page: number) => void;
}

const DesignsTable: React.FC<DesignsTableProps> = ({
  designs,
  loading,
  error,
  page,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}) => {
  // quick debug: see in console how many rows we got
  console.log('DesignsTable rows:', designs.length);

  if (loading) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        Loading jobs…
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white border border-red-200 rounded-xl p-4 text-sm text-red-700">
        {error}
      </div>
    );
  }

  if (!designs.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        No jobs found for this filter.
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="text-left px-4 py-2 font-semibold text-slate-700">
              Created
            </th>
            <th className="text-left px-4 py-2 font-semibold text-slate-700">
              Product / Variant
            </th>
            <th className="text-left px-4 py-2 font-semibold text-slate-700">
              Qty
            </th>
            <th className="text-left px-4 py-2 font-semibold text-slate-700">
              Status
            </th>
            <th className="text-left px-4 py-2 font-semibold text-slate-700">
              Artwork
            </th>
            <th className="text-right px-4 py-2 font-semibold text-slate-700">
              Checkout
            </th>
          </tr>
        </thead>
        <tbody>
          {designs.map((d) => (
            <tr
              key={d.id}
              className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50/60"
            >
              <td className="px-4 py-2 align-top text-slate-600 text-xs">
                {d.createdAt
                  ? new Date(d.createdAt).toLocaleString()
                  : '—'}
              </td>

              <td className="px-4 py-2 align-top">
                <div className="text-xs font-semibold text-slate-900 break-all">
                  {d.productId}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {d.color || '—'} • {d.size || '—'}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Variant: {d.variantId}
                </div>
              </td>

              <td className="px-4 py-2 align-top text-slate-800 text-sm">
                {d.quantity}
              </td>

              <td className="px-4 py-2 align-top">
                <StatusPill status={d.status} />
              </td>

              <td className="px-4 py-2 align-top">
                {d.artworkUrl ? (
                  <a
                    href={d.artworkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-2 py-1 text-[11px] border border-slate-200 rounded-md hover:bg-slate-50"
                  >
                    View artwork
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400">
                    No file
                  </span>
                )}
              </td>

              <td className="px-4 py-2 align-top text-right">
                {d.checkoutUrl ? (
                  <a
                    href={d.checkoutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-2 py-1 text-[11px] border border-slate-200 rounded-md hover:bg-slate-50"
                  >
                    Open checkout
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400">
                    —
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 text-xs text-slate-600 bg-slate-50">
        <div>Page {page}</div>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={!hasPreviousPage}
            onClick={() => hasPreviousPage && onPageChange(page - 1)}
            className="px-2 py-1 rounded border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={!hasNextPage}
            onClick={() => hasNextPage && onPageChange(page + 1)}
            className="px-2 py-1 rounded border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignsTable;
