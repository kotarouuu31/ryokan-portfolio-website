import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { News } from '@/components/sections/News';
import { Accommodation } from '@/components/sections/Accommodation';
import { Dining } from '@/components/sections/Dining';
import { ImageSlider } from '@/components/sections/ImageSlider';
import { Experience } from '@/components/sections/Experience';
import CastleImage from '@/components/sections/CastleImage';
import { Access } from '@/components/sections/Access';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <Accommodation />
      <Dining />
      <ImageSlider />
      <Experience />
      <CastleImage />
      <Access />
    </div>
  );
}
