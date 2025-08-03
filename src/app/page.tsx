import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Next Section for scroll testing */}
      <section id="next-section" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            ようこそ、古民家宿へ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ここに次のセクションのコンテンツが入ります。スクロール機能のテスト用セクションです。
          </p>
        </div>
      </section>
    </div>
  );
}
