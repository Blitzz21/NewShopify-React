import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import frecklesLogo from '../assets/freckles-logo-c.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Catalogs', href: '#', external: true },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6 pt-4 md:pt-6`}
      >
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg py-3 px-6' 
            : 'bg-transparent py-4 px-0'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <a href="#" className="flex items-center gap-3">
                <img
                  src={frecklesLogo}
                  alt="Freckles Graphics logo"
                  className="h-10 w-auto drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <nav className="flex bg-white/50 backdrop-blur-sm rounded-full px-2 py-1 border border-slate-100 mr-4 shadow-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className="px-5 py-2 text-slate-600 hover:text-black font-medium text-sm transition-all hover:bg-white hover:shadow-sm rounded-full"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              <a href="tel:7654498463" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-brand-blue hover:text-white transition-colors mr-2">
                <Phone size={18} />
              </a>
              
              <a
                href="#contact"
                className="bg-black hover:bg-brand-cta text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Get Quote</span>
                <div className="w-1.5 h-1.5 bg-brand-cta rounded-full animate-pulse"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="#contact"
                className="bg-black text-white px-4 py-2 rounded-full font-bold text-xs"
              >
                Quote
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white p-2 rounded-full shadow-sm text-slate-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} pt-24 px-6 md:hidden`}>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-display font-bold text-slate-900 hover:text-brand-cta transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-4"></div>
          <p className="text-slate-400 text-sm uppercase tracking-widest">Get in touch</p>
          <a href="tel:7654498463" className="text-2xl font-bold text-slate-800">765.449.8463</a>
          <a href="mailto:info@frecklesgraphics.com" className="text-xl font-medium text-slate-600">info@frecklesgraphics.com</a>
        </div>
      </div>
    </>
  );
};
