'use client';

import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-light text-gray-800 mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            体験・散策
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            犬山の豊かな自然と歴史を感じる特別な体験をご用意しています。
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['酒蔵見学', '町並み散策', '季節の体験', 'お食事'].map((experience, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[16/9] bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    {experience}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {experience}の詳細情報がここに表示されます。
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
