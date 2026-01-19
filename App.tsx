import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import NextSteps from './NextSteps';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/proximos-passos" element={<NextSteps />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
