
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 glass-panel border-t border-white/20 relative z-10 text-white">
      <nav className="grid grid-flow-col gap-4 text-lg">
        <a href="#about" className="link link-hover hover:text-primary">About</a>
        <a href="#skills" className="link link-hover hover:text-primary">Skills</a>
        <a href="#Projects" className="link link-hover hover:text-primary">Projects</a>
        <a href="#contact" className="link link-hover hover:text-primary">Contact</a>
      </nav> 
      <aside>
        <p className="font-medium text-white/70">
          Copyright © {currentYear} - Anbu Liyon. All right reserved.
        </p>
      </aside>
    </footer>
  );
}

export default Footer;