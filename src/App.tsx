import { useEffect, useState } from 'react';
import { useReveal } from './hooks';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <a href="#main-content" className="skip-link">
        تخطّي إلى المحتوى
      </a>
      <ScrollProgress />
      <Header scrolled={scrolled} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <VisionMission />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
