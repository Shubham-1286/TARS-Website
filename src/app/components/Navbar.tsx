import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Rover', href: '#rover' },
    { name: 'Depts', href: '#departments' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060d1f]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(88,28,135,0.15)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-press-start text-xl tracking-widest text-white hover:text-gray-300 transition-colors">
          &gt;_TARS
        </a>
        
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-press-start text-xs uppercase hover:bg-white/10 hover:text-white px-3 py-2 transition-colors border-2 border-transparent hover:border-white/20 rounded-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button could go here, omitting for simplicity unless requested */}
      </div>
    </nav>
  );
}
