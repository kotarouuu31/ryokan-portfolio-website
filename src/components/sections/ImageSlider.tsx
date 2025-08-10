'use client';

import React, { useEffect, useRef } from 'react';

interface SlideItem {
  id: number;
  title: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: '茶',
    alt: '茶道の風景'
  },
  {
    id: 2,
    title: '犬山城',
    alt: '国宝犬山城'
  },
  {
    id: 3,
    title: '犬山祭',
    alt: '犬山祭の提灯'
  },
  {
    id: 4,
    title: '木曽川鵜飼',
    alt: '木曽川の鵜飼'
  },
  {
    id: 5,
    title: '犬山焼',
    alt: '犬山焼の陶器'
  },
  {
    id: 6,
    title: '荵苳酒',
    alt: '荵苳酒'
  }
];

// 無限ループのために配列を3倍にする
const infiniteSlides = [...slides, ...slides, ...slides];

const SlideCard: React.FC<{ slide: SlideItem; index: number }> = ({ slide, index }) => {
  const colors = {
    '茶': 'from-green-100 to-emerald-100 text-green-700',
    '犬山城': 'from-stone-100 to-gray-100 text-stone-700',
    '犬山祭': 'from-red-100 to-pink-100 text-red-700',
    '木曽川鵜飼': 'from-blue-100 to-cyan-100 text-blue-700',
    '犬山焼': 'from-amber-100 to-orange-100 text-amber-700',
    '荵苳酒': 'from-purple-100 to-violet-100 text-purple-700'
  };
  const colorClass = colors[slide.title as keyof typeof colors] || 'from-gray-100 to-slate-100 text-gray-700';
  
  // 段々配置のための上下オフセット
  const isEven = index % 2 === 0;
  const marginTop = isEven ? 'mt-0' : 'mt-8 md:mt-12';

  return (
    <div className={`flex-shrink-0 w-64 md:w-72 mx-2 md:mx-3 ${marginTop}`}>
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
        <div className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
          <div className="text-center">
            <div 
              className="text-2xl md:text-3xl font-light mb-2"
              style={{ 
                fontFamily: '"Noto Serif JP", serif',
                writingMode: 'vertical-rl',
                textOrientation: 'upright'
              }}
            >
              {slide.title}
            </div>
            <p className="text-sm opacity-75">犬山の文化</p>
          </div>
        </div>
        
        {/* テキストオーバーレイ */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
          <div className="w-full p-4 md:p-6">
            <div className="bg-black bg-opacity-50 rounded px-3 py-2 inline-block">
              <h3 
                className="text-white text-lg md:text-xl font-light"
                style={{ 
                  fontFamily: '"Noto Serif JP", serif',
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright'
                }}
              >
                {slide.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImageSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let translateX = 0;
    const slideWidth = 256 + 16; // カード幅 + マージン (w-64 + mx-2)
    const totalWidth = slideWidth * slides.length;
    const speed = 1.2; // ピクセル/フレーム

    const animate = () => {
      translateX -= speed;
      
      // 1セット分移動したらリセット（無限ループ）
      if (Math.abs(translateX) >= totalWidth) {
        translateX = 0;
      }
      
      slider.style.transform = `translateX(${translateX}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="relative">
        {/* スライダーコンテナ */}
        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex"
            style={{
              width: `${infiniteSlides.length * (320 + 32)}px` // 各カードの幅を計算
            }}
          >
            {infiniteSlides.map((slide, index) => (
              <SlideCard key={`${slide.id}-${index}`} slide={slide} index={index} />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
