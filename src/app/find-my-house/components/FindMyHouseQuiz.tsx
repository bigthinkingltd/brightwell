'use client'

import { useMemo, useState } from "react";
import QuizQuestionCard from "./QuizQuestionCard";
import QuizResults from "./QuizResults";
import { questions } from "./quizData";
import { houseResults } from "./houseResults";
import { AnswerOption } from "./quizTypes";


/*Stores the users answers
Key= question ID
value = selected answer, or null if not answered */
export default function FindMyHousequiz() {
    const [answers, setAnswers] = useState<Record<number, AnswerOption | null>>({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
    });

    /*tracks whether user has submitted the quiz, if true it shows results, if not it shows the questions */
    const [showResult, setShowResult] = useState(false);

    /* Checks if all questiosn have been answered, used to prevent submission before completion */
    const allQuestionsAnswered = useMemo (() => {
        return questions.every((q) => answers [q.id] !== null);
    }, [answers]);

    /*updates selected answer for a specific question */
    const handleSelectAnswer = (
        questionId: number,
        answer: AnswerOption
    ) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
    };


    /*Counts how many times A/B/C/D have been selected, then determines which letter has the highest count */
    const calculateResult = (): AnswerOption => {
        const counts: Record<AnswerOption, number> = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
        };

        //Counts the answers
        Object.values(answers).forEach((answer) => {
            if (answer) {
                counts[answer]++;
            }
        });

        //determine the hgihest count
        let winner: AnswerOption = 'A';
        let highest = counts.A;


        (['B','C','D'] as AnswerOption[]).forEach((letter) => {
            if (counts[letter] > highest) {
                highest = counts[letter];
                winner = letter;
            }
        });

        return winner;
    };



    /*handles the quiz submission*/
    const handleSubmit = () => {
        if (!allQuestionsAnswered) {
        alert('Please answer all questions before submitting.');
        return;
        }

        setShowResult(true);
    };

    /*Resets the quiz back to initial state*/
    const handleReset = () => {
        setAnswers({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        });
        setShowResult(false);
    };

    const winningLetter = showResult ? calculateResult() : null;
    const winningHouse = winningLetter
        ? houseResults[winningLetter]
        : null;

    return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        {!showResult && (
          <>
            {/*The title, NOT shown on results page because it looks ass if it is */}
            <h1 className="mb-4 text-4xl font-bold">
              In which Brightwell House do you belong?
            </h1>

            <p className="mb-10 text-lg">
              Answer all 7 questions to discover where you belong.
            </p>
          </>
        )}

        {/*If result not shown, show questions*/}
        {!showResult && (
          <>
            <div className="space-y-8">
              {questions.map((question) => (
                <QuizQuestionCard
                  key={question.id}
                  question={question}
                  selectedAnswer={answers[question.id]}
                  onSelectAnswer={(answer) =>
                    handleSelectAnswer(question.id, answer)
                  }
                />
              ))}
            </div>

            {/*Submit and reset buttons*/}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={handleSubmit}
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold transition hover:bg-white/20"
              >
                See The Result
              </button>

              <button
                onClick={handleReset}
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Reset Quiz
              </button>
            </div>
          </>
        )}

        {/*If result shown, show result*/}
        {showResult && winningHouse && (
          <QuizResults result={winningHouse} />
        )}
      </div>
    </main>
);
}