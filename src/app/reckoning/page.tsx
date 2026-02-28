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
    <form className="max-w-2xl min-w-md" onSubmit={handleSubmit}>
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

        <p className="text-xs text-red-700 italic">
          We will use your name and home address solely for the purpose of sending your Brightwell
          letter. Your postal details will not be added to any mailing list and will not be used
          again after your letter has been sent.
        </p>

        <p className="text-xs text-red-700 italic">
          Your email address will only be used to contact you about The Reckoning and, if you choose
          to opt in, to receive updates from Brightwell and Darkwell Academies. You can choose
          whether or not to join the Brightwell mailing list using the option below. You may
          unsubscribe from email updates at any time. We do not share your personal information with
          third parties.
        </p>

        {statusMessage ? (
          <div className="bg-opacity-75 px-8 py-4 text-center">
            <h1 className="title-font mb-3 text-xl font-medium text-red-900 sm:text-xl">
              {statusMessage}
            </h1>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-sm bg-red-800 px-4 py-4 text-base font-semibold tracking-wide text-white transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
            >
              {isSubmitting ? 'Sending...' : 'Sign Up'}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/raven.svg)] bg-size-[auto_700px] bg-bottom-left bg-no-repeat opacity-40 lg:bg-size-[auto_900px] 2xl:bg-size-[auto_1200px]"
      />
      <div className="flex min-h-screen items-center justify-end px-10">
        <TheForm />
      </div>
    </main>
  );
}
