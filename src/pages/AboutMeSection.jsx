import { useState } from 'react';
import FadeIn from '../components/FadeIn';

function AboutMeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-lg text-white/70 font-medium tracking-wide">Get To Know More</p>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">About Me</h2>
          </div>
        </FadeIn>

        {/* Unified Journey Card */}
        <FadeIn direction="up" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card relative overflow-hidden group">
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="card-body p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-primary drop-shadow-sm flex items-center gap-3">
                  <i className="fa-solid fa-route text-2xl"></i>
                  My Journey
                </h3>
                
                <p className="text-white/80 text-justify md:text-lg leading-relaxed mb-4 font-light">
                  I am a Full Stack MERN Developer passionate about building scalable web, desktop, and real-time applications. Over time, I have expanded beyond core MERN development into SaaS platforms, service-based applications, AI integrations, automation workflows, and business management systems.
                </p>
                
                <p className="text-white/80 text-justify md:text-lg leading-relaxed mb-4 font-light">
                  My experience includes developing complete end-to-end applications using React.js, Node.js, Express.js, and MongoDB, along with building RESTful APIs, authentication systems, role-based access control, real-time communication systems using Socket.io, and scalable backend architectures following the MVC pattern.
                </p>

                {isExpanded && (
                  <div className="animate-fade-in transition-all duration-500">
                    <p className="text-white/80 text-justify md:text-lg leading-relaxed mb-4 font-light">
                      I have worked on multiple real-world projects including service booking platforms, cab booking systems, survey management applications, billing and inventory systems, reporting dashboards, desktop applications with Electron.js, and multi-tenant SaaS products. I also have experience integrating thermal printers, payment-related workflows, WhatsApp notifications, and dynamic reporting systems.
                    </p>
                    <p className="text-white/80 text-justify md:text-lg leading-relaxed font-light">
                      On the frontend, I focus on creating highly responsive, interactive, and user-friendly interfaces using React.js, Redux Toolkit, Tailwind CSS, and modern UI libraries. On the backend, I ensure system stability, database optimization, and secure API integrations. Currently, I am also exploring enterprise-level backend development using Java and Spring Boot, as well as AI-powered automation to further enhance business applications.
                    </p>
                  </div>
                )}

                <div className="card-actions justify-center mt-8">
                  <button 
                    className="btn btn-outline text-primary hover:bg-primary hover:border-primary border-primary/50 rounded-full px-8 transition-all duration-300"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : 'View More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-16 animate-bounce">
            <a href="#education" className="btn btn-circle btn-ghost text-white hover:bg-white/20 border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default AboutMeSection;