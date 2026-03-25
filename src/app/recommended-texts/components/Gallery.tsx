//This is where the 3 image covers will be displayed- it will handle the layout of the images and the clicks when the user presses


export default function Gallery() {
  const texts = [
    {
      id: 'brightspell',
      image: '/recommended-texts/image-covers/brightspell.png',
      width: 'flex-1',
    },
    {
      id: 'scorch',
      image: '/recommended-texts/image-covers/scorch.png',
      width: 'flex-[0.7]',
    },
    {
      id: 'questerling',
      image: '/recommended-texts/image-covers/questerling.png',
      width: 'flex-1',
    },
  ];

  //SHould stack the images on mobile and have 3 columns on desktop
  return (
    <section className="h-screen snap-start bg-white">
      <div className="flex h-full w-full flex-col md:flex-row">
        {texts.map((text) => (
          <div
            key={text.id}
            className={`flex w-full items-center justify-center md:${text.width}`}
          >
            <div className="flex h-full w-full items-center justify-center p-6">
              <img
                src={text.image}
                alt={text.id}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}