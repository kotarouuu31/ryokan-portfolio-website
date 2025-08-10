'use client';

import React from 'react';
import Link from 'next/link';

export const Access: React.FC = () => {
  return (
    <section id="access" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            アクセス
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light tracking-wider">
            Access
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Access Information */}
          <div className="space-y-8">
            {/* Hotel Name & Address */}
            <div className="space-y-4">
              <h3 
                className="text-2xl font-light text-white mb-4"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                宿-SHUKU-
              </h3>
              
              <div className="flex items-start gap-3">
                {/* Address Icon */}
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white leading-relaxed">
                    〒484-0083 愛知県犬山市犬山東古券633
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation Access */}
            <div className="space-y-6">
              {/* By Train */}
              <div className="flex items-start gap-3">
                {/* Train Icon */}
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h5a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h5m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v7m4 0H9m4 0h2M7 7h10" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">電車での来館</h4>
                  <p className="text-white/90 leading-relaxed">
                    &lt;名古屋から&gt;名鉄名古屋駅から30分、名鉄犬山線犬山駅を下車。名鉄犬山駅からフロントまで徒歩10分。
                  </p>
                </div>
              </div>

              {/* By Car */}
              <div className="flex items-start gap-3">
                {/* Car Icon */}
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16h5a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h5m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v7m4 0H9" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">お車での来館</h4>
                  <p className="text-white/90 leading-relaxed">
                    名古屋高速小牧北ICから30分。
                  </p>
                </div>
              </div>
            </div>

            {/* Facility Information */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              {/* Check-in/Check-out */}
              <div className="flex items-start gap-3">
                {/* Clock Icon */}
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">チェックイン・チェックアウト</h4>
                  <p className="text-white/90 leading-relaxed">
                    IN 15:00〜18:00 / OUT 10:00
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-3">
                {/* Parking Icon */}
                <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">駐車場</h4>
                  <p className="text-white/90 leading-relaxed mb-3">
                    有(無料/10台)
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      ご予約の状況によっては駐車場が満車となる場合がございます。その場合は近隣の有料駐車場をご利用ください。毎年4月の第1土日は犬山祭が開催されるため、近隣が通行止めとなります。お車でのお越しはご遠慮いただきますようお願い致します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map Area */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-light">地図エリア</p>
                <p className="text-sm text-gray-400 mt-1">Map Area</p>
              </div>
              
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="text-center">
              <Link 
                href="https://maps.app.goo.gl/f5DBFYnxHhKoXG9G8" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Google Maps で開く
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
