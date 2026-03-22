//Quiz screen
//Displays question + 4 answers
//Will handle selecting an answer and the next/submit button


'use client';

import { Question } from '../types';

type XIQuestionCardProps = {
    question: Question;
    currentQuestionIndex: number;
    totalQuestions: number;
    selectedAnswer: string; 
    onSelectAnswer: (answerId: string) => void;
    onNext: () => void;
    onSubmit: () => void;
};

export default function XIQuestionCard({
    question,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    onNext,
    onSubmit,
}: XIQuestionCardProps) {
    const isLastQuestion = currentQuestionIndex === totalQuestions -1;

    return (
    <div className="flex min-h-screen items-center justify-center bg-[#111111] px-6 py-12 text-white">
      <div className="w-full max-w-2xl">
        
        {/* progress */}
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/60">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>

        {/* question */}
        <h1 className="mb-8 text-2xl font-semibold md:text-4xl">
          {question.question}
        </h1>

        {/* answers */}
        <div className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectAnswer(option.id)}
              className={`w-full rounded border px-4 py-4 text-left transition ${
                selectedAnswer === option.id
                  ? 'border-white bg-white text-black'
                  : 'border-white/30 bg-transparent text-white hover:border-white'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* next/submit */}
        <div className="mt-8">
          {!isLastQuestion ? (
            <button
              type="button"
              onClick={onNext}
              disabled={!selectedAnswer}
              className="rounded border border-white px-6 py-3 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!selectedAnswer}
              className="rounded border border-white px-6 py-3 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}