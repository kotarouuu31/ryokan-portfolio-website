'use client';

import React from 'react';

export const News: React.FC = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50">
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
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 text-center">
              お知らせコンテンツがここに表示されます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
