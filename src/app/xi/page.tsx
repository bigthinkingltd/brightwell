'use client';

import { useState } from 'react';
import PDFViewer from './components/PDFViewer';

export default function XIPage() {
  //Stores the PDF the user has clicked - Starts as null because no PDF is open at first
  const [selectedPdf, setSelectedPdf] = useState<{
    title: string;
    pdfUrl: string;
  } | null>(null);

  //array of PDFs shown on the page
  const documents = [
    {
      title: 'Ravens',
      pdfUrl: '/pdfs/xi/Ravens.pdf',
    },
    {
      title: 'April',
      pdfUrl: '/pdfs/xi/April.pdf',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#18120d] px-6 py-12 text-white">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,180,91,0.12),_transparent_40%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#f3e7c2] md:text-5xl">
            XI
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#d6c7a1] md:text-base">
            Explore the documents below. Select a document window to open it in a larger reading view.
          </p>
        </div>

        {/* PDF preview cards */}
        <div className="space-y-12">
          {documents.map((document) => (
            <PDFViewer
              key={document.pdfUrl}
              title={document.title}
              pdfUrl={document.pdfUrl}
              onOpen={() => setSelectedPdf(document)}
            />
          ))}
        </div>
      </div>

      {/* Modal - only appears when a PDF has been selected */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#e0b45b]/30 bg-[#16120f] shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-[#e0b45b]/20 px-5 py-4">
              <h2 className="text-lg font-semibold text-[#f3e7c2] md:text-xl">
                {selectedPdf.title}
              </h2>

              {/* Closes the modal */}
              <button
                type="button"
                onClick={() => setSelectedPdf(null)}
                className="rounded-full border border-[#e0b45b]/30 px-4 py-2 text-sm text-[#f3e7c2] transition hover:border-[#e0b45b] hover:text-[#e0b45b]"
              >
                Close
              </button>
            </div>

            {/* Large PDF viewer */}
            <div className="flex-1">
              <iframe
                src={selectedPdf.pdfUrl}
                className="h-full w-full"
                title={selectedPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}