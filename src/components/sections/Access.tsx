'use client';

import React from 'react';

export const Access: React.FC = () => {
  return (
    <section id="access" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-light text-gray-800 mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            アクセス
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            犬山の歴史ある町並みに佇む宿へのアクセス方法をご案内します。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                交通アクセス
              </h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-medium mb-2">電車でお越しの場合</h4>
                  <p className="text-sm">名鉄犬山線「犬山駅」より徒歩10分</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">お車でお越しの場合</h4>
                  <p className="text-sm">中央自動車道「小牧東IC」より約10分</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                所在地
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="aspect-[16/9] bg-gray-200 rounded mb-4"></div>
                <p className="text-gray-600 text-sm">
                  〒484-0000<br />
                  愛知県犬山市○○○○<br />
                  TEL: 0568-XX-XXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
