'use client';

import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Если ссылка начинается с #, то это якорная ссылка для прокрутки
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        // Учитываем высоту фиксированного хедера (примерно 80px)
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Вызываем пользовательский onClick если он передан
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-secondary-700 hover:text-primary-600 transition-all duration-300 font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}
