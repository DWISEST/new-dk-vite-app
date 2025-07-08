import React from 'react';

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m15 18-6-6 6-6"/>
    </svg>
);

interface BackButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, className = '', children = 'Back' }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors group ${className}`}
      aria-label="Go back to previous page"
    >
      <ChevronLeftIcon className="h-5 w-5 mr-1 transition-transform duration-200 group-hover:-translate-x-1" />
      {children}
    </button>
  );
};

export default BackButton;