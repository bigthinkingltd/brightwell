//render page wrapper + HistoryTabs

import HistoryTabs from './components/HistoryTabs';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#120f0a] px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[#c9a86a]">
            Brightwell Archives
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">History</h1>

        </header>

        <HistoryTabs />
      </div>
    </main>
  );
}