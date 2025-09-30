"use client";

import React from 'react';

type ButtonVariant = 'primary' | 'primarylight' | 'secondary' | 'tertiary';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
}

const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const baseClasses = `
    px-8 py-3 rounded-full 
    text-sm text-center 
    items-center justify-center
  `;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-[#656BA8] hover:bg-[#6c70a0] text-white',
    primarylight: 'bg-[#7E82B0] hover:bg-[#6c70a0] text-white',
    secondary: 'bg-transparent border-[1.5px] border-[#656BA8] hover:bg-[#656BA8]/20 text-white',
    tertiary: 'bg-[#B5B6EC] hover:bg-[#B5B6EC]/50 text-[#24284D]',
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
