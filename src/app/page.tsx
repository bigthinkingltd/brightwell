export default function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-left bg-no-repeat"
      style={{ backgroundImage: "url('/bg-front.png')" }}
    >
      {/* readability overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/60" />

      <div className="relative z-10 min-h-screen flex items-center justify-end px-6 md:px-16">
        <div className="max-w-2xl text-right">
          <p className="text-sm md:text-base tracking-[0.35em] text-yellow-100/90 drop-shadow">
            WELCOME TO
          </p>

          <h1 className="mt-4 font-serif font-bold leading-[0.95] tracking-wide drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] text-5xl md:text-7xl">
            <span className="bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
              BRIGHTWELL
            </span>
            <br />
            <span className="bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
              ACADEMY
            </span>
          </h1>

          <div className="mt-10 flex justify-end">
            <img
              src="/brightwell-crest.png"
              alt="Brightwell Academy crest"
              className="w-32 md:w-64 h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              loading="eager"
              decoding="async"
            />
          </div>

          <p className="mt-10 text-sm md:text-base tracking-[0.25em] text-yellow-100/90 drop-shadow">
            CURIOSITY, COURAGE, CONVICTION.
          </p>
        </div>
      </div>
    </section>
  );
}
