//This is for the content of the quiz. 
//It holds the question text + 4 possible answers for each question

import { Question } from './types';

export const questions: Question[] = [
    {
        id: 1,
        question: 'The question goes here dec',
        options: [
            { id: 'a', text: 'Option for answer' },
            { id: 'b', text: 'Option for answer' },
            { id: 'c', text: 'Option for answer' },
            { id: 'd', text: 'Option for answer' },
        ],
        correctAnswerId: 'd',
    },

];