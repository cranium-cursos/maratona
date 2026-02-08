import React from 'react';
import { QuizQuestion } from '../../types';

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
}

const optionLabels = ['A', 'B', 'C', 'D'];

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <fieldset>
      <legend className="text-lg font-bold text-slate-900 dark:text-white mb-6">
        {question.question}
      </legend>
      <div className="space-y-3" role="radiogroup" aria-label={question.question}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={`${optionLabels[index]}: ${option}`}
              onClick={() => onSelect(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isSelected
                  ? 'border-primary bg-primary/10 dark:bg-primary/20'
                  : 'border-slate-200 dark:border-slate-600 hover:border-primary/50 bg-white dark:bg-slate-800'
              }`}
            >
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  isSelected
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {optionLabels[index]}
              </span>
              <span className="text-slate-700 dark:text-slate-200 pt-1">
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
};

export default QuestionCard;
