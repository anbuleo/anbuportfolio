import FadeIn from '../components/FadeIn';

function TechStackShowcase() {
  return (
    <section id="tech-stack" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Technology Stack</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              The tools and technologies I use to build scalable products.
            </p>
          </div>
        </FadeIn>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Tech stack badges placeholder */}
          {['React', 'Node.js', 'Express', 'Tailwind', 'MongoDB', 'AWS', 'Docker', 'OpenAI'].map((tech) => (
            <div key={tech} className="glass-panel px-6 py-3 rounded-full text-white font-medium hover:scale-110 hover:border-primary/50 transition-all cursor-pointer">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackShowcase;
