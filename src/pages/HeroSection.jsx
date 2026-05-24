import profilePic from '../assets/doodleProfilePic.png';
import FadeIn from '../components/FadeIn';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  return (
    <section id="profile" className="relative min-h-[80vh] flex items-center justify-center py-12 lg:py-24 overflow-hidden">
      {/* Background Blobs for Glass Depth */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
        
        {/* Profile Image */}
        <FadeIn direction="right" delay={0.2}>
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.3)] border-4 border-white/20">
            <img 
              src={profilePic} 
              alt="Anbu Liyon Profile Pic" 
              className="w-full h-full object-cover"
              loading="lazy" 
            />
          </div>
        </FadeIn>

        {/* Text Content in Glass Panel */}
        <FadeIn direction="left" delay={0.4}>
          <div className="glass-panel rounded-3xl p-8 md:p-12 text-center md:text-left space-y-4 max-w-xl border-t-primary/30 relative overflow-hidden group">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <p className="text-lg md:text-xl font-medium text-white/80">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white drop-shadow-md pb-2">Anbu Liyon</h1>
            
            <div className="text-xl md:text-2xl font-bold text-primary drop-shadow-sm h-8">
              <Typewriter
                words={['MERN Stack Web Developer', 'Full Stack Engineer', 'SaaS Architect', 'Problem Solver']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
            
            <p className="py-6 text-lg text-white/70 font-light leading-relaxed">
              Passionate full-stack developer dedicated to crafting seamless, responsive, and highly premium digital experiences. I turn complex business problems into elegant, scalable solutions.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                className="btn btn-primary rounded-full px-8 shadow-lg shadow-primary/30 border-none hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-bold" 
                target="_blank" 
                rel="noopener noreferrer"
                href="/Anbu_Resume.pdf"
                download="Anbu_Resume.pdf"
              >
                Download Resume
              </a>
              <button 
                className="btn btn-outline text-white hover:bg-white hover:text-base-100 border-white/50 rounded-full px-8 hover:scale-105 transition-all duration-300" 
                onClick={() => location.href='#contact'}
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
}

export default HeroSection;