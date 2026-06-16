import { useEffect } from 'react';
import Lenis from 'lenis';

import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import Evolution3D from "./components/Evolution3D";
import AboutMeSection from "./pages/AboutMeSection";
import ExperienceSection from "./pages/ExperienceSection";
import SkillsSection from "./pages/SkillsSection";
import TechStackShowcase from "./pages/TechStackShowcase";
import ProjectSection from "./pages/ProjectSection";
import AiInnovationSection from "./pages/AiInnovationSection";
import ServicesSection from "./pages/ServicesSection";
import AchievementSection from "./pages/AchievementSection";
import TestimonialsSection from "./pages/TestimonialsSection";
import BlogSection from "./pages/BlogSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-white relative overflow-hidden">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-animated-gradient opacity-90"></div>
        <div className="absolute inset-0 aurora-bg mix-blend-screen opacity-50 animate-aurora"></div>
        {/* Floating blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <Evolution3D />
          <AchievementSection />
          <AboutMeSection />
          <ExperienceSection />
          <SkillsSection />
          <TechStackShowcase />
          <ProjectSection />
          <AiInnovationSection />
          <ServicesSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
