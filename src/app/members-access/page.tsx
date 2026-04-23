//Will be the entry point for the members area
//Users will come to this page and enterr a universal access code (Sent via post or email)

'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cinzel } from '../fonts';

export default function MembersAccessPage() {
  //state to store the user entered code
  const [code, setCode] = useState('');

  //state to display feedback messages
  const [message, setMessage] = useState('');

  //state to track if the form is currently submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  //router used for redirecting after successful access
  const router = useRouter();

  //form submission handler
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); //prevents the default form reload

    //validation - ensures form box isnt empty
    if (!code.trim()) {
      setMessage('Please enter the access code.');
      return;
    }

    //set loading state + provide immediate user feedback
    setIsSubmitting(true);
    setMessage('Checking code...');

    try {
      //sends POST request to API route for validation
      const response = await fetch('/api/members-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      //defines expected response structure
      let data: { success?: boolean; message?: string } = {};

      //attempts to parse JSON response
      try {
        data = await response.json();
      } catch {
        //handles when response is not valid JSON
        setMessage(`Request failed with status ${response.status}.`);
        return;
      }

      //handles non 200 responses
      if (!response.ok) {
        setMessage(
          data.message || `Request failed with status ${response.status}.`
        );
        return;
      }

      //successfull valudation redirects user to memebers-area
      if (data.success) {
        setMessage('Code accepted. Redirecting...');
        router.push('/members-area');
        return;
      }

      //if valudation fails, show error message
      setMessage(data.message || 'Invalid access code.');
    } catch (error) {
      //to catch network or unexpected errors
      console.error('Members access form error:', error);
      setMessage('Unable to reach the members access route.');
    } finally {
      //reset loading state regardless of outcome
      setIsSubmitting(false);
    }
  }

    //Used ChatGPT to style the members area login screen.
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[url('/bg-front.png')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black via-black/95 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,180,91,0.12),transparent_30%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl">
          <div className="border border-white/10 bg-black/35 px-8 py-12 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm md:px-14 md:py-16">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-[10px] uppercase tracking-[0.42em] text-white/45 md:text-xs">
                Private Access
              </p>

              {/*page heading */}
              <h1 className={`mt-5 text-3xl font-semibold tracking-[0.18em] text-white md:text-5xl ${cinzel.className}`}>
                Members Area
              </h1>

              <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              {/*instructions for useer*/}
              <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-white/68">
                Enter the access code from your posted letter to continue to the
                members area.
              </p>

              {/*code form*/}
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-12 flex w-full max-w-md flex-col gap-5"
              >
                {/*input label*/}
                <label
                  htmlFor="members-code"
                  className="text-left text-[11px] uppercase tracking-[0.3em] text-white/55"
                >
                  Access code
                </label>

                {/*code input field*/}
                <input
                  id="members-code"
                  type="text"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="Enter your code"
                  className="w-full border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/25 outline-none transition duration-300 focus:border-[#e0b45b]/60 focus:bg-black/50 focus:shadow-[0_0_0_1px_rgba(224,180,91,0.14)]"
                />

                {/*Submit button*/}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`border border-white/40 bg-transparent px-4 py-3 text-sm uppercase tracking-[0.24em] text-white transition duration-300 hover:border-white/80 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60 ${cinzel.className}`}
                >
                  {isSubmitting ? 'Checking...' : 'Enter members area'}
                </button>
              </form>

              {/*feedback message*/}
              <div className="mt-6 min-h-[24px] text-center text-sm">
                {message && <p className="text-white/68">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}