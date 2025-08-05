'use client';

import React from 'react';
import Link from 'next/link';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1544537150-6e4b998de2a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            体験・散策
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wider mb-8 md:mb-12">
            Experience
          </p>
          
          <div className="mb-12 md:mb-16">
            <p 
              className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-light"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              忍冬の香りに癒される入浴や館内ツアーに加え、
              <br className="hidden md:block" />
              国宝・犬山城や木曽川の鷺飼、町歩きの楽しみもすぐそばに。
              <br className="hidden md:block" />
              歴史の面影を色濃く残す地域とひとつになって味わう、
              <br className="hidden md:block" />
              ここだけの時間があります。
            </p>
          </div>
          
          <div>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-sm backdrop-blur-sm"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              くわしく見る
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
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
