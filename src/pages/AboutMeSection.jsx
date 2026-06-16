import FadeIn from '../components/FadeIn';
import { User, Code, Server, Lightbulb, Brain } from 'lucide-react';

function AboutMeSection() {
  const coreCompetencies = [
    {
      title: 'Frontend Engineering',
      desc: 'Crafting responsive, beautiful user interfaces using React, Tailwind CSS, and Framer Motion.',
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: 'Backend Architecture',
      desc: 'Building scalable APIs and real-time systems using Node.js, Express, and Socket.io.',
      icon: <Server className="w-6 h-6 text-secondary" />
    },
    {
      title: 'Business Acumen',
      desc: 'Leveraging my BBA background to align technical solutions with core business goals.',
      icon: <Lightbulb className="w-6 h-6 text-accent" />
    },
    {
      title: 'AI & Automation',
      desc: 'Exploring LLM integrations and automated workflows to build next-generation applications.',
      icon: <Brain className="w-6 h-6 text-primary-light" />
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
            <p className="mt-4 text-foreground-muted text-lg">Bridging business logic with clean code</p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="glass-card p-8 mb-12 border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-colors">
             {/* Decorative background element */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
             
             <div className="relative z-10">
               <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
                 Building scalable products, leading teams, and turning ideas into reality.
               </h3>
               <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                 I am a <span className="text-white font-semibold">Tech Lead and Full Stack Engineer</span> passionate about building scalable software products, high-performance backend systems, and modern AI-powered applications. With a strong foundation in both technology and business, I focus on creating solutions that not only work efficiently but also deliver measurable value to users and organizations.
               </p>
               <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                 Over the years, I have led development teams, architected end-to-end web applications, and delivered production-ready solutions using <span className="text-secondary font-semibold">React, Node.js, MongoDB, and cloud technologies</span>. My experience spans product development, system design, API architecture, real-time applications, automation workflows, and SaaS platforms.
               </p>
               <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                 Beyond development, I enjoy mentoring developers, improving engineering processes, and driving technical decisions that help teams build faster and scale confidently.
               </p>
               <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                 Currently, I am focused on <span className="text-primary font-semibold">AI-powered systems, agentic workflows, LLM integrations</span>, cloud-native architectures, and next-generation SaaS products that combine automation, intelligence, and exceptional user experiences.
               </p>
               <p className="text-lg text-foreground-muted leading-relaxed">
                 When I'm not building software, I'm exploring emerging technologies, experimenting with AI solutions, and continuously learning new ways to create impactful digital products.
               </p>
             </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCompetencies.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <div className="glass-card p-6 border border-white/5 group hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="mb-4 p-3 bg-white/5 rounded-xl inline-flex w-fit group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;