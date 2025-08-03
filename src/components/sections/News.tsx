'use client';

import React from 'react';
import Link from 'next/link';

// Sample news data
const newsData = [
  {
    id: 1,
    date: '2024.12.15',
    title: '年末年始の営業について',
    href: '#',
  },
  {
    id: 2,
    date: '2024.11.20',
    title: '冬季限定プランのご案内',
    href: '#',
  },
  {
    id: 3,
    date: '2024.10.30',
    title: '犬山祭り期間中の特別サービス',
    href: '#',
  },
  {
    id: 4,
    date: '2024.09.15',
    title: '秋の味覚フェア開催',
    href: '#',
  },
];

export const News: React.FC = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            お知らせ
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light tracking-wider">
            News
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {newsData.map((news, index) => (
              <Link
                key={news.id}
                href={news.href}
                className="block hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div 
                  className={`py-4 md:py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 ${
                    index !== newsData.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <time 
                      className="text-sm md:text-base text-gray-500 font-light tracking-wide"
                      dateTime={news.date.replace(/\./g, '-')}
                    >
                      {news.date}
                    </time>
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-base md:text-lg text-gray-800 font-light leading-relaxed group-hover:text-gray-600 transition-colors duration-300"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {news.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
