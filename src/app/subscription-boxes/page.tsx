//Will hold all the content for the page for now, no need to compartmentalise yet

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";

//load and apply the font across the page
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SubscriptionBoxesPage() {
  return (
    //page wrapper- sets background colour, padding, and text colour
    <main className="min-h-screen bg-[#ede1cf] px-4 py-10 text-black sm:px-6 sm:py-14">
      
      {/*main centred container, controling layout /width + applies font*/}
      <div className={`mx-auto flex max-w-[900px] flex-col items-center text-center ${cinzel.className}`}>

        {/*header section, crest image with title overlapping bottom of image*/}
        <div className="relative flex w-full flex-col items-center">
          
          {/*image of the crest*/}
          <div className="w-full max-w-[420px]">
            <Image
              src="/subscription-boxes/subscription-boxes.png"
              alt="Brightwell Academy crest"
              width={900}
              height={260}
              className="block w-full h-auto object-contain"
              priority //image render as priority
            />
          </div>

          {/*title, its position over the blank space at the bottom of the image*/}
          <h1 className="absolute bottom-0 translate-y-[54%] text-[2.7rem] leading-none tracking-[0.06em] sm:text-[4.3rem]">
            BRIGHTWELL ACADEMY
          </h1>
        </div>

        {/*space separating title from the following content */}
        <div className="h-6 sm:h-8" />

        {/*the tagline*/}
        <p className="text-[0.9rem] uppercase tracking-[0.28em] sm:text-[1rem]">
          Curiosity. Courage. Conviction.
        </p>

        {/*text*/}
        <h2 className="mt-8 max-w-[780px] text-[2rem] leading-tight sm:text-[2.9rem]">
          A Monthly Mystery Box for Curious Minds Ages 8+
        </h2>

        {/*text */}
        <p className="mt-4 max-w-[760px] text-[1rem] leading-relaxed sm:text-[1.18rem]">
          Step beyond the ordinary and into the world of the Brightwell Chronicles.
        </p>

        {/*text*/}
        <p className="mt-4 max-w-[820px] text-[0.95rem] leading-7 sm:text-[1.02rem]">
          Brightwell Academy is a school where nothing is as it seems. Curiosity is
          encouraged... but it comes at a cost.
        </p>

        {/*content image*/}
        <div className="mt-8 w-full max-w-[300px] sm:max-w-[360px]">
          <Image
            src="/subscription-boxes/body-content.png"
            alt="Brightwell Academy subscription box collage"
            width={800}
            height={500}
            className="block w-full h-auto object-contain"
          />
        </div>

        {/*text with call to action*/}
        <div className="mt-8">
          
          {/*CTA tagline */}
          <p className="text-[1.4rem] leading-tight sm:text-[2rem]">
            Start your first term at Brightwell at:
          </p>

          {/*external link, opening in a new tab*/}
          <Link
            href="https://www.brightwell-academy.com"
            target="_blank"
            className="mt-3 inline-block text-[1.4rem] leading-tight underline underline-offset-4 hover:opacity-70 sm:text-[2rem]"
          >
            www.brightwell-academy.com
          </Link>
        </div>

        {/* TandCs page button*/}
        <div className="mt-16 sm:mt-20">
          <Link
            href="/subscription-boxes/terms"
            className="inline-block border border-black/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black/80 transition hover:bg-black hover:text-[#ede1cf] sm:text-xs"
          >
            Subscription Terms
          </Link>
        </div>

      </div>
    </main>
  );
}