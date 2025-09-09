'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-warm border-b border-primary-100"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="font-serif text-2xl md:text-3xl text-gradient-gold hover:scale-105 transition-transform duration-300">
            Serenity Aesthetics
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary-700 z-50 p-2 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay для затемнения фона */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-primary-100/40 backdrop-blur-sm md:hidden z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Само меню */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-[80px] left-0 right-0 bg-white border-b-2 border-primary-200 shadow-2xl md:hidden z-50"
              >
                <nav className="flex flex-col items-center justify-start py-8 space-y-6 bg-gradient-to-b from-white to-primary-50">
                  <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-medium text-secondary-900 hover:text-primary-600 transition-colors">
                      Services
                    </span>
                  </NavLink>
                  <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-medium text-secondary-900 hover:text-primary-600 transition-colors">
                      About
                    </span>
                  </NavLink>
                  <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-medium text-secondary-900 hover:text-primary-600 transition-colors">
                      Contact
                    </span>
                  </NavLink>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
