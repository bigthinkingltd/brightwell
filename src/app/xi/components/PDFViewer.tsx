//PDF rendering engine -- uses react-pdf
//Displays the actual document


export type AnswerOption = {
    id: string;
    text: string;   //answer shown to user
};

//Represents a question in the quiz
export type Question = {
    id: number;                 //Question number
    question: string;           //Question text
    options: AnswerOption[];    //Array of 4 possible answers 
    correctAnswerID: string;    //The correct option id
};