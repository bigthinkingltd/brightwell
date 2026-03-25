import type { CSSProperties } from 'react';
import { cinzel } from './fonts';

export default function Home() {
  const chroniclesCardStyle = {
    background: `
      radial-gradient(circle at 15% 20%, rgba(255,215,120,.14) 0 1px, transparent 2px),
      radial-gradient(circle at 80% 25%, rgba(255,215,120,.18) 0 1.5px, transparent 2.5px),
      radial-gradient(circle at 65% 70%, rgba(255,215,120,.12) 0 1px, transparent 2px),
      radial-gradient(circle at 30% 75%, rgba(255,215,120,.10) 0 1px, transparent 2px),
      radial-gradient(circle at 50% 50%, rgba(255,224,150,.08) 0 1px, transparent 2px),
      radial-gradient(ellipse at top, rgba(255,214,120,.08), transparent 45%),
      linear-gradient(180deg, #0d2b57 0%, #0c2a54 35%, #0a2246 100%)
    `,
    backgroundSize: `
      180px 180px,
      240px 240px,
      210px 210px,
      260px 260px,
      320px 320px,
      100% 100%,
      100% 100%
    `,
    boxShadow: `
      inset 0 30px 80px rgba(255,210,120,.04),
      inset 0 -20px 60px rgba(0,0,0,.18)
    `,
    fontFamily: "'Cinzel', 'Cormorant Garamond', 'Times New Roman', serif",
  } satisfies CSSProperties;

  return (
    <section className="min-h-screen bg-[url('/bg-front.png')] bg-cover bg-left bg-blend-multiply bg-black/60">
      <div className="flex flex-col min-h-screen px-2 md:px-10 gap-y-8 md:gap-y-20">
        <div className="h-[60vh]">
          <div className="flex h-full flex-col items-end justify-end gap-y-8 md:gap-y-12">
            <h1 className="font-serif text-5xl md:text-8xl md:tracking-widest leading-[1.1] font-bold tracking-wider drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] text-end">
              <span className="flex text-md md:text-lg tracking-[0.25em] text-yellow-100/90">
                WELCOME TO
              </span>

              <span className="bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
                BRIGHTWELL
                <br />
                ACADEMY
              </span>
            </h1>

            <p
              className="flex flex-row text-sm md:text-lg gap-x-2 tracking-[0.25em] text-yellow-100/90 drop-shadow"
              style={{
                textShadow:
                  '0 0 2px rgba(255,245,210,.65), 0 0 10px rgba(224,180,91,.35), 0 1px 0 #8c6428, 0 2px 6px rgba(70,35,5,.16)',
              }}
            >
              <span>CURIOSITY.</span>
              <span>COURAGE.</span>
              <span>CONVICTION.</span>
            </p>
          </div>
        </div>

        {/*2 perm. rows */}
        <div className="flex flex-col items-center md:items-end gap-y-4">

          {/* Top row buttons*/}
          <div className="flex flex-row flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4">
            <a
              href="https://www.waterstones.com/book/the-wonderchild/kate-simkins/9781917842631"
              className="flex w-32 h-16 md:w-44 md:h-20 items-center justify-center rounded-sm border border-white/20 transition-colors duration-300 hover:border-[#e0b45b]"
              style={chroniclesCardStyle}
              target="_blank"
            >
              <span
                className={`flex flex-col items-center justify-center text-center font-semibold uppercase leading-[1.1] tracking-[0.08em] text-[#e0b45b] text-sm md:text-base ${cinzel.className}`}
                style={{
                  textShadow:
                    '0 0 1px rgba(255,245,210,.5), 0 1px 0 #8c6428, 0 2px 6px rgba(70,35,5,.16)',
                }}
              >
                <span>THE</span>
                <span>WONDERCHILD</span>
              </span>
            </a>


            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-black bg-[url('/raven_white_1.svg')] bg-size-[auto_180px] bg-top-left bg-no-repeat px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-white transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/reckoning"
            >
              The Reckoning
            </a>


            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-[#2e3a2f] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-white transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/find-my-house"
            >
              Find My House
            </a>

             <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-gradient-to-br from-[#1c1f24] via-[#2a2f36] to-[#3b424b] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-gray-200 transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/history"
            >
              History
            </a>
          </div>


          {/*Bottom row buttons */}
          <div className="flex flex-row flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4">

            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-gradient-to-br from-[#0f1f2e] via-[#1a3a4f] to-[#2c5f73] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-cyan-200 transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/xi"
            >
              XI
            </a>

            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-gradient-to-br from-[#3b2f1a] via-[#5a4422] to-[#8c6a2a] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-yellow-100 transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/about-brightwell"
            >
              About Brightwell
            </a>

            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-gradient-to-br from-[#1a1023] via-[#2b1740] to-[#3a1f5a] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-purple-200 transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/http://www.darkwell-academy.com"
              target="_blank"
            >
              Darkwell
            </a>

            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-gradient-to-br from-[#0f2a1f] via-[#1f4a35] to-[#2f6f4f] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-emerald-200 transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/recommended-texts"
            >
              Recommended Texts
            </a>

            <a
              className={`flex justify-center w-32 h-16 md:w-44 md:h-20 items-center rounded-sm border border-white/20 bg-gradient-to-br from-[#1a1f3b] via-[#2e2a6b] to-[#4b3fa3] px-2 text-center text-sm md:text-base font-semibold leading-tight tracking-[0.08em] text-indigo-200 transition-colors duration-300 hover:border-[#e0b45b] ${cinzel.className}`}
              href="/recommended-texts"
            >
              Brightspell
            </a>

          </div>

        </div>
      </div>



      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40 hover:text-white/70 transition-colors duration-300">
        <a href="/privacy-terms">
          Privacy and Terms
        </a>
      </div>
    </section>
  );
}
