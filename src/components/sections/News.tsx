'use client';

import React from 'react';
import Link from 'next/link';

// Sample news data
const newsData = [
  {
    id: 1,
    date: '2024.12.15',
    title: '年末年始の営業についてのお知らせ',
    href: '#',
  },
  {
    id: 2,
    date: '2024.11.28',
    title: '冬季限定プランのご案内',
    href: '#',
  },
  {
    id: 3,
    date: '2024.11.10',
    title: '犬山城下町散策ツアー開始のお知らせ',
    href: '#',
  },
  {
    id: 4,
    date: '2024.10.25',
    title: '秋の特別懐石料理のご提供について',
    href: '#',
  },
  {
    id: 5,
    date: '2024.10.08',
    title: '館内設備メンテナンスのお知らせ',
    href: '#',
  },
  {
    id: 6,
    date: '2024.09.20',
    title: '紅葉シーズンの予約受付開始',
    href: '#',
  },
];

export const News: React.FC = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-light text-gray-800 mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            お知らせ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            宿からの最新情報をお届けします。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
            {newsData.map((news, index) => (
              <Link
                key={news.id}
                href={news.href}
                className="block hover:bg-gray-50 transition-colors duration-200"
              >
                <div 
                  className={`px-6 md:px-8 py-5 md:py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 ${
                    index !== newsData.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <time 
                      className="text-sm md:text-base text-gray-500 font-light tracking-wider"
                      dateTime={news.date.replace(/\./g, '-')}
                    >
                      {news.date}
                    </time>
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-base md:text-lg text-gray-800 font-light leading-relaxed hover:text-gray-600 transition-colors duration-200"
                      style={{ fontFamily: '"Noto Serif JP", serif' }}
                    >
                      {news.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 hidden sm:block">
                    <svg 
                      className="w-4 h-4 text-gray-400" 
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-8">
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-light"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              すべてのお知らせを見る
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
      </div>
    </section>
  );
};
