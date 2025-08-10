'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#news');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image with proper spacing */}
      <div className="absolute inset-0 z-0 m-4 md:m-6 lg:m-8 xl:m-12">
        <div className="w-full h-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/zubottyDSC00820_TP_V.jpg")`,
            }}
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Logo Icon - Three-layer roof design */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <svg 
                width="80" 
                height="60" 
                viewBox="0 0 80 60" 
                fill="none" 
                className="text-white"
              >
                {/* Three-layer traditional roof icon */}
                <path 
                  d="M10 50 L40 30 L70 50 L65 50 L40 35 L15 50 Z" 
                  fill="currentColor" 
                />
                <path 
                  d="M15 40 L40 25 L65 40 L60 40 L40 30 L20 40 Z" 
                  fill="currentColor" 
                />
                <path 
                  d="M20 30 L40 20 L60 30 L55 30 L40 25 L25 30 Z" 
                  fill="currentColor" 
                />
              </svg>
            </div>
            
            {/* Hotel Name */}
            <h1 
              className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wider"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              宿
            </h1>
            <p 
              className="text-lg md:text-xl font-light text-white/90 tracking-widest"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              -SHUKU-
            </p>
          </motion.div>

          {/* Main Catchphrase */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 tracking-wide leading-tight"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            心とからだをほどく。
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-4 md:mb-6 tracking-wide"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            一忍冬香る古蔵にて
          </motion.p>

          {/* English Description */}
          <motion.p
            className="text-base md:text-lg text-white/80 font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Soothe your senses in the quiet embrace of an old brewery.
          </motion.p>
        </div>

        {/* Scroll Indicator - Bottom Right */}
        <div className="absolute bottom-12 md:bottom-16 lg:bottom-20 right-8 md:right-12 lg:right-16">
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ y: -2 }}
          >
            <span
              className="text-sm md:text-base font-light mb-2 tracking-wider"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg 
                className="w-4 h-4 md:w-5 md:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
