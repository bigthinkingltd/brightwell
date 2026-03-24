import { AnswerOption, HouseResult } from './quizTypes';

/* 
Object maps each possible quiz outcome to a specific house result

After the quiz is complete:
- The app determines which letter the user selected the most
- That letter is used to look up the corresponding house HERE
*/

export const houseResults: Record<AnswerOption, HouseResults> = {
    A: {
    houseName: 'House of Wisdom', //house name
    motto: '', //The motto for the house
    description: 'You’re thoughtful, curious, and always searching for truth. You carry the Staff of Further Enquiry and never stop asking why.', //The longer explanation of the house... as i type thi its pointless having a motto AND description
    },

    B: {
        houseName: 'House of Watch',
        motto: '',
        description: 'You’re brave, loyal, and full of conviction. You protect others and stand tall when things get tough — your heart burns bright as the Ember.',
    },

    C: {
        houseName: 'House of Wild', 
        motto: '', 
        description: 'You’re kind, instinctive, and deeply connected to the world around you. You understand that magic is everywhere, especially in nature’s quiet places.', 
    },

    D: {
        houseName: 'House of Wonder', 
        motto: '',
        description: 'You’re imaginative, daring, and delightfully unpredictable. You see possibility in everything — and everything in possibility.', 
    },
};