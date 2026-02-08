import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import QuestionCard from './QuestionCard';
import Button from '../ui/Button';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface QuizFormProps {
  questions: QuizQuestion[];
  onSubmit: (answers: number[]) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ questions, onSubmit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null),
  );

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const canGoNext = answers[currentIndex] !== null;
  const isLast = currentIndex === questions.length - 1;
  const allAnswered = answers.every((a) => a !== null);

  const handleNext = () => {
    if (isLast && allAnswered) {
      onSubmit(answers as number[]);
    } else if (canGoNext && !isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Pergunta {currentIndex + 1} de {questions.length}
        </span>
        <div className="flex gap-1.5" role="progressbar" aria-label={`Progresso do quiz: ${answers.filter(a => a !== null).length} de ${questions.length} perguntas respondidas`} aria-valuenow={answers.filter(a => a !== null).length} aria-valuemin={0} aria-valuemax={questions.length}>
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-colors ${
                answers[i] !== null
                  ? 'bg-primary'
                  : i === currentIndex
                    ? 'bg-primary/40'
                    : 'bg-slate-200 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      <QuestionCard
        question={questions[currentIndex]}
        selectedAnswer={answers[currentIndex]}
        onSelect={handleSelect}
      />

      <div className="flex justify-between mt-8">
        <Button
          variant="secondary"
          size="sm"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          icon={<ChevronLeft className="w-4 h-4" />}
          className={currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''}
        >
          Anterior
        </Button>

        {isLast ? (
          <Button
            onClick={handleNext}
            disabled={!allAnswered}
            icon={<Send className="w-4 h-4" />}
          >
            Finalizar
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!canGoNext}
            icon={<ChevronRight className="w-4 h-4" />}
          >
            Próxima
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizForm;
