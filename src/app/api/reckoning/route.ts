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

const getAmplifySecrets = () => {
  const rawSecrets = process.env.secrets ?? process.env.SECRETS;
  if (!rawSecrets) return {} as Record<string, string>;

  try {
    const parsed = JSON.parse(rawSecrets) as Record<string, unknown>;
    const normalizedEntries = Object.entries(parsed)
      .map(([key, value]) => [key, normalizeEnvValue(String(value ?? ''))] as const)
      .filter(([, value]) => Boolean(value)) as Array<[string, string]>;

    return Object.fromEntries(normalizedEntries);
  } catch {
    return {} as Record<string, string>;
  }
};

const getConfigValue = (secrets: Record<string, string>, ...keys: string[]) => {
  const directEnv = getFirstEnv(...keys);
  if (directEnv) return directEnv;

  for (const key of keys) {
    const secretValue = normalizeEnvValue(secrets[key]);
    if (secretValue) return secretValue;
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

    const amplifySecrets = getAmplifySecrets();

    const toAddress = getConfigValue(
      amplifySecrets,
      'RECKONING_TO_EMAIL',
      'NEXT_PUBLIC_RECKONING_TO_EMAIL',
      'AMPLIFY_RECKONING_TO_EMAIL',
    );
    const fromAddress = getConfigValue(
      amplifySecrets,
      'RECKONING_FROM_EMAIL',
      'NEXT_PUBLIC_RECKONING_FROM_EMAIL',
      'AMPLIFY_RECKONING_FROM_EMAIL',
    );

    if (!toAddress || !fromAddress) {
      const envPresence = {
        RECKONING_TO_EMAIL: Boolean(process.env.RECKONING_TO_EMAIL),
        RECKONING_FROM_EMAIL: Boolean(process.env.RECKONING_FROM_EMAIL),
        NEXT_PUBLIC_RECKONING_TO_EMAIL: Boolean(process.env.NEXT_PUBLIC_RECKONING_TO_EMAIL),
        NEXT_PUBLIC_RECKONING_FROM_EMAIL: Boolean(process.env.NEXT_PUBLIC_RECKONING_FROM_EMAIL),
        AMPLIFY_RECKONING_TO_EMAIL: Boolean(process.env.AMPLIFY_RECKONING_TO_EMAIL),
        AMPLIFY_RECKONING_FROM_EMAIL: Boolean(process.env.AMPLIFY_RECKONING_FROM_EMAIL),
        secretsPayload: Boolean(process.env.secrets ?? process.env.SECRETS),
        secretsReckoningTo: Boolean(amplifySecrets.RECKONING_TO_EMAIL),
        secretsReckoningFrom: Boolean(amplifySecrets.RECKONING_FROM_EMAIL),
      };

      console.error('Missing SES config env vars', envPresence);

      return NextResponse.json(
        {
          message:
            'Email service is not configured. Check RECKONING_TO_EMAIL and RECKONING_FROM_EMAIL in server environment.',
          envPresence,
        },
        { status: 500 },
      );
    }

    const region =
      getConfigValue(amplifySecrets, 'AWS_REGION', 'AWS_DEFAULT_REGION', 'AMPLIFY_AWS_REGION') ??
      'us-east-1';

    const accessKeyId = getConfigValue(amplifySecrets, 'SES_ACCESS_KEY_ID', 'AWS_ACCESS_KEY_ID');
    const secretAccessKey = getConfigValue(
      amplifySecrets,
      'SES_SECRET_ACCESS_KEY',
      'AWS_SECRET_ACCESS_KEY',
    );
    const sessionToken = getConfigValue(amplifySecrets, 'SES_SESSION_TOKEN', 'AWS_SESSION_TOKEN');

    const sesClient = new SESv2Client({
      region,
      ...(accessKeyId && secretAccessKey
        ? {
            credentials: {
              accessKeyId,
              secretAccessKey,
              ...(sessionToken ? { sessionToken } : {}),
            },
          }
        : {}),
    });

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

    if (error instanceof Error && error.name === 'CredentialsProviderError') {
      return NextResponse.json(
        {
          message:
            'AWS credentials are missing for SES. Configure Amplify compute IAM role for SES or set SES_ACCESS_KEY_ID and SES_SECRET_ACCESS_KEY.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'We could not send your details right now. Please try again.' },
      { status: 500 },
    );
  }
}
