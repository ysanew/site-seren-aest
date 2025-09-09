'use client';

import { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'inverse';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  type = 'button',
  onClick,
  disabled = false
}: ButtonProps) {
  // Inline стили для полной гарантии видимости
  let inlineStyles: CSSProperties = {};
  
  if (variant === 'primary') {
    inlineStyles = {
      backgroundColor: '#b8941f', // primary-600 (золотистый)
      color: '#ffffff !important',
      borderColor: '#b8941f',
      borderWidth: '2px',
      borderStyle: 'solid'
    };
  } else if (variant === 'inverse') {
    inlineStyles = {
      backgroundColor: '#ffffff',
      color: '#644f15 !important', // primary-900 (темно-золотистый)
      borderColor: '#ffffff',
      borderWidth: '2px',
      borderStyle: 'solid'
    };
  }
  
  // Базовые классы без цветов
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-lg transition-all duration-200 cursor-pointer focus:outline-none shadow-lg hover:shadow-xl';
  
  // Добавляем принудительные классы для цвета текста
  const textColorClass = variant === 'primary' ? 'btn-primary-text' : 'btn-inverse-text';
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const allClasses = `${baseClasses} ${textColorClass} ${disabledClasses} ${className}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#9c7a16'; // primary-700
      e.currentTarget.style.borderColor = '#9c7a16';
    } else if (!disabled && variant === 'inverse') {
      e.currentTarget.style.backgroundColor = '#fdf9f0'; // primary-100
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#b8941f'; // primary-600
      e.currentTarget.style.borderColor = '#b8941f';
    } else if (!disabled && variant === 'inverse') {
      e.currentTarget.style.backgroundColor = '#ffffff';
    }
  };

  return (
    <button
      type={type}
      className={allClasses}
      style={inlineStyles}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span style={{ color: variant === 'primary' ? '#ffffff' : '#644f15' }}>
        {children}
      </span>
    </button>
  );
}
