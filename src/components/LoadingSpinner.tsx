import React from 'react';

const LoadingSpinner: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background-dark">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
);

export default LoadingSpinner;
