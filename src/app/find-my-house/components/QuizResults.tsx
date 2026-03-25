//Used ChatGPT to style this... doesn't look perfect but is clean 

import { HouseResult } from './quizTypes';

type QuizResultProps = {
  result: HouseResult;
};

export default function QuizResults({ result }: QuizResultProps) {
  return (
    <div className="relative mt-16 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#3a2f1f] bg-[#0f0d0a] p-10 text-center text-[#e8dcc0] shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
      
      {/* Subtle textured gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,130,0.12),transparent_60%)]" />

      {/* Top Ornament Line */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c8a96a] to-transparent" />
      </div>

      {/* Label */}
      <p className="relative mb-2 text-xs uppercase tracking-[0.35em] text-[#c8a96a]/70">
        Your House
      </p>

      {/* House Name */}
      <h2 className="relative mb-6 text-5xl font-bold tracking-[0.15em] text-[#f5e6c8] md:text-6xl">
        {result.houseName}
      </h2>

      {/* Middle Divider */}
      <div className="relative mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-[#c8a96a] to-transparent" />

      {/* Description */}
      <p className="relative mx-auto max-w-2xl text-base leading-8 text-[#d6c7a3] md:text-lg">
        {result.description}
      </p>

      {/* Bottom Ornament */}
      <div className="relative mt-10 flex items-center justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#c8a96a] to-transparent" />
      </div>
    </div>
  );
}