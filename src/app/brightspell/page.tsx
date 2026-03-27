export default function brightspell() {
  return (
    <section className="flex min-h-screen w-full flex-col bg-[#fcfaf6]">

      {/*the title */}
      <div className="flex justify-center pt-16 pb-6">
        <h1 className="text-4xl font-bold md:text-5xl text-[#2f2418]">
          Brightspell
        </h1>
      </div>

      {/*image */}
      <div className="flex-1 w-full px-6 pb-6 flex items-center justify-center">
        <img
          src="/recommended-texts/image-covers/brightspell.png"
          alt="Brightspell"
          className="max-w-[700px] w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}