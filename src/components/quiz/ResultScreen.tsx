import React from 'react';
import { QuizResult } from '../../types';
import Button from '../ui/Button';
import { Trophy, RotateCcw, Award } from 'lucide-react';

interface ResultScreenProps {
  result: QuizResult;
  onRetry: () => void;
  onGenerateCertificate: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  onRetry,
  onGenerateCertificate,
}) => {
  const { passed } = result;

  return (
    <div className="text-center">
      <div
        className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
          passed
            ? 'bg-green-100 dark:bg-green-900/30'
            : 'bg-red-100 dark:bg-red-900/30'
        }`}
      >
        {passed ? (
          <Trophy className="w-10 h-10 text-green-600 dark:text-green-400" />
        ) : (
          <RotateCcw className="w-10 h-10 text-red-500 dark:text-red-400" />
        )}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        {passed ? 'Parabéns! Você foi aprovado!' : 'Você não atingiu o mínimo de 4 palavras chaves'}
      </h2>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
        {passed
          ? 'Você pode gerar seu certificado de participação!'
          : 'Seu certificado não será emitido.'}
      </p>

      {passed ? (
        <Button
          onClick={onGenerateCertificate}
          size="lg"
          icon={<Award className="w-5 h-5" />}
        >
          Gerar Certificado
        </Button>
      ) : (
        <Button
          onClick={onRetry}
          size="lg"
          variant="secondary"
          icon={<RotateCcw className="w-5 h-5" />}
        >
          Tentar Novamente
        </Button>
      )}
    </div>
  );
};

export default ResultScreen;
