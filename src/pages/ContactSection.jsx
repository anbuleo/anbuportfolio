import FadeIn from '../components/FadeIn';

function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <FadeIn direction="up" delay={0.1}>
          <p className="text-lg text-white/70 font-medium tracking-wide">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-12 text-white">Contact Me</h2>
        </FadeIn>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <FadeIn direction="right" delay={0.2}>
            <a 
              href="mailto:anbuliyon@gmail.com" 
              className="flex items-center gap-3 px-8 py-5 glass-card hover:bg-white/10 w-full md:w-auto hover:scale-105 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-medium text-white/90">anbuliyon@gmail.com</span>
            </a>
          </FadeIn>

          {/* LinkedIn */}
          <FadeIn direction="left" delay={0.3}>
            <a 
              href="https://www.linkedin.com/in/anbu-liyon-068352284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-5 glass-card hover:bg-white/10 w-full md:w-auto hover:scale-105 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-lg font-medium text-white/90">LinkedIn</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;