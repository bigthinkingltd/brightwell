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

  //read correct access code from the env file
  const configuredCode = process.env.MEMBERS_ACCESS_CODE;

  //fail safely if the env variable has not been configured
  if (!configuredCode) {
    return NextResponse.json(
      {
        success: false,
        message: 'MEMBERS_ACCESS_CODE is missing from your environment variables.',
      },
      { status: 500 }
    );
  }

  //compare the submitted code with the configured serverside code
  if (code.trim() !== configuredCode.trim()) {
    return NextResponse.json(
      { success: false, message: 'Invalid access code.' },
      { status: 401 }
    );
  }



}