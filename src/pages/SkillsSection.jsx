/* eslint-disable react/prop-types */
import FadeIn from '../components/FadeIn';

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 'Experienced' },
        { name: 'CSS3', level: 'Experienced' },
        { name: 'JavaScript (ES6+)', level: 'Experienced' },
        { name: 'React.js', level: 'Experienced' },
        { name: 'React Native', level: 'Beginner' },
        { name: 'Redux Toolkit', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Experienced' },
        { name: 'Bootstrap', level: 'Intermediate' },
        { name: 'Responsive Web Design', level: 'Experienced' },
        { name: 'Vite', level: 'Intermediate' },
        { name: 'Axios', level: 'Experienced' },
        { name: 'Formik', level: 'Intermediate' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Experienced' },
        { name: 'Express.js', level: 'Experienced' },
        { name: 'REST API Development', level: 'Experienced' },
        { name: 'Authentication & Authorization', level: 'Experienced' },
        { name: 'Clerk Auth', level: 'Intermediate' },
        { name: 'Socket.io', level: 'Intermediate' },
        { name: 'JWT Authentication', level: 'Experienced' },
        { name: 'MVC Architecture', level: 'Experienced' },
        { name: 'NestJS', level: 'Beginner' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 'Experienced' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'SQLite', level: 'Intermediate' },
        { name: 'Mongoose ODM', level: 'Experienced' },
        { name: 'Firebase', level: 'Intermediate' },
        { name: 'Supabase', level: 'Beginner' },
        { name: 'Neon (Postgres)', level: 'Beginner' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 'Basic' },
        { name: 'Git & GitHub', level: 'Intermediate' },
        { name: 'CI/CD Basics', level: 'Basic' },
        { name: 'Netlify Deployment', level: 'Experienced' },
        { name: 'VPS / Linux Server Basics', level: 'Basic' },
      ]
    },
    {
      title: 'Desktop & Real-Time',
      skills: [
        { name: 'Electron.js', level: 'Intermediate' },
        { name: 'Thermal Printer Integration', level: 'Intermediate' },
        { name: 'Real-Time Systems', level: 'Intermediate' },
      ]
    },
    {
      title: 'AI & Automation',
      skills: [
        { name: 'Prompt Engineering', level: 'Beginner' },
        { name: 'AI Workflow Automation', level: 'Beginner' },
        { name: 'n8n', level: 'Beginner' },
        { name: 'OpenAI API Integration', level: 'Beginner' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Postman', level: '' },
        { name: 'VS Code', level: '' },
        { name: 'Jira', level: '' },
        { name: 'Notion', level: '' },
        { name: 'Figma Basics', level: '' },
      ]
    },
    {
      title: 'Currently Learning',
      skills: [
        { name: 'Golang', level: '' },
        { name: 'Next.js', level: '' },
        { name: 'AI Orchestration', level: '' },
        { name: 'System Design', level: '' },
        { name: 'Data Structures & Algorithms', level: '' },
      ]
    }
  ];

  const SkillItem = ({ name, level }) => (
    <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default">
      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <div>
        <h3 className="font-bold text-base text-white">{name}</h3>
        {level && <p className="text-xs text-white/70">{level}</p>}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative z-10 skill">
      <div className="container mx-auto px-4">
        
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-lg text-white/70 font-medium tracking-wide">Explore My</p>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Skills & Expertise</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} direction="up" delay={0.1 + (index * 0.1)}>
              <div className="glass-card h-full group">
                <div className="card-body p-6">
                  <h3 className="card-title text-xl mb-4 text-primary group-hover:text-white transition-colors">{category.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="text-center mt-16 animate-bounce">
            <a href="#Projects" className="btn btn-circle btn-ghost text-white hover:bg-white/20 border-white/20">
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

export default SkillsSection;