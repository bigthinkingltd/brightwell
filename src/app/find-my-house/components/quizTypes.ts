
//defines valid answer options + ensures users can only select A, B, C, D
export type AnswerOptions = 'A' | 'B' | 'C' | 'D';

//represents the answer choice
export type QuestionOption = {
    label: AnswerOption;
    test: string;
};


//each question has an ID, a question string and 4 possible answers
export type Question = {
    id: number;
    question: string;
    options: QuestionOption[];
};


//represents the results tied to each answer letter, essentially what will be shown at the end of the quiz
export type HouseResult = {
    houseName: string;
    motto: string;
    description: string;
};