import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const ses = new SESClient({ region: process.env.AWS_REGION ?? 'eu-west-2' });

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
};
