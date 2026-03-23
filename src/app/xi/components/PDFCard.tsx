//The PDF item -- will display the title and a clickable card
//Hopefully makes it easy to add more PDFs in future


'use client';

type PDFCardProps = {
  title: string;
  fileUrl: string;
  onOpen: (fileUrl: string) => void;
};

export default function PDFCard({ title, fileUrl, onOpen }: PDFCardProps) {
  return (
    <div className="rounded border border-white/20 bg-white/5 p-6">
      <h2 className="text-2xl font-medium text-white">{title}</h2>

      <p className="mt-3 text-sm text-white/70">
        PDF file ready for display.
      </p>

      <button
        type="button"
        onClick={() => onOpen(fileUrl)}
        className="mt-6 rounded border border-white px-5 py-2 text-white transition hover:bg-white hover:text-black"
      >
        Open document
      </button>
    </div>
  );
}