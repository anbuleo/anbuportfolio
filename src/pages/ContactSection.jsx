import FadeIn from '../components/FadeIn';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Get In Touch</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's build something amazing together.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <FadeIn direction="right" delay={0.1}>
              <div className="glass-card p-6 flex items-start group">
                <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:anbuliyon@gmail.com" className="text-foreground-muted hover:text-primary transition-colors">
                    anbuliyon@gmail.com
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="glass-card p-6 flex items-start group">
                <div className="p-3 bg-secondary/10 rounded-xl mr-4 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-foreground-muted">9003241548</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="glass-card p-6 flex items-start group">
                <div className="p-3 bg-accent/10 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-foreground-muted">Dharapuram, India</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <FadeIn direction="left" delay={0.2}>
              <div className="glass-card p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground-muted">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground-muted">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-muted">Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-muted">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] group">
                    Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;