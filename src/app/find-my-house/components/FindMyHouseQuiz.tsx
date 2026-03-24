'use client'

import { useMemo, useState } from "react";
import QuizQuestionCard from "./QuizQuestionCard";
import QuizResults from "./QuizResults";
import { questions } from "./quizData";
import { houseResults } from "./houseResults";
import { AnswerOptions } from "./quizTypes";


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


    /*qwerty */
    





}