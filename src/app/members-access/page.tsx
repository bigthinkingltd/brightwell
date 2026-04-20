//Will be the entry point for the members area
//Users will come to this page and enterr a universal access code (Sent via post or email)

'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

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

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        {/*page heading */}
        <h1 className="text-3xl font-semibold">Members Area</h1>

        {/*instructions for useer*/}
        <p className="mt-4 text-base leading-7">
          Enter the access code from your posted letter to continue to the
          members area.
        </p>

        {/*code form*/}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full flex-col gap-4"
        >
          {/*input label*/}
          <label htmlFor="members-code" className="text-left text-sm">
            Access code
          </label>

          {/*code input field*/}
          <input
            id="members-code"
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter your code"
            className="w-full rounded-md border px-4 py-3 outline-none"
          />

          {/*Submit button*/}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md border px-4 py-3 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Checking...' : 'Enter members area'}
          </button>
        </form>

        {/*feedback message*/}
        <div className="mt-6 min-h-[24px] text-sm">
          {message && <p>{message}</p>}
        </div>
      </div>
    </main>
  );
}