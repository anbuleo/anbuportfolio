import { useState } from "react"
import AboutMeSection from "./pages/AboutMeSection"
import ContactSection from "./pages/ContactSection"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import HeroSection from "./pages/HeroSection"
import ProjectSection from "./pages/ProjectSection"
import SkillsSection from "./pages/SkillsSection"
import Joyride from 'react-joyride';

function App() {
  const [run, setRun] = useState(true);
  const steps = [
    {
      target: '.navbar', 
      content: 'This is the navigation bar.',
    },
    {
      target: '.skill',
      content: 'Here you can view skill information.',
    },
    {
      target: '.project',
      content: 'Click here to see projects.',
    },
    {
      target: '.contact',
      content: 'here is contact information.',
    },

  ];
 
  return <>
    <div>
      {/* Joyride Component */}
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 10000, // Ensure the tooltip is above other elements
          },
        }}
      />
  <Header />
  <HeroSection />
  <AboutMeSection />
  <SkillsSection />
  <ProjectSection />
  <ContactSection />
  <Footer/>
  </div>
 
  </>
}

export default App
