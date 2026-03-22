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
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

    //stores users selected abswers in order
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    //Stores currently selected answers in order for the question being shown
    const [currentSelectedAnswer, setcurrentSelectedAnswer] = useState<string>('');

    //The question that is currently being displayed
    const currentQuestion = questions[currentQuestionIndex];







}