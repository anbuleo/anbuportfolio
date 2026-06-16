import FadeIn from '../components/FadeIn';

function AiInnovationSection() {
  return (
    <section id="ai-innovation" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AI & Innovation</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              Exploring the boundaries of automation, LLM integrations, and intelligent workflows.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="glass-card p-8 h-full border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Workflow Automation</h3>
              <p className="text-foreground-muted leading-relaxed">
                Building robust automated pipelines using tools like n8n and Make.com. Connecting disparate APIs to create seamless, zero-touch operational workflows that save hundreds of hours.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="glass-card p-8 h-full border border-white/5 hover:border-secondary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">LLM Integration</h3>
              <p className="text-foreground-muted leading-relaxed">
                Integrating OpenAI and other leading language models into full-stack JavaScript applications. Creating intelligent chat interfaces, automated summarization, and dynamic content generation.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="glass-card p-8 h-full border border-white/5 hover:border-accent/50 transition-colors group">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">RAG Architecture</h3>
              <p className="text-foreground-muted leading-relaxed">
                Developing Retrieval-Augmented Generation (RAG) systems with vector databases. Enabling AI models to securely query and reason over private corporate data and documents.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default AiInnovationSection;
