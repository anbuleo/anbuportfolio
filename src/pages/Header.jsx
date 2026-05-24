import { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 w-full md:w-auto rounded-full glass-panel flex items-center justify-between px-6 py-3 ${
          scrolled ? 'shadow-lg border-white/20' : 'border-transparent shadow-none'
        }`}
      >
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
            Anbu Liyon
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex ml-8">
          <ul className="flex items-center gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white/80 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all px-2 py-1 rounded-md">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-4">
          <button className="btn btn-square btn-ghost btn-sm text-white" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-[80px] left-4 right-4 md:hidden glass-panel rounded-2xl shadow-xl border border-white/10 overflow-hidden">
          <ul className="flex flex-col text-center text-lg py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/5 last:border-none">
                <a 
                  href={link.href} 
                  className="block py-3 text-white/90 hover:text-primary hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;