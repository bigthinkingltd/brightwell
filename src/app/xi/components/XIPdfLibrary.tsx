//This is the screen for successfully passing the quiz
//It will show the actual content for XI (The PDFs)

'use client';

import { useState } from 'react';
import PDFCard from './PDFCard';
import PDFViewer from './PDFViewer';

type XIPdfLibraryProps = {
  onReturnToStart: () => void;
};

const documents = [
  {
    id: 'ravens',
    title: 'Ravens',
    fileUrl: '/pdfs/xi/Ravens.pdf',
  },
  {
    id: 'april',
    title: 'April',
    fileUrl: '/pdfs/xi/April.pdf',
  },
];

export default function XIPdfLibrary({
  onReturnToStart,
}: XIPdfLibraryProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  function handleOpenPdf(fileUrl: string) {
    setSelectedPdf(fileUrl);
  }

  return (
    <div className="min-h-screen bg-[#111111] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Access granted
          </h1>

          <p className="mt-4 text-white/80 md:text-lg">
            Archive unlocked. Select a document below to continue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((document) => (
            <PDFCard
              key={document.id}
              title={document.title}
              fileUrl={document.fileUrl}
              onOpen={handleOpenPdf}
            />
          ))}
        </div>

        {selectedPdf && <PDFViewer fileUrl={selectedPdf} />}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onReturnToStart}
            className="rounded border border-white px-6 py-3 transition hover:bg-white hover:text-black"
          >
            Return to start
          </button>
        </div>
      </div>
    </div>
  );
}