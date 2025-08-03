'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { label: '宿について', href: '#about' },
  { label: 'ご宿泊', href: '#accommodation' },
  { label: 'お食事', href: '#dining' },
  { label: '体験・散策', href: '#experience' },
  { label: 'アクセス', href: '#access' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'JA' | 'EN'>('JA');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'JA' ? 'EN' : 'JA');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6">
          <nav className="flex items-center justify-between">
            {/* Desktop Navigation - Left Side */}
            <ul className="hidden lg:flex space-x-8 xl:space-x-12">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300"
                    style={{ fontFamily: '"Noto Serif JP", serif' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile/Tablet - Empty space for balance */}
            <div className="lg:hidden" />

            {/* Right Side - Language Switch + Hamburger */}
            <div className="flex items-center space-x-6">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="text-white text-sm font-light tracking-wider hover:opacity-70 transition-opacity duration-300"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {language} / {language === 'JA' ? 'EN' : 'JA'}
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                className="text-white hover:opacity-70 transition-opacity duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} strokeWidth={1} />
                ) : (
                  <Menu size={24} strokeWidth={1} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 lg:hidden">
          <div className="flex items-center justify-center min-h-screen">
            <nav className="text-center">
              <ul className="space-y-8">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-2xl font-light tracking-wide hover:opacity-70 transition-opacity duration-300 block"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
