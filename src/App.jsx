
import AboutMeSection from "./pages/AboutMeSection";
import EducationSection from "./pages/EducationSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import ProjectSection from "./pages/ProjectSection";
import SkillsSection from "./pages/SkillsSection";

function App() {
  return (
    <div className="min-h-screen bg-animated-gradient font-sans text-base-content selection:bg-primary selection:text-primary-content">
      <Header />
      <main>
        <HeroSection />
        <AboutMeSection />
        <EducationSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
