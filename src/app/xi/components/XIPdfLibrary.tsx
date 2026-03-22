//This is the screen for successfully passing the quiz
//It will show the actual content for XI (The PDFs)

'use client';

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
  return (
    <div className="min-h-screen bg-[#111111] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
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
            <div
              key={document.id}
              className="rounded border border-white/20 bg-white/5 p-6"
            >
              <h2 className="text-2xl font-medium">{document.title}</h2>

              <p className="mt-3 text-sm text-white/70">
                PDF file ready for display.
              </p>

              <p className="mt-4 text-xs text-white/40">{document.fileUrl}</p>
            </div>
          ))}
        </div>

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