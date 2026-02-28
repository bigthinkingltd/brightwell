export default function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-left bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-front.png')",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      {/* readability overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/60" />

      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-16">
        <div className="max-w-2xl text-right">
          <p className="text-sm tracking-[0.35em] text-yellow-100/90 drop-shadow md:text-base">
            WELCOME TO
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-[0.95] font-bold tracking-wide drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] md:text-7xl">
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
              className="h-auto w-32 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] md:w-64"
              loading="eager"
              decoding="async"
            />
          </div>

          <p className="mt-10 text-sm tracking-[0.25em] text-yellow-100/90 drop-shadow md:text-base">
            CURIOSITY, COURAGE, CONVICTION.
          </p>

          <div className="flex justify-end">
            <a
              href="/reckoning"
              className="mt-12 w-60 items-center justify-center rounded-sm border border-white/20 bg-black/50 bg-[url('/raven_white_1.svg')] bg-size-[auto_270px] bg-top-left bg-no-repeat px-6 py-8 text-center text-lg text-white"
            >
              The Reckoning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
