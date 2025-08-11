'use client';

import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';

// Constants
const HERO_HEIGHT = '300vh';
const BACKGROUND_IMAGE = '/images/zubottyDSC00820_TP_V.jpg';
const FONT_FAMILY = '"Noto Serif JP", serif';

// Custom hook for background scroll management
const useBackgroundScrollEffect = () => {
  const handleScroll = useCallback(() => {
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    const fixedBg = document.querySelector('.hero-fixed-bg') as HTMLElement;
    
    if (!heroSection || !fixedBg) return;
    
    const heroHeight = heroSection.scrollHeight;
    const scrolled = window.scrollY;
    const isHeroComplete = scrolled >= heroHeight - window.innerHeight;
    
    // Toggle background attachment based on scroll position
    if (isHeroComplete) {
      Object.assign(fixedBg.style, {
        position: 'absolute',
        height: HERO_HEIGHT,
        top: '0',
        backgroundAttachment: 'scroll'
      });
    } else {
      Object.assign(fixedBg.style, {
        position: 'fixed',
        height: '100vh',
        top: '0',
        backgroundAttachment: 'fixed'
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};

// Logo component
const HeroLogo: React.FC = () => (
  <div className="mb-8">
    <div className="flex justify-center mb-4">
      <svg 
        width="80" 
        height="60" 
        viewBox="0 0 80 60" 
        fill="none" 
        className="text-white"
        aria-label="宿のロゴ"
      >
        <path d="M10 50 L40 30 L70 50 L65 50 L40 35 L15 50 Z" fill="currentColor" />
        <path d="M15 40 L40 25 L65 40 L60 40 L40 30 L20 40 Z" fill="currentColor" />
        <path d="M20 30 L40 20 L60 30 L55 30 L40 25 L25 30 Z" fill="currentColor" />
      </svg>
    </div>
    
    <h1 
      className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wider"
      style={{ fontFamily: FONT_FAMILY }}
    >
      宿 -SHUKU-
    </h1>
  </div>
);

// Scroll indicator component
const ScrollIndicator: React.FC = () => (
  <div className="absolute bottom-12 md:bottom-16 lg:bottom-20 right-8 md:right-12 lg:right-16">
    <div className="flex flex-col items-center text-white/70">
      <span
        className="text-sm md:text-base font-light mb-2 tracking-wider"
        style={{ fontFamily: FONT_FAMILY }}
      >
        scroll
      </span>
      <svg 
        className="w-4 h-4 md:w-5 md:h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-label="下にスクロール"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </div>
  </div>
);

// Story content component
const StoryContent: React.FC = () => (
  <div className="max-w-2xl text-white">
    <h3 
      className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-wide"
      style={{ fontFamily: FONT_FAMILY }}
    >
      忍冬＜スイカズラ＞。
    </h3>
    
    <div 
      className="space-y-4 text-base md:text-lg lg:text-xl font-light leading-relaxed"
      style={{ fontFamily: FONT_FAMILY }}
    >
      <div>
        <p>「冬をしのぐ」と書くこの植物は、</p>
        <p>古くから生薬として用いられ</p>
        <p>ここ犬山の地では、薬酒として</p>
        <p>人々の暮らしと滋養に寄り添ってきました。</p>
      </div>
      
      <div>
        <p>私たちの宿は、</p>
        <p>400年もの間、忍冬酒を醸してきた空間で</p>
        <p>「すこやかな暮らし」と</p>
        <p>「心身をととのえる時間」を</p>
        <p>体験していただく場所です。</p>
      </div>
      
      <div>
        <p>喧騒から少し離れた犬山の町並みのなかで。</p>
        <p>一杯のお酒と一膳のお食事、</p>
        <p>そして一輪の香りが</p>
        <p>旅人の心とからだに、</p>
        <p>そっと余白をもたらしますように。</p>
      </div>
    </div>
    
    <div className="mt-8">
      <Link 
        href="#accommodation"
        className="inline-flex items-center text-white/80 hover:text-white border-b border-white/50 hover:border-white transition-colors duration-300 text-lg font-light tracking-wider"
        style={{ fontFamily: FONT_FAMILY }}
      >
        宿について
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

// Main Hero component
export const Hero: React.FC = () => {
  useBackgroundScrollEffect();

  return (
    <section className="hero-section relative" style={{ minHeight: HERO_HEIGHT }}>
      {/* Fixed Background Image */}
      <div 
        className="hero-fixed-bg fixed inset-0 z-0 m-4 md:m-6 lg:m-8 xl:m-12"
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div className="w-full h-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${BACKGROUND_IMAGE}")`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        {/* First Content Area - Initial Display */}
        <div className="h-screen flex flex-col justify-center items-center text-white">
          <div className="text-center max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <HeroLogo />

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 tracking-wide leading-tight"
              style={{ fontFamily: FONT_FAMILY }}
            >
              心とからだをほどく。
            </h2>

            <p
              className="text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-4 md:mb-6 tracking-wide"
              style={{ fontFamily: FONT_FAMILY }}
            >
              ―忍冬香る古蔵にて
            </p>

            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed tracking-wide">
              Soothe your senses in the quiet embrace of an old brewery.
            </p>
          </div>

          <ScrollIndicator />
        </div>

        {/* Empty Space Area - Beautiful background only */}
        <div className="h-screen" />

        {/* Second Content Area - Detail Story */}
        <div className="h-screen flex items-center justify-start pl-8 md:pl-16 pr-8 md:pr-16">
          <StoryContent />
        </div>
      </div>
    </section>
  );
};
