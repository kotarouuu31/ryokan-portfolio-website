import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { News } from '@/components/sections/News';
import { Accommodation } from '@/components/sections/Accommodation';
import { Experience } from '@/components/sections/Experience';
import { Access } from '@/components/sections/Access';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <Accommodation />
      <Experience />
      <Access />
    </div>
  );
}
