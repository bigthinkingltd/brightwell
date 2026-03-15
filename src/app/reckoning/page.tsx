'use client';

import Link from 'next/link';
import { useState } from 'react';

type FormSubmitEvent = Parameters<NonNullable<React.ComponentProps<'form'>['onSubmit']>>[0];

const TheForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormSubmitEvent) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      address: String(formData.get('address') ?? '').trim(),
      consent: formData.get('consent') === 'on',
      age_permission: formData.get('age_permission') === 'on',
    };

    setIsSubmitting(true);
    setStatusMessage(null);

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

      setStatusMessage('Thank you for signing up!');
      formElement.reset();

      setTimeout(() => {
      setStatusMessage(null);
      }, 3000); 

    } catch (error) {
      console.error(error);
      setStatusMessage('Oops something went wrong!');

      setTimeout(() => { 
      setStatusMessage(null);    
      }, 3000);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-2xl" onSubmit={handleSubmit}>
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
            maxLength={100}
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
            maxLength={250}
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
            maxLength={500}
            className="w-full rounded-sm border-2 border-red-500/80 px-2 py-2 text-base shadow-sm transition outline-none placeholder:text-sm placeholder:text-gray-500 placeholder:italic focus:border-zinc-700"
          />
        </div>

        <label className="flex items-start justify-center gap-2 text-sm text-red-600">
          <input
            id="age_permission"
            name="age_permission"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 rounded border border-zinc-500 bg-white accent-red-700"
          />
          <span>I am over 18 OR I have permission from an adult to give my address</span>
        </label>




        <label className="flex items-start justify-center gap-2 text-sm text-red-600">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border border-zinc-500 bg-white accent-red-700"
          />
          <span>I consent to receiving emails from Brightwell</span>
        </label>

        <p className="text-xs text-black/90 italic">
          We will use your name and home address solely for the purpose of sending your Brightwell
          letter. Your postal details will not be added to any mailing list and will not be used
          again after your letter has been sent.
        </p>

        <p className="text-xs text-black/90 italic">
          Your email address will only be used to contact you about The Reckoning and, if you choose
          to opt in, to receive updates from Brightwell and Darkwell Academies. You can choose
          whether or not to join the Brightwell mailing list using the option below. You may
          unsubscribe from email updates at any time. We do not share your personal information with
          third parties.
        </p>

        <div className="flex items-start justify-between gap-x-10 overflow-hidden">
          <div className="flex-1">
            {statusMessage ? (
              <p className="text-md my-3 block text-center font-[cursive] font-medium text-red-700">
                {statusMessage}
              </p>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-sm bg-red-800 px-4 py-4 font-[cursive] text-base font-semibold tracking-wide text-white transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
              >
                {isSubmitting ? 'Sending...' : 'Sign Up'}
              </button>
            )}
          </div>
          <div className="flex-1">
            <Link
              href="/"
              className="block w-full rounded-sm bg-black/80 px-4 py-4 text-center font-[cursive] text-base font-semibold tracking-wide text-white"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-end overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/raven.svg)] bg-size-[auto_700px] bg-bottom-left bg-no-repeat opacity-40 lg:bg-size-[auto_900px] 2xl:bg-size-[auto_1200px]"
      />
      <div className="flex flex-col gap-y-2 px-2 sm:px-8">
        <h3 className="font-[cursive] text-2xl leading-12 font-bold text-red-600">
          You found the Raven!
        </h3>
        <p className="text-start text-xs text-black/90">Not everyone does.</p>
        <p className="tracking-light text-xs text-black/90">
          Those who notice will not be overlooked.
        </p>
        <p className="tracking-light mb-6 text-xs text-black/90">
          If you wish to receive official correspondence from Darkwell Academy, leave your details
          below. A sealed letter will be sent to you.
        </p>
        <TheForm />
      </div>
    </main>
  );
}
