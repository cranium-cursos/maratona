import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
        {title}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
