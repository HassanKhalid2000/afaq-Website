'use client';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import SectorsSection from './components/SectorsSection';
import SolutionsSection from './components/SolutionsSection';
import ClientsCarousel from './components/ClientsCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <AboutSection />
      <SectorsSection />
      <SolutionsSection />
      <ClientsCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}
