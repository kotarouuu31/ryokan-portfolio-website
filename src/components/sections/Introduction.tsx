'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks';
import { Button } from '@/components/ui/Button';

export const Introduction: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-white"
      style={{ fontFamily: '"Noto Serif JP", serif' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={hasIntersected ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Main Title */}
            <motion.h2
              variants={fadeInVariants}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed"
            >
              忍冬＜スイカズラ＞。
            </motion.h2>

            {/* Introduction Text */}
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="space-y-4 text-gray-700 leading-loose"
            >
              <p className="text-base md:text-lg">
                「冬をしのぐ」と書くこの植物は、
                <br />
                古くから生薬として用いられ
                <br />
                ここ犬山の地では、薬酒として
                <br />
                人々の暮らしと滋養に寄り添ってきました。
              </p>

              <p className="text-base md:text-lg">
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

              <p className="text-base md:text-lg">
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
              className="pt-6"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-3 text-lg font-light tracking-wide"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                宿について
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={hasIntersected ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              />
              {/* Optional overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
