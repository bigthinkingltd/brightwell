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
    motto: 'ENTER HERE', //The motto for the house
    description: 'ENTER HERE', //The longer explanation of the house... as i type thi its pointless having a motto AND description
    },

    B: {
        houseName: 'ENTER HERE',
        motto: 'ENTER HERE',
        description: 'ENTER HERE',
    },

    C: {
        houseName: 'ENTER HERE', 
        motto: 'ENTER HERE', 
        description: 'ENTER HERE', 
    },

    D: {
        houseName: 'ENTER HERE', 
        motto: 'ENTER HERE',
        description: 'ENTER HERE', 
    },
};