import { AnswerOption, Question } from './quizTypes';

type QuizQuestionCardProps = {
  question: Question;
  selectedAnswer: AnswerOption | null;
  onSelectAnswer: (answer: AnswerOption) => void;
};

export default function QuizQuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
}: QuizQuestionCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      {/* Displays the question number and question text */}
      <h2 className="mb-4 text-xl font-semibold">
        {question.id}. {question.question}
      </h2>

      {/* Loops through the 4 possible answers for this question */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option.label}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/10"
          >
            {/* Radio input allows only one answer to be selected per question */}
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.label}
              checked={selectedAnswer === option.label}
              onChange={() => onSelectAnswer(option.label)}
              className="h-4 w-4"
            />

            {/* Displays the answer label and answer text */}
            <span>
              <span className="font-semibold">{option.label}.</span>{' '}
              {option.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}