'use client';

import React from 'react';
import { NavigationItem } from '@/types';

interface HeaderProps {
  navigationItems?: NavigationItem[];
}

export const Header: React.FC<HeaderProps> = ({ navigationItems = [] }) => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">古民家宿</div>
          <ul className="hidden md:flex space-x-8">
            {navigationItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
