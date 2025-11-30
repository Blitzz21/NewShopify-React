import React, { useEffect, useRef, useState } from 'react';
import { Clock, ShieldCheck, MapPin, Award } from 'lucide-react';

export const Features: React.FC = () => {
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

  const features = [
    {
      icon: Clock,
      title: "Speedy Turnaround",
      desc: "In-house production means we control the timeline. We hit deadlines that others can't."
    },
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      desc: "We use only the highest grade inks and materials. Your brand deserves to look expensive."
    },
    {
      icon: MapPin,
      title: "Lafayette Local",
      desc: "Community rooted since 1994. Real people, real handshake deals, real results."
    },
    {
      icon: Award,
      title: "Design Mastery",
      desc: "Our art department doesn't just 'fix files', we elevate your entire visual identity."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className={`mb-16 md:flex md:justify-between md:items-end border-b border-slate-100 pb-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <h2 className="text-brand-cta font-bold tracking-widest uppercase text-sm mb-2">Why Choose Freckles</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              We Don't Just Print.<br/>We Partner.
            </h3>
          </div>
          <p className="mt-4 md:mt-0 text-slate-500 max-w-sm">
            Experience the difference of a print shop that cares about your ROI as much as you do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`bg-white p-10 hover:bg-slate-50 transition-all duration-700 ease-out group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};