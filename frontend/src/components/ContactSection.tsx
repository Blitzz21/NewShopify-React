import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
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
    <section ref={sectionRef} id="contact" className="relative bg-white py-24 px-4 overflow-hidden">
        <div className={`max-w-7xl mx-auto rounded-[3rem] bg-slate-900 text-white overflow-hidden relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Info */}
            <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-between relative z-10">
              <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h2 className="text-brand-cta font-bold tracking-widest uppercase text-sm mb-4">Let's Create</h2>
                <h3 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
                  Got an Idea?<br/>Let's Print It.
                </h3>
                <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
                  We simplify the chaos of custom ordering. Tell us what you need, and we'll handle the logistics, design, and production.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">Call Us</p>
                      <p className="text-xl font-bold font-display">765.449.8463</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">Email Us</p>
                      <p className="text-xl font-bold font-display">info@frecklesgraphics.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">Visit Shop</p>
                      <p className="text-xl font-bold font-display">3835 Fortune Dr, Lafayette, IN</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`mt-12 lg:mt-0 pt-12 border-t border-slate-800 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-slate-500 text-sm">
                  &copy; {new Date().getFullYear()} Freckles Graphics, Inc.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className={`bg-slate-800/50 p-12 md:p-16 lg:p-20 relative transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-blue transition-colors">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-slate-600 py-3 text-xl font-display font-bold text-white focus:outline-none focus:border-brand-blue transition-colors placeholder-slate-700" placeholder="Jane Doe" />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-blue transition-colors">Company</label>
                    <input type="text" className="w-full bg-transparent border-b border-slate-600 py-3 text-xl font-display font-bold text-white focus:outline-none focus:border-brand-blue transition-colors placeholder-slate-700" placeholder="Brand Inc." />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-blue transition-colors">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-slate-600 py-3 text-xl font-display font-bold text-white focus:outline-none focus:border-brand-blue transition-colors placeholder-slate-700" placeholder="jane@example.com" />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-blue transition-colors">Project Details</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-slate-600 py-3 text-xl font-medium text-white focus:outline-none focus:border-brand-blue transition-colors placeholder-slate-700 resize-none" placeholder="I need 50 t-shirts for..."></textarea>
                </div>

                <div className="pt-6">
                  <button type="button" className="w-full bg-brand-cta hover:bg-orange-600 text-white font-black text-lg py-5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex justify-center items-center gap-3">
                    SEND REQUEST
                    <Send size={20} />
                  </button>
                  <p className="text-center text-slate-500 text-xs mt-4">No commitment required. We'll get back to you within 24hrs.</p>
                </div>
              </form>
            </div>

          </div>
        </div>
    </section>
  );
};