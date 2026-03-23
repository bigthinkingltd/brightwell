//This is for the content of the quiz. 
//It holds the question text + 4 possible answers for each question

import { Question } from './types';

export const questions: Question[] = [
    {
        id: 1,
        question: "What is the name of Arlo's Grandfather?",
        options: [
            { id: 'a', text: 'Halric' },
            { id: 'b', text: 'Thalen' },
            { id: 'c', text: 'Ren' },
            { id: 'd', text: 'Atticus' },
        ],
        correctAnswerId: 'd',
    },

        {
        id: 2,
        question: 'What colour smoke accompanies a Portal?',
        options: [
            { id: 'a', text: 'Purple' },
            { id: 'b', text: 'Green' },
            { id: 'c', text: 'Blue' },
            { id: 'd', text: 'Red' },
        ],
        correctAnswerId: 'a',
    },

        {
        id: 3,
        question: 'In which House does Kit Featheringale belong?',
        options: [
            { id: 'a', text: 'Wonder' },
            { id: 'b', text: 'Watch' },
            { id: 'c', text: 'Wisdom' },
            { id: 'd', text: 'Wild' },
        ],
        correctAnswerId: 'b',
    },

];