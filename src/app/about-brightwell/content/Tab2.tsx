export default function Tab2() {
  return (
    <section className="flex min-h-screen w-full flex-col">

      {/*The title */}
      <div className="flex justify-center pt-16 pb-6">
        <h2 className="text-4xl font-bold md:text-5xl text-black">
          Darkwell
        </h2>
      </div>

      {/*Imports image- takes up page and has a small border, temporary layout, check w/customer */}
      <div className="flex-1 w-full px-6 pb-6">
        <img 
        src="/about-brightwell/darkwell.png"
        alt="Darkwell"
        className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}