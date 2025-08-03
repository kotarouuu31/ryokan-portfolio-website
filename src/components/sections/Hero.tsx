'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Slideshow data
const slides = [
  {
    id: 1,
    backgroundImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    mainTitle: '心とからだをほどく',
    subtitle: 'Unwind Your Mind and Body',
    description: '犬山の静寂に包まれた古民家で、日常を忘れる特別なひとときを。',
  },
  {
    id: 2,
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    mainTitle: '忍冬＜スイカズラ＞',
    subtitle: 'Honeysuckle',
    description: '季節の移ろいとともに、心に寄り添う宿の物語をお届けします。',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#news');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Images with auto-switching */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0 p-4 md:p-6 lg:p-8 xl:p-12"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url("${slides[currentSlide].backgroundImage}")`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Hero Content - Full screen centered */}
      <div className="relative z-10 h-screen flex flex-col justify-center">
        {/* Auto-switching content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-12"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 md:mb-6 tracking-wide"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {slides[currentSlide].mainTitle}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wider mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 md:mb-10 lg:mb-12 font-light"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  style={{ fontFamily: '"Noto Serif JP", serif' }}
                >
                  宿について
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-white/90"
                  style={{ fontFamily: '"Noto Serif JP", serif' }}
                >
                  ご予約
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Button - Bottom with larger margin */}
        <div className="flex-shrink-0 flex justify-center pb-12 md:pb-16 lg:pb-20">
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 group"
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
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
