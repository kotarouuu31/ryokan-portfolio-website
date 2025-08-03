'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/lib/hooks';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const { ref: introRef, hasIntersected } = useIntersectionObserver();

  const scrollToNext = () => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth',
      });
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[200vh] overflow-hidden bg-white">
      {/* Fixed Background Image with margins */}
      <div className="fixed inset-0 z-0 p-4 md:p-6 lg:p-8 xl:p-12">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Main Hero Content - Upper 30% */}
      <div className="relative z-10 h-screen flex flex-col justify-center">
        {/* Logo Area - Upper portion with generous top spacing */}
        <div className="flex-1 flex items-end justify-center pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Placeholder for logo - can be replaced with actual logo later */}
            <div className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-4" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              宿
            </div>
            <div className="text-white text-sm md:text-base tracking-[0.3em] opacity-80" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              - SHUKU -
            </div>
          </motion.div>
        </div>

        {/* Main Copy Area - Lower portion with generous spacing */}
        <div className="flex-1 flex items-start justify-center pt-12 md:pt-16 lg:pt-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="max-w-5xl mx-auto"
            >
              {/* Main Japanese Copy */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 md:mb-12 lg:mb-16 leading-relaxed"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                心とからだをほどく。
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl block mt-4 md:mt-6">―忍冬香る古蔵にて</span>
              </motion.h1>

              {/* English Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                className="text-lg md:text-xl lg:text-2xl font-light opacity-90 tracking-wide max-w-3xl mx-auto"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                Soothe your senses in the quiet embrace of an old brewery.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Button - Positioned with more bottom spacing */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1.0,
            ease: 'easeOut',
          }}
          onClick={scrollToNext}
          className="absolute bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white hover:text-gray-300 transition-colors duration-300 group"
          aria-label="Scroll to next section"
        >
          <span
            className="text-sm md:text-base font-light tracking-widest mb-3 opacity-80"
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
      </div>

      {/* Introduction Content - Lower 70% */}
      <div
        ref={introRef}
        className="relative z-10 min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center text-white">
          <motion.div
            initial="hidden"
            animate={hasIntersected ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl mx-auto space-y-12 md:space-y-16 lg:space-y-20"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            {/* Introduction Title */}
            <motion.h2
              variants={fadeInVariants}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-12 md:mb-16 lg:mb-20 leading-relaxed"
            >
              忍冬＜スイカズラ＞。
            </motion.h2>

            {/* Introduction Text */}
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="space-y-8 md:space-y-10 lg:space-y-12 text-base md:text-lg lg:text-xl xl:text-2xl leading-loose opacity-90 max-w-4xl mx-auto"
            >
              <p>
                「冬をしのぐ」と書くこの植物は、
                <br />
                古くから生薬として用いられ
                <br />
                ここ犬山の地では、薬酒として
                <br />
                人々の暮らしと滋養に寄り添ってきました。
              </p>

              <p>
                私たちの宿は、
                <br />
                400年もの間、忍冬酒を醸してきた空間で
                <br />
                「すこやかな暮らし」と
                <br />
                「心身をととのえる時間」を
                <br />
                体験していただく場所です。
              </p>

              <p>
                喧騒から少し離れた犬山の町並みのなかで。
                <br />
                一杯のお酒と一膳のお食事、
                <br />
                そして一輪の香りが
                <br />
                旅人の心とからだに、
                <br />
                そっと余白をもたらしますように。
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="pt-12 md:pt-16 lg:pt-20"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 px-10 md:px-12 lg:px-16 py-4 md:py-5 text-lg md:text-xl font-light tracking-wide"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                宿について
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
