import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const NextSteps = React.lazy(() => import('./pages/NextSteps'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        <div className="min-h-screen bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/proximos-passos" element={<NextSteps />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
