//The entry screen to the quiz
//Will handle 'Click anywhere to start'


'use client'

type XIIntroProps = {
    onStart: () => void;
};

export default function XIIntro({ onStart }: XIIntroProps) {
  return (
    <div
      className="flex min-h-screen cursor-pointer items-center justify-center bg-[#111111] px-6 text-center text-white"
      onClick={onStart}
    >
      <div>
        <p className="text-2xl font-semibold md:text-4xl">
          This page has been archived.
        </p>

        <p className="mt-4 text-base text-white/80 md:text-lg">
          To access, please press anywhere on the screen and complete the
          security questions.
        </p>
      </div>
    </div>
  );
}