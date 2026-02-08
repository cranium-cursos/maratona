import React from 'react';

type CardVariant = 'default' | 'exclusive' | 'feature';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/30',
  exclusive: 'bg-slate-900 border-slate-700 shadow-2xl',
  feature: 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl',
};

const Card: React.FC<CardProps> = ({ variant = 'default', children, className = '' }) => {
  return (
    <div className={`group rounded-2xl border transition-all duration-300 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
