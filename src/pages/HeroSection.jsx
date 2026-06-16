import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import profilePic from '../assets/profilePic.jpg';

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-24 pb-12 z-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Anbu Liyon</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground-muted font-light mb-8 h-[40px]">
            <Typewriter
              words={[
                'Full Stack Developer',
                'MERN Stack Engineer',
                'Node.js Backend Developer',
                'AI Builder',
                'SaaS Creator'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-lg text-foreground-muted max-w-xl mb-10 leading-relaxed">
            Building scalable web applications, automation systems, and AI-powered solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center">
              View Projects <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/src/assets/anbuliyonNewResume.pdf" download="Anbu_Liyon_Resume.pdf" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white font-medium transition-all flex items-center">
              <Download className="mr-2 w-5 h-5" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Animated rings around image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.3)] z-10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={profilePic} alt="Anbu Liyon" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;