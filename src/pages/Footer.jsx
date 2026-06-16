import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from '../components/Icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 backdrop-blur-xl pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 inline-block">
              Anbu.dev
            </a>
            <p className="text-foreground-muted max-w-sm">
              Building the future of web applications with modern architecture, elegant design, and artificial intelligence.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#journey" className="text-foreground-muted hover:text-primary transition-colors">Journey</a></li>
              <li><a href="#projects" className="text-foreground-muted hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-foreground-muted hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#services" className="text-foreground-muted hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/anbuleo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground-muted hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/anbuliyon" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground-muted hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground-muted hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-foreground-muted">
          <p>© {currentYear} Anbu Liyon. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;