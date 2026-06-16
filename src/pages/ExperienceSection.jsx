import FadeIn from '../components/FadeIn';
import { Briefcase } from 'lucide-react';

function ExperienceSection() {
  const experiences = [
    {
      role: 'Tech Lead & Full Stack Engineer',
      company: 'SaaS & AI-Powered Applications',
      period: '2024 - Present',
      desc: 'Leading development teams to architect and deliver scalable SaaS platforms and real-time systems. Driving engineering best practices, system design, and the integration of modern AI/LLM capabilities.'
    },
    {
      role: 'MERN Stack Developer (Trainee)',
      company: 'GUVI',
      period: '2023 - 2024',
      desc: 'Mastered frontend and backend development. Built a real-time Chat App using Socket.io and an OTP Manager demonstrating robust security practices.'
    },
    {
      role: 'Business & Project Management',
      company: 'Freelance / Academic',
      period: 'Pre - 2023',
      desc: 'Leveraged BBA background for project management, requirement analysis, and quality assurance to deliver user-centric experiences.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Experience</h2>
            <p className="mt-4 text-foreground-muted text-lg">My professional and project experience</p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8 items-center">
                  <div className="hidden md:block col-span-1 text-right">
                    <span className="text-foreground-muted font-mono">{exp.period}</span>
                  </div>
                  <div className="col-span-4 relative glass-card p-6 border-l-4 border-l-primary group">
                    <div className="absolute left-[-42px] md:left-[-24px] top-6 w-8 h-8 rounded-full bg-background border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)] z-10">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div className="md:hidden text-primary text-sm font-mono mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-secondary mb-3">{exp.company}</h4>
                    <p className="text-foreground-muted">{exp.desc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
