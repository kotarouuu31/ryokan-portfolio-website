'use client';

import React from 'react';

export const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-light text-gray-800 mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            ご宿泊
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            心安らぐ客室で、特別なひとときをお過ごしください。
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((room) => (
              <div key={room} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                    客室 {room}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    客室の詳細情報がここに表示されます。
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
