//The page which will display if the user has failed
//Will handle redirect to start of the quiz

'use client';

type XIAccessDeniedProps= {
    onRestart: () => void;
};

export default function XIAccessDenied({ onRestart }: XIAccessDeniedProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-center text-white">
            <div>
                <h1 className="text-3xl font-semibold md:text-5xl">
                    Access denied.
                </h1>

                <p className="mt-4 text-white/80">
                    One or more answers were incorrect. Please try again.
                </p>

                <button
                type="button"
                onClick={onRestart}
                className="mt-8 rounded border border-white px-6 py-3 transition hover:bg-white hover:text-black"
                >
                    Return to start
                </button>
            </div>
        </div>
    );
}