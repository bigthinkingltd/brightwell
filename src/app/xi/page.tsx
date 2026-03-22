//going to be used to control the entire flow of the quiz.
//Decides what screen is shown -  intro, questions, denied, granted
//Tracks current questions and answers
//Handles the validation for pass/fail


'use client';

import { useState } from 'react';
import { questions } from './questions';
import { ScreenState } from './types';

import XIIntro from './components/XIIntro';
import XIQuestionCard from './components/XIQuestionCard';

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
      return <XIIntro onStart={startQuiz} />;
    }


    //Question Screen
    if (screen === 'question') {
      return (
        <XIQuestionCard
          question={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedAnswer={currentSelectedAnswer}
          onSelectAnswer={handleAnswerSelect}
          onNext={handleNextQuestion}
          onSubmit={handleSubmit}
        />
      );
    }


    //Access Denied screen
    return (
    <div className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-center text-white">
      <div>
        <h1 className="text-3xl font-semibold md:text-5xl">Access denied</h1>
        <p className="mt-4 text-white/80">
          One or more answers were incorrect. Please try again.
        </p>

        <button
          type="button"
          onClick={resetQuiz}
          className="mt-8 rounded border border-white px-6 py-3"
        >
          Return to start
        </button>
      </div>
    </div>
  );
}
