export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <div className="flex basis-1/2 items-center justify-center bg-white p-20 md:p-10">
        <img src="/raven.svg" alt="The Raven" />
      </div>
      <div className="flex basis-1/2 items-center justify-center p-10">
        <form className="flex-1">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-serif text-lg tracking-wide text-red-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-lg border border-zinc-600/90 bg-black/20 px-4 py-3 text-base text-zinc-100 transition outline-none placeholder:text-zinc-400 focus:border-zinc-300"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block font-serif text-lg tracking-wide text-red-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={4}
                autoComplete="street-address"
                className="w-full rounded-lg border border-zinc-600/90 bg-black/20 px-4 py-3 text-base text-zinc-100 transition outline-none placeholder:text-zinc-400 focus:border-zinc-300"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-zinc-300">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border border-zinc-500 bg-black/20 accent-red-700"
              />
              <span>I consent to my address being stored for the purpose of a mailing list</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg border border-red-900 bg-red-800 px-4 py-3 text-base font-semibold tracking-wide text-red-50 transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
