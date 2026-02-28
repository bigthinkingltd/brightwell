import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ReckoningPayload = {
  name?: string;
  email?: string;
  address?: string;
  consent?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeEnvValue = (value: string | undefined) => {
  if (!value) return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim() || undefined;
  }

  return trimmed;
};

const getFirstEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = normalizeEnvValue(process.env[key]);
    if (value) return value;
  }

  return undefined;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReckoningPayload;

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const address = body.address?.trim() ?? '';
    const consent = Boolean(body.consent);

    if (!name || !email || !address) {
      return NextResponse.json(
        { message: 'Name, email and address are required.' },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const toAddress = getFirstEnv(
      'RECKONING_TO_EMAIL',
      'NEXT_PUBLIC_RECKONING_TO_EMAIL',
      'AMPLIFY_RECKONING_TO_EMAIL',
    );
    const fromAddress = getFirstEnv(
      'RECKONING_FROM_EMAIL',
      'NEXT_PUBLIC_RECKONING_FROM_EMAIL',
      'AMPLIFY_RECKONING_FROM_EMAIL',
    );

    if (!toAddress || !fromAddress) {
      console.error('Missing SES config env vars', {
        hasReckoningTo: Boolean(process.env.RECKONING_TO_EMAIL),
        hasReckoningFrom: Boolean(process.env.RECKONING_FROM_EMAIL),
        hasNextPublicTo: Boolean(process.env.NEXT_PUBLIC_RECKONING_TO_EMAIL),
        hasNextPublicFrom: Boolean(process.env.NEXT_PUBLIC_RECKONING_FROM_EMAIL),
      });

      return NextResponse.json(
        {
          message:
            'Email service is not configured. Check RECKONING_TO_EMAIL and RECKONING_FROM_EMAIL in server environment.',
        },
        { status: 500 },
      );
    }

    const region = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? 'us-east-1';
    const sesClient = new SESv2Client({ region });

    const textBody = [
      'New Reckoning form submission',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Mailing Address: ${address}`,
      `Consent to mailing list: ${consent ? 'Yes' : 'No'}`,
      `Submitted at: ${new Date().toISOString()}`,
    ].join('\n');

    await sesClient.send(
      new SendEmailCommand({
        FromEmailAddress: fromAddress,
        Destination: {
          ToAddresses: [toAddress],
        },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: {
              Data: `Reckoning submission: ${name}`,
              Charset: 'UTF-8',
            },
            Body: {
              Text: {
                Data: textBody,
                Charset: 'UTF-8',
              },
            },
          },
        },
      }),
    );

    return NextResponse.json({ message: 'Submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send reckoning email', error);
    return NextResponse.json(
      { message: 'We could not send your details right now. Please try again.' },
      { status: 500 },
    );
  }
}
