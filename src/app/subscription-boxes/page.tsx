//Will hold all the content for the page for now, no need to compartmentalise yet

import Image from "next/image";
import Link from "next/link";

export default function SubscriptionBoxesPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-[#2f2418]">
      <div className="min-h-screen px-6 py-16 text-[#2f2418]">

        {/*the header image, will sit above everything. */}
        <div className="mb-10 w-full max-w-3xl">
          <Image
            src="/subscription-boxes.png"
            alt="Brightwell Academy Header"
            width={1200}
            height={300}
            className="w-full h-auto object-contain"
            priority //want it to load first. 
            />
        </div>
      </div>


    </main>
  )
}