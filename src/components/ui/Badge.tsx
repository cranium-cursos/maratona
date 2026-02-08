import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-bold tracking-widest uppercase border ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
