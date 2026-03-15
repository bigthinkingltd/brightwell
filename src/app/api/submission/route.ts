//import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/SupabaseAdmin';

export const runtime = 'nodejs';

/*const ses = new SESClient({ region: process.env.AWS_REGION ?? 'eu-west-2' });

export const POST = async (request: NextRequest) => {
  const { name, email, address, consent } = await request.json();
  if (!name || !email || !address) {
    return NextResponse.json(
      { error: JSON.stringify({ error: 'Missing important fields from body' }) },
      { status: 400 },
    );
  }

  const from = 'no-reply@bigthinkingpublishing.com';
  const to = 'kate@bigthinkingpublishing.com';

  const cmd = new SendEmailCommand({
    Source: from,
    Destination: { ToAddresses: [to] },
    ReplyToAddresses: [email],
    Message: {
      Subject: { Data: `Brightwell, The Reckoning | Submission from ${name}` },
      Body: {
        Text: {
          Data: `From: ${name} <${email}>\n\nAddress: ${address}\n\nConsent: ${consent ? 'Has given consent' : 'Has NOT given consent'}`,
        },
      },
    },
  });

  await ses.send(cmd);

  return NextResponse.json('ok', { status: 200 });
};*/


import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

export const POST = async (request: NextRequest) => {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl) {
      return NextResponse.json(
        { message: 'NEXT_PUBLIC_SUPABASE_URL is missing.' },
        { status: 500 }
      );
    }

    if (!supabaseSecretKey) {
      return NextResponse.json(
        { message: 'SUPABASE_SECRET_KEY is missing.' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const body = await request.json();

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const address = String(body.address ?? '').trim();
    const consent = Boolean(body.consent);
    const age_permission = Boolean(body.age_permission);

    if (!name || !email || !address) {
      return NextResponse.json(
        { message: 'Missing important fields from body.' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { message: 'Name is too long.' },
        { status: 400 }
      );
    }

    if (email.length > 300) {
      return NextResponse.json(
        { message: 'Email address is too long.' },
        { status: 400 }
      );
    }

    if (address.length > 500) {
      return NextResponse.json(
        { message: 'Address is too long.' },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!age_permission) {
      return NextResponse.json(
        { message: 'You must confirm you are 18 or over OR have the consent of an adult.' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('reckoning_signup').insert([
      {
        name,
        email,
        address,
        mailing_consent: consent,
        age_permission,
      },
    ]);

    if (error) {
      console.error('Supabase insert error:', error);

      return NextResponse.json(
        {
          message: 'Failed to save submission.',
          error: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Submission received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong while processing the submission.',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
};



/*THE GOOD CODE
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    // Store the body so each field can be cleaned

    const name = String(body.name ?? '').trim();
    // Name converted to string + trims whitespace

    const email = String(body.email ?? '').trim().toLowerCase();
    // Makes email lower case + removes whitespace

    const address = String(body.address ?? '').trim();
    // Makes address a string + trims it

    const consent = Boolean(body.consent);
    // Consent true/false boolean

    const age_permission = Boolean(body.age_permission);
    //Age perm. to true/false bool

    if (!name || !email || !address) {
      return NextResponse.json(
        { message: 'Missing important fields from body.' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      //Limits name length
      return NextResponse.json(
        { message: 'Name is too long.' },
        { status: 400 }
      );
    }

    if (email.length > 300) {
      //Limits email address length
      return NextResponse.json(
        { message: 'Email address is too long.' },
        { status: 400 }
      );
    }

    if (address.length > 500) {
      //Limits text length
      return NextResponse.json(
        { message: 'Address is too long.' },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Server-side email format validation

    if (!emailPattern.test(email)) {
      //Rejects emails that don't look like a valid email address
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!age_permission) {
      return NextResponse.json(
        { message: 'You must confirm you are 18 or over OR have the consent of an adult.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('reckoning_signup')
      .insert([
        {
          name,
          //Uses the cleaned name variable

          email,
          //Uses the cleanedemail variable

          address,
          //Uses the cleaned address variable

          mailing_consent: consent,
          //Uses the normalised boolean 

          age_permission,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      //for debugging database issues

      return NextResponse.json(
        { message: 'Failed to save submission.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Submission received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    //logs and failure

    return NextResponse.json(
      { message: 'Something went wrong while processing the submission.' },
      { status: 500 }
    );
  }
};*/