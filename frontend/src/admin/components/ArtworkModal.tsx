import React from 'react';

interface ArtworkModalProps {
  open: boolean;
  artworkUrl: string | null;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  open,
  artworkUrl,
  onClose
}) => {
  if (!open || !artworkUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900">
            Artwork preview
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-700"
          >
            Close
          </button>
        </div>
        <div className="p-4 overflow-auto">
          <img
            src={artworkUrl}
            alt="Artwork"
            className="max-h-[70vh] mx-auto object-contain"
          />
        </div>
        <div className="px-4 py-2 border-t border-slate-200 flex justify-end">
          <a
            href={artworkUrl}
            download
            className="text-xs px-3 py-1 rounded-md border border-slate-200 hover:bg-slate-50"
          >
            Download file
          </a>
        </div>
      </div>
    </div>
  );
};
