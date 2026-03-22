//PDF rendering engine -- uses react-pdf
//Displays the actual document

'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

type PDFViewerProps = {
  fileUrl: string;
};

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="mb-6 flex items-center gap-4">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="rounded border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <p className="text-sm text-white/80">
          Page {pageNumber} of {numPages || '--'}
        </p>

        <button
          type="button"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="rounded border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>

      <div className="overflow-x-auto rounded border border-white/20 bg-white p-4">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p className="text-black">Loading PDF...</p>}
          error={<p className="text-black">Failed to load PDF.</p>}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}