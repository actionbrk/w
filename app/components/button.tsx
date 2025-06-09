"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const baseClasses = `
    px-14 py-3 rounded-full 
    text-sm text-white text-center 
    flex items-center justify-center
  `;

  const variantClasses = {
    primary: 'bg-[#7E82B0] hover:bg-[#6c70a0]',
    secondary: 'bg-transparent border-[1.5px] border-[#656BA8] hover:bg-[#656BA8]/20',
  };

  return (
    <a href="#"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;
