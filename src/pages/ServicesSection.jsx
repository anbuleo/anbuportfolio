import FadeIn from '../components/FadeIn';
import { Code, Server, Cpu, Database, Cloud, Zap } from 'lucide-react';

function ServicesSection() {
  const services = [
    { icon: <Code className="w-8 h-8 text-primary" />, title: 'Full Stack Development', desc: 'End-to-end web applications built with modern frameworks.' },
    { icon: <Server className="w-8 h-8 text-secondary" />, title: 'Node.js Backend Systems', desc: 'Scalable and robust enterprise backend architectures built on JS.' },
    { icon: <Cpu className="w-8 h-8 text-accent" />, title: 'AI & Automation', desc: 'Integrating LLMs, RAG, and workflow automation (n8n).' },
    { icon: <Database className="w-8 h-8 text-primary-light" />, title: 'SaaS Architecture', desc: 'Multi-tenant systems built for scale and high performance.' },
    { icon: <Cloud className="w-8 h-8 text-secondary-light" />, title: 'Cloud & DevOps', desc: 'Deployment, CI/CD, and infrastructure on AWS & Docker.' },
    { icon: <Zap className="w-8 h-8 text-accent" />, title: 'API Engineering', desc: 'RESTful and GraphQL API design for seamless integrations.' }
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Services & Expertise</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              Delivering production-grade software solutions for startups and enterprises.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col items-start group">
                <div className="p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
