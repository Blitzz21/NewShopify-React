import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Clock } from 'lucide-react';
import frecklesLogo from '../assets/freckles-logo-c.png';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-white pt-10 pb-8 border-t border-slate-100">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
                <img
                  src={frecklesLogo}
                  alt="Freckles Graphics logo"
                  className="h-10 w-auto drop-shadow"
                />
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-black hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-black hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-black hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
                <h4 className="font-bold text-slate-900 mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                    <li><a href="#" className="hover:text-brand-blue transition-colors">Apparel</a></li>
                    <li><a href="#" className="hover:text-brand-blue transition-colors">Signage</a></li>
                    <li><a href="#" className="hover:text-brand-blue transition-colors">Promotional</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                    <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
                </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
                 <h4 className="font-bold text-slate-900 mb-4">Visit Us</h4>
                 <div className="flex items-start gap-3 text-slate-500 text-sm">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <p>3835 Fortune Dr.<br />Lafayette, IN 47905</p>
                 </div>
                 <div className="flex items-center gap-3 text-slate-500 text-sm mt-2">
                    <Clock size={16} className="flex-shrink-0" />
                    <p>Mon - Fri: 8:30 - 5:30</p>
                 </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 pt-8 border-t border-slate-100">
          <p>&copy; {new Date().getFullYear()} Freckles Graphics, Inc.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
