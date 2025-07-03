'use client';
import { useState } from 'react';
import Header from './header';

export default function ArchivesPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <div className="min-h-screen px-4 py-12 overflow-y-auto">
      <Header />

      <div className="flex justify-center py-35 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          <div
            onClick={() => setSelectedPdf('/questerlingbook.pdf')}
            className="border border-black p-6 text-center grid place-items-center h-35">
            <h2 className="text-black text-xl font-bold">Questerling Care</h2>
          </div>

          <div className="border border-black p-6 text-center grid place-items-center h-35">
            <h2 className="text-black text-xl font-bold">House of Watch Handbook</h2>
          </div>
        </div>
      </div>

      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-[#fefae0] border border-black shadow-xl rounded-xl w-full max-w-4xl h-[85vh] relative overflow-hidden flex flex-col">
            <button
              className="absolute top-2 right-4 text-black text-2xl hover:text-red-500"
              onClick={() => setSelectedPdf(null)}
              aria-label="Close PDF">
              &times;
            </button>
            <iframe
              src={selectedPdf + "#toolbar=0&navpanes=0&scrollbar=0"}
              className="w-full h-full"
              title="Questerling PDF"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
