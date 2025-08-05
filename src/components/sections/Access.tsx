'use client';

import React from 'react';
import Link from 'next/link';

export const Access: React.FC = () => {
  return (
    <section id="access" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            アクセス
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light tracking-wider mb-8 md:mb-12">
            Access
          </p>
          
          <div>
            <Link 
              href="https://maps.app.goo.gl/f5DBFYnxHhKoXG9G8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 rounded-sm"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              Google Maps
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
