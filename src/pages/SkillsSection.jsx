import FadeIn from '../components/FadeIn';

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Zustand']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Socket.io', 'RESTful APIs']
    },
    {
      title: 'Database & Tools',
      skills: ['MongoDB', 'MySQL', 'Git']
    },
    {
      title: 'Functional Skills',
      skills: ['Project Management', 'Requirement Analysis', 'UX Design', 'Quality Assurance']
    },
    {
      title: 'Soft Skills',
      skills: ['Collaboration', 'Problem-Solving', 'Time Management', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Core Competencies</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              Technologies and skills I use to bring ideas to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-foreground-muted text-sm font-medium hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;