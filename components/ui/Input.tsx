import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ className = '', error = false, ...props }) => {
  const baseStyles = 'block w-full rounded-md shadow-sm sm:text-sm bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-colors duration-200';
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500';

  return (
    <input
      className={`${baseStyles} ${error ? errorStyles : ''} ${className}`}
      {...props}
    />
  );
};

export default Input;
