
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-orange-600 focus:ring-secondary',
    outline: 'border border-slate-500 text-slate-200 bg-transparent hover:bg-slate-800 hover:text-white focus:ring-slate-400',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;