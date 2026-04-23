//This page will be the gated MEMBERS AREA
//Users who successfully entr the access code will be sent through to this page

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MEMBERS_ACCESS_COOKIE } from '../../lib/membersAccess';
import { cinzel } from '../fonts';

export default async function MembersAreaPage() {
  //retrieve cookies from incoming request
  const cookieStore = await cookies();
  //check if the access cookie is valid
  const hasAccess = cookieStore.get(MEMBERS_ACCESS_COOKIE)?.value === 'true';

  //if user doesnt have access, redirect them back to the access page
  if (!hasAccess) {
    redirect('/members-access');
  }

  //content to be rendered on the memebrs area if access is valid
  //This section is temp. 
  //IMPORTANT NOTES: This section uses Iframe and the PDF is saved in codebase, this is temporary. Will be replaced with S3 bucket
  // When it is functional. 
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[url('/bg-front.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,180,91,0.10),transparent_30%)]" />

      <div className="relative z-10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

          <h1 className={`mt-4 text-3xl font-semibold tracking-[0.16em] text-white md:text-5xl ${cinzel.className}`}>
            Members Area
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
            Welcome to the members area. This page is only available to visitors
            who have entered the access code successfully.
          </p>

          <div className="mt-12 w-full rounded-sm border border-white/10 bg-black/35 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <div className="rounded-sm border border-[#e0b45b]/20 bg-[linear-gradient(180deg,rgba(12,12,14,0.96)_0%,rgba(18,18,22,0.94)_50%,rgba(8,8,10,0.97)_100%)] p-6 md:p-8">
              
              {/*top right, view PDF button*/}
              <div className="flex items-center justify-end">
                <a
                  href="/members/Aftermath.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center border border-white/25 bg-transparent px-4 py-2 text-xs uppercase tracking-[0.22em] text-white transition duration-300 hover:border-white/80 hover:bg-white/5 md:text-sm ${cinzel.className}`}
                >
                  Open PDF
                </a>
              </div>

              {/*PDF viewer*/}
              <div className="mt-6">
                <div className="overflow-hidden rounded-sm border border-white/10 bg-black/40">
                  <iframe
                    src="/members/Aftermath.pdf"
                    title="Members book extract"
                    className="h-[85vh] w-full bg-white"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );

}