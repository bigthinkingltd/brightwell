import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextRequest, NextResponse } from 'next/server';

const ses = new SESClient({ region: process.env.AWS_REGION ?? 'eu-west-2' });

export const POST = async (request: NextRequest) => {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing important fields from body' }),
    };
  }

  const from = 'no-reply@bigthinkingpublishing.com';
  const to = 'kate@bigthinkingpublishing.com';

  const cmd = new SendEmailCommand({
    Source: from,
    Destination: { ToAddresses: [to] },
    ReplyToAddresses: [email],
    Message: {
      Subject: { Data: `Brightwell | The Reckoning Submission: ${name}` },
      Body: {
        Text: { Data: `From: ${name} <${email}>\n\n${message}` },
      },
    },
  });

  await ses.send(cmd);

  return new NextResponse(null, { status: 200 });
};
