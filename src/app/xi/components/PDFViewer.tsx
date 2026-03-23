//PDF rendering engine -- uses react-pdf
//Displays the actual document

'use client';

type PDFViewerProps = {
  fileUrl: string;
  onClose: () => void;
};

export default function PDFViewer({ fileUrl, onClose }: PDFViewerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="flex h-full flex-col">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <p className="text-white/80 text-sm">Viewing document</p>

          <button
            onClick={onClose}
            className="rounded border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>
        </div>

        {/* PDF */}
        <iframe
          src={fileUrl}
          className="flex-1 w-full bg-white"
        />
      </div>
    </div>
  );
}