import React, { useState, useCallback, useEffect } from 'react';
import { QuizStep, QuizResult } from '../types';
import { quizQuestions, PASSING_SCORE } from '../data/quizQuestions';
import { trackEvent } from '../utils/analytics';
import { generateCertificate } from '../utils/generateCertificate';
import QuizForm from '../components/quiz/QuizForm';
import ResultScreen from '../components/quiz/ResultScreen';
import NameForm from '../components/quiz/NameForm';
import DownloadSection from '../components/quiz/DownloadSection';
import { BookOpen } from 'lucide-react';

const QuizPage: React.FC = () => {
  const [step, setStep] = useState<QuizStep>('quiz');
  const [result, setResult] = useState<QuizResult | null>(null);
  const [userName, setUserName] = useState('');
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    trackEvent('quiz_start');
  }, []);

  const handleQuizSubmit = useCallback((answers: number[]) => {
    const score = quizQuestions.filter(
      (q, i) => q.correctAnswer === answers[i],
    ).length;
    const quizResult: QuizResult = {
      score,
      total: quizQuestions.length,
      passed: score >= PASSING_SCORE,
      answers,
    };
    setResult(quizResult);
    trackEvent('quiz_complete', { score, passed: quizResult.passed });
    setStep('result');
  }, []);

  const handleRetry = useCallback(() => {
    trackEvent('quiz_retry');
    setResult(null);
    setStep('quiz');
  }, []);

  const handleGenerateCertificate = useCallback(() => {
    setStep('name_input');
  }, []);

  const handleNameSubmit = useCallback(async (name: string) => {
    setUserName(name);
    setStep('generating');
    setError(null);
    try {
      const bytes = await generateCertificate(name);
      setPdfBytes(bytes);
      setStep('download');
    } catch (err) {
      console.error('Erro ao gerar certificado:', err);
      setError('Erro ao gerar o certificado. Tente novamente.');
      setStep('name_input');
    }
  }, []);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-background-dark dark:to-slate-900 flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-2xl">
        {step === 'quiz' && (
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Quiz da Maratona
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Responda as 7 perguntas e conquiste seu certificado!
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <QuizForm
                questions={quizQuestions}
                onSubmit={handleQuizSubmit}
              />
            </div>
          </div>
        )}

        {step === 'result' && result && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <ResultScreen
              result={result}
              onRetry={handleRetry}
              onGenerateCertificate={handleGenerateCertificate}
            />
          </div>
        )}

        {step === 'name_input' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm text-center">
                {error}
              </div>
            )}
            <NameForm onSubmit={handleNameSubmit} />
          </div>
        )}

        {step === 'generating' && (
          <div className="text-center py-12" role="status" aria-live="polite">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" aria-hidden="true" />
            <p className="text-slate-600 dark:text-slate-300">
              Gerando seu certificado...
            </p>
          </div>
        )}

        {step === 'download' && pdfBytes && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <DownloadSection pdfBytes={pdfBytes} userName={userName} />
          </div>
        )}
      </div>
    </main>
  );
};

export default QuizPage;
