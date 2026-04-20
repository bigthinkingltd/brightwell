//API route will handle the access code submisssion from the access page
//Will compare the submitted code against the server-side env variable

import { NextResponse } from 'next/server';
import { MEMBERS_ACCESS_COOKIE } from '../../../lib/membersAccess';

export async function POST(request: Request) {
}

