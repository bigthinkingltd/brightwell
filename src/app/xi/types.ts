//Structure of the data - what a question and answer looks like. 


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

//Represents the different screens in the XI flow
export type ScreenState = 
    | 'intro'
    |'question'
    |'granted'
    |'denied';


//Represents PDF document in the archive
export type PdfDocument = {
    id: string;
    title: string;
    fileUrl: string; 
};