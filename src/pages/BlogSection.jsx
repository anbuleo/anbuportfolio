import FadeIn from '../components/FadeIn';
import { ArrowRight } from 'lucide-react';

function BlogSection() {
  const posts = [
    {
      title: 'Building Scalable MERN Applications',
      excerpt: 'Learn the architecture patterns that scale to millions of users.',
      category: 'Architecture',
      readTime: '5 min read'
    },
    {
      title: 'Automating Workflows with n8n & LLMs',
      excerpt: 'How to build an AI workforce using open-source automation tools.',
      category: 'AI Automation',
      readTime: '8 min read'
    },
    {
      title: 'Node.js Microservices vs Monoliths',
      excerpt: 'A deep dive into backend architecture and scaling strategies.',
      category: 'Backend',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-4xl font-bold text-white">Latest Insights</h2>
              <p className="mt-2 text-foreground-muted">Thoughts on software engineering and AI.</p>
            </div>
            <button className="hidden md:flex items-center text-primary hover:text-primary-light transition-colors group">
              View all posts <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="glass-card p-6 h-full flex flex-col group cursor-pointer">
                <div className="text-xs font-bold text-secondary tracking-wider uppercase mb-4">{post.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-foreground-muted mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-foreground-muted border-t border-white/10 pt-4 mt-auto">
                  <span>{post.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
