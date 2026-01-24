import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load components
const LandingPage = React.lazy(() => import('./LandingPage'));
const NextSteps = React.lazy(() => import('./NextSteps'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background-dark">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/proximos-passos" element={<NextSteps />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
