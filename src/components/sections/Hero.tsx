'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Japanese Copy */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 leading-relaxed"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            心とからだをほどく。
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl">―忍冬香る古蔵にて</span>
          </motion.h1>

          {/* English Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl font-light mb-16 opacity-90 tracking-wide"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            Soothe your senses in the quiet embrace of an old brewery.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 1.0,
          ease: 'easeOut',
        }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white hover:text-gray-300 transition-colors duration-300 group"
        aria-label="Scroll to next section"
      >
        <span
          className="text-sm md:text-base font-light tracking-widest mb-2 opacity-80"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  );
};
