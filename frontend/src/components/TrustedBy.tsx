import React, { useEffect, useRef, useState } from 'react';
import arconicLogo from '../assets/sponsors/arconic-logo.png';
import caterpillarLogo from '../assets/sponsors/caterpillar-logo.png';
import cniLogo from '../assets/sponsors/cni-logo.png';
import nucorLogo from '../assets/sponsors/nucor-logo.png';
import purdueLogo from '../assets/sponsors/purdue-logo.png';
import siaLogo from '../assets/sponsors/SIA-Logo.png';
import vanguardLogo from '../assets/sponsors/Vanguard-logo.png';
import wabashLogo from '../assets/sponsors/wabash-logo.png';

const sponsorLogos = [
  { name: 'Arconic', image: arconicLogo },
  { name: 'Caterpillar', image: caterpillarLogo },
  { name: 'CNH Industrial', image: cniLogo },
  { name: 'Nucor', image: nucorLogo },
  { name: 'Purdue University', image: purdueLogo },
  { name: 'Subaru (SIA)', image: siaLogo },
  { name: 'Vanguard', image: vanguardLogo },
  { name: 'Wabash National', image: wabashLogo },
];

export const TrustedBy: React.FC = () => {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 relative overflow-hidden border-y border-slate-800">
      {/* Background Texture - Dark Fabric Feel */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1599839569649-65615797364b?q=80&w=2000&auto=format&fit=crop" 
          alt="Dark Fabric Texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
      </div>
      
      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10 pointer-events-none"></div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center mb-12 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-brand-cta font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
          Our Customers
        </h2>
        <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
          Over <span className="text-brand-blue">30,000 customers</span> trust<br/> Freckles Graphics.
        </p>
      </div>

      {/* Sponsor Logo Marquee */}
      <div className={`relative z-20 flex overflow-x-hidden mt-10 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {[1, 2].map((row) => (
          <div
            key={`marquee-row-${row}`}
            className={`whitespace-nowrap flex items-center gap-8 md:gap-16 px-12 ${row === 1 ? 'animate-marquee' : 'animate-marquee2 absolute top-0'}`}
          >
            {[...Array(4)].flatMap((_, repeatIndex) =>
              sponsorLogos.map((sponsor, index) => (
                <div
                  key={`marquee-${row}-${sponsor.name}-${repeatIndex}-${index}`}
                  className="h-20 w-44 md:w-52 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm px-4"
                >
                  <img
                    src={sponsor.image}
                    alt={`${sponsor.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
