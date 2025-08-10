'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            お食事
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light tracking-wider">
            Restaurant
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/dining-placeholder.jpg"
                  alt="お食事"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-16 h-16 mx-auto mb-4 bg-amber-200 rounded-full flex items-center justify-center">
                              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <p class="text-amber-700 font-light">お食事の画像</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-6">
                <p 
                  className="text-base md:text-lg leading-relaxed text-gray-700"
                  style={{ fontFamily: '"Noto Serif JP", serif' }}
                >
                  薬膳の知恵を取り入れた、からだにやさしい日本料理のコースをご用意しました。忍冬の香りを添えた味わいが、五感をほぐし、体の内側からめぐりをととのえます。
                </p>
                
                <div className="pt-4">
                  <Link 
                    href="/restaurant" 
                    className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 rounded-sm group"
                    style={{ fontFamily: '"Noto Serif JP", serif' }}
                  >
                    くわしく見る
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
