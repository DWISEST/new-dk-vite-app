
import React from 'react';

interface LogoProps {
  className?: string;
  height?: string | number;
}

const Logo: React.FC<LogoProps> = ({ className = '', height = '20' }) => {
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) : height;
  // Use an aspect ratio that matches the visual appearance of the logo
  const aspectRatio = 4.16; // e.g., for an image of size 250x60
  const numericWidth = Math.round(numericHeight * aspectRatio);

  return (
    <img
      src="/logo.png"
      alt="dktelecom ltd. logo"
      height={numericHeight}
      width={numericWidth}
      className={className}
    />
  );
};

export default Logo;
