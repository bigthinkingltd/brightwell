//API route will handle the access code submisssion from the access page
//Will compare the submitted code against the server-side env variable

import { NextResponse } from 'next/server';
import { MEMBERS_ACCESS_COOKIE } from '../../../lib/membersAccess';

export async function POST(request: Request) {
  const body = await request.json();
  const code = body?.code;

  //validates that a code was provided and that its a string
  if (!code || typeof code !== 'string') {
    return NextResponse.json(
      { success: false, message: 'Please enter the access code.' },
      { status: 400 }
    );
  }
}