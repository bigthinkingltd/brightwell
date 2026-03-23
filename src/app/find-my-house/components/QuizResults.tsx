import { HouseResult } from './quizTypes';

type QuizResultProps = {
    result: HouseResult;
};

export default function QuizResults({ result }: QuizResultProps) {
    return (
        <div className="">
            <p className="">
                Your House
            </p>


            <h2 className="">{result.houseName}</h2>

            <p className="">"{result.motto}"</p>

            <p className="">{result.description}</p>
        </div>
    );
}