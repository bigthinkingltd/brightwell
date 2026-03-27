export default function Tab2() {
  return (
    <section className="flex min-h-screen w-full flex-col">

      {/*The title */}
      <div className="flex justify-center pt-16 pb-6">
        <h2 className="text-4xl font-bold md:text-5xl text-black">
          Arlo's Compass
        </h2>
      </div>

      {/*Imports image- takes up page and has a small border, temporary layout, check w/customer */}
      <div className="flex-1 w-full px-6 pb-6 flex items-center justify-center">
        <img 
        src="/about-brightwell/arlos-compas.png"
        alt="Darkwell"
        className="max-w-[1200px] w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}