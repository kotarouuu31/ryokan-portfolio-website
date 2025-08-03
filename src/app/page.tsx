import { Hero } from '@/components/sections/Hero';
import { Introduction } from '@/components/sections/Introduction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Introduction Section */}
      <section id="next-section">
        <Introduction />
      </section>
    </div>
  );
}
