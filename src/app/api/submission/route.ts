import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

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



export const POST = async (request: NextRequest) => {
  try {
    const { name, email, address, consent } = await request.json();

    if (!name || !email || !address) {
      return NextResponse.json(
        { message: 'Missing important fields from body.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('reckoning_signup')
      .insert([
        {
          name,
          email,
          address,
          mailing_consent: consent,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);

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

    return NextResponse.json(
      { message: 'Something went wrong while processing the submission.' },
      { status: 500 }
    );
  }
};