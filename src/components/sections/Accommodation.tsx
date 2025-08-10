'use client';

import React from 'react';
import Link from 'next/link';

// Building data
const buildings = [
  {
    id: 1,
    name: '練屋棟',
    nameEn: 'Neriya',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '#',
  },
  {
    id: 2,
    name: '下本町棟',
    nameEn: 'Shimohonmachi',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '#',
  },
];

export const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            宿泊
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light tracking-wider">
            Accommodation
          </p>
          <div className="max-w-4xl mx-auto">
            <p 
              className="text-base md:text-lg text-white leading-relaxed font-light"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              江戸の記憶を今に伝える犬山の城下町に佇む、ふたつの邸宅。
              <br className="hidden md:block" />
              ひとつは400年の酒造りを受け継ぐ酒蔵、もうひとつは由緒ある名家の屋敷。
              <br className="hidden md:block" />
              それぞれ趣異なる空間で、心をほどくひとときを。
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {buildings.map((building) => (
              <Link
                key={building.id}
                href={building.href}
                className="group block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={building.image}
                      alt={building.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <h3 
                      className="text-xl md:text-2xl font-light text-gray-800 mb-2 group-hover:text-gray-600 transition-colors duration-300"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {building.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 font-light tracking-wider">
                      {building.nameEn}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* View All Rooms Link */}
        <div className="text-center">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 rounded-sm"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            部屋の一覧を見る
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
    </section>
  );
};
