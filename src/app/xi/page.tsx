//going to be used to control the entire flow of the quiz.
//Decides what screen is shown -  intro, questions, denied, granted
//Tracks current questions and answers
//Handles the validation for pass/fail


'use client';

import { useState } from 'react';
import { questions } from './questions';
import { ScreenState } from './types';

export default function XIPage() {
    //Tracks which screen user is currently on
    const [screen, setScreen] = useState<ScreenState>('intro');

    //tracks which question the user is currenlty answering 
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    //stores users selected abswers in order
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    //Stores currently selected answers in order for the question being shown
    const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState<string>('');

    //The question that is currently being displayed
    const currentQuestion = questions[currentQuestionIndex];


    //Function to start the quiz from the intro screen
    function startQuiz() {
        setScreen('question');
        setCurrentQuestionIndex(0);
        setSelectedAnswers([]);
        setCurrentSelectedAnswer('');
    }

    //Resets flow back to the intro screen
    function resetQuiz() {
        setScreen('intro');
        setCurrentQuestionIndex(0);
        setSelectedAnswers([]);
        setCurrentSelectedAnswer('');
    }


    //Stores answer user clicks for the current question
    function handleAnswerSelect(answerId: string) {
        setCurrentSelectedAnswer(answerId);
    }

    //Moves to the next question
    function handleNextQuestion() {
        if (!currentSelectedAnswer) return;

        const updatedAnswers = [...selectedAnswers, currentSelectedAnswer];
        setSelectedAnswers(updatedAnswers);
        setCurrentSelectedAnswer('');

        setCurrentQuestionIndex((prev) => prev +1);
    }

    //Final submission after last question
    function handleSubmit() {
        if (!currentSelectedAnswer) return;

        const updatedAnswers = [...selectedAnswers, currentSelectedAnswer];

        const allCorrect = updatedAnswers.every((answer, index) => {
            return answer === questions[index].correctAnswerID;
        });

        if (allCorrect) {
            setSelectedAnswers(updatedAnswers);
            setScreen('granted');
        } else {
            setSelectedAnswers(updatedAnswers);
            setScreen('denied');
        }

        setCurrentSelectedAnswer('');
    }

    //Intro screen
    if (screen === 'intro') {
        return (
            <div className="">
                <div>
                    <p className="">
                        This page has been archived
                    </p>
                    <p className="">
                        To access, please press anywhere on the screen and complete the security questions.
                    </p>
                </div>
            </div>
        );
    }


      //Question Screen
    if (screen === 'question') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#111111] px-6 py-12 text-white">
        <div className="w-full max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/60">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>

          <h1 className="mb-8 text-2xl font-semibold md:text-4xl">
            {currentQuestion.question}
          </h1>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleAnswerSelect(option.id)}
                className={`w-full rounded border px-4 py-4 text-left transition ${
                  currentSelectedAnswer === option.id
                    ? 'border-white bg-white text-black'
                    : 'border-white/30 bg-transparent text-white hover:border-white'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={!currentSelectedAnswer}
                className="rounded border border-white px-6 py-3 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!currentSelectedAnswer}
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










}