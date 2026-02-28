'use client';

import { useState } from 'react';

type FormSubmitEvent = Parameters<NonNullable<React.ComponentProps<'form'>['onSubmit']>>[0];

const TheForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (event: FormSubmitEvent) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      address: String(formData.get('address') ?? '').trim(),
      consent: formData.get('consent') === 'on',
    };

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const response = await fetch('/api/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your request right now.');
      }

      setStatusType('success');
      setStatusMessage('Your details were sent successfully.');
      formElement.reset();
    } catch (error) {
      setStatusType('error');
      setStatusMessage(
        error instanceof Error ? error.message : 'Unable to submit your request right now.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-xl min-w-xs p-4" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="md:text-md mb-2 block text-sm text-red-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Lysandra Quill"
            autoComplete="name"
            required
            className="w-full rounded-sm border-2 border-red-500/80 px-2 py-2 text-base shadow-sm transition outline-none placeholder:text-sm placeholder:text-gray-500 placeholder:italic focus:border-zinc-700"
          />
        </div>

        <div>
          <label htmlFor="email" className="md:text-md mb-2 block text-sm text-red-600">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="lysandra.quill@brightwell.academy"
            autoComplete="email"
            required
            className="w-full rounded-sm border-2 border-red-500/80 px-2 py-2 text-base shadow-sm transition outline-none placeholder:text-sm placeholder:text-gray-500 placeholder:italic focus:border-zinc-700"
          />
        </div>

        <div>
          <label htmlFor="address" className="md:text-md mb-2 block text-sm text-red-600">
            Postal Address
          </label>
          <textarea
            id="address"
            name="address"
            rows={4}
            placeholder="Brightwell Academy"
            autoComplete="street-address"
            required
            className="w-full rounded-sm border-2 border-red-500/80 px-2 py-2 text-base shadow-sm transition outline-none placeholder:text-sm placeholder:text-gray-500 placeholder:italic focus:border-zinc-700"
          />
        </div>

        <label className="flex items-start justify-center gap-2 text-sm text-red-600">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border border-zinc-500 bg-white accent-red-700"
          />
          <span>I consent to receiving emails from Brightwell</span>
        </label>

        <p className="text-xs">
          We will use your name and home address solely for the purpose of sending your Brightwell
          letter. Your postal details will not be added to any mailing list and will not be used
          again after your letter has been sent.
        </p>

        <p className="text-xs">
          Your email address will only be used to contact you about The Reckoning and, if you choose
          to opt in, to receive updates from Brightwell and Darkwell Academies. You can choose
          whether or not to join the Brightwell mailing list using the option below. You may
          unsubscribe from email updates at any time. We do not share your personal information with
          third parties.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg border border-red-900 bg-red-800 px-4 py-3 text-base font-semibold tracking-wide text-red-50 transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Sign Up'}
        </button>

        {statusMessage ? (
          <p className={statusType === 'error' ? 'text-sm text-red-700' : 'text-sm text-green-700'}>
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/raven.svg)] bg-size-[auto_400px] bg-bottom-left bg-no-repeat opacity-40 md:bg-size-[auto_500px] lg:bg-size-[auto_700px]"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-end">
        <TheForm />
      </div>
    </main>
  );
}
