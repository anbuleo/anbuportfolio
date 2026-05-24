import FadeIn from '../components/FadeIn';

function EducationSection() {
  const educationData = [
    {
      degree: "MCA. Master of Computer Applications",
      institution: "Bharathidasan University",
      status: "Pursuing",
      type: "Postgraduate Degree"
    },
    {
      degree: "MERN Stack Development",
      institution: "GUVI",
      status: "Completed",
      type: "Professional Certification"
    },
    {
      degree: "BBA. Bachelors of Business Administration",
      institution: "RVS CAS Sulur",
      status: "Completed",
      type: "Undergraduate Degree"
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-lg text-white/70 font-medium tracking-wide">Academic Background</p>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Education</h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {educationData.map((edu, index) => (
              <FadeIn key={index} direction="up" delay={0.2 + (index * 0.1)}>
                <div className="glass-card flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border-l-4 border-l-primary group">
                  <div className="mb-4 md:mb-0">
                    <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-1">{edu.type}</p>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-white/70 flex items-center gap-2 text-lg">
                      <i className="fa-solid fa-building-columns"></i>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className={`badge badge-lg border-none font-medium px-4 py-3 ${edu.status === 'Completed' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="text-center mt-16 animate-bounce">
            <a href="#skills" className="btn btn-circle btn-ghost text-white hover:bg-white/20 border-white/20">
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

export default EducationSection;
