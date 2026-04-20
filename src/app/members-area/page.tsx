//This page will be the gated MEMBERS AREA
//Users who successfully entr the access code will be sent through to this page

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MEMBERS_ACCESS_COOKIE } from '../../lib/membersAccess';

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
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="text-3xl font-semibold">Members Area</h1>

        <p className="mt-4 text-base leading-7">
          Welcome to the members area. This page is only available to visitors
          who have entered the access code successfully.
        </p>
      </div>
    </main>
  );
}