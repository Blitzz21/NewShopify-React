import React, { useEffect, useRef, useState } from 'react';
import Garment from '../assets/garment.jpg';
import Patch from '../assets/patch.png';
import Emboss from '../assets/emboss.jpg';
import Vehicle from '../assets/vehicle.png';
import Drinkware from '../assets/drinkware.jpg';
import Signage from '../assets/sign.jpg';
import { ArrowUpRight } from 'lucide-react';


const servicesData = [
  {
    title: "Garment Printing",
    description: "High-quality screen printing and all-over printing for vibrant, durable designs on shirts, hoodies, and uniforms.",
    image: Garment,
  },
  {
    title: "Custom Patches",
    description: "Detailed leather, woven, or embroidered patches. Perfect for hats, jackets, and bags to add a distinctive, premium touch.",
    image: Patch,
  },
  {
    title: "Custom Embossing",
    description: "Elegant embossing to add texture and sophistication to apparel and materials. A subtle, high-end branding technique.",
    image: Emboss,
  },
  {
    title: "Vehicle Graphics",
    description: "Turn your fleet into mobile billboards. From full wraps to simple decals, we make sure your brand drives business.",
    image: Vehicle,
  },
  {
    title: "Custom Drinkware",
    description: "Branded mugs, tumblers, and bottles with seamless prints. The perfect corporate gift or merchandise item.",
    image: Drinkware,
  },
  {
    title: "Custom Signs",
    description: "Eye-catching signage for storefronts, events, and trade shows. Durable materials tailored to your exact specifications.",
    image: Signage,
  }
];

export const Services: React.FC = () => {
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
    <section ref={sectionRef} id="services" className="pt-24 bg-[#0f1115] text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">What We Do Best</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white leading-none mb-6">
              POPULAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cta to-purple-600">SERVICES</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-xl">
              While we offer over 20 unique printing solutions, these are the customer favorites that put us on the map.
            </p>
          </div>
          <a href="https://www.companycasuals.com/FrecklesGraphics/start.jsp" target="_blank" className="hidden md:inline-flex group items-center px-6 py-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold mt-6 md:mt-0 backdrop-blur-sm border border-white/10">
            View Full Catalog <ArrowUpRight size={18} className="ml-2 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group relative h-96 rounded-[2rem] overflow-hidden bg-slate-800 border border-slate-700 hover:border-brand-blue/50 transition-all duration-700 ease-out cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 transform isolate ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              
              {/* Background Image - With explicit z-index to stay below content */}
              <div className="absolute inset-0 w-full h-full bg-slate-900 z-0">
                 <img 
                   src={service.image} 
                   className="w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform" 
                   alt={service.title} 
                 />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                <ArrowUpRight className="text-white" size={20} />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                <h4 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h4>
                
                {/* Smooth max-height transition for text reveal */}
                <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                   <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-2">
                     {service.description}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center md:hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="https://www.companycasuals.com/FrecklesGraphics/start.jsp" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full w-full">
            View Full Catalog
          </a>
        </div>
      </div>

      {/* Infinite Marquee - Placed at the bottom */}
      <div className={`relative flex overflow-x-hidden bg-[#0f1115] text-white py-6 md:py-10 border-t border-slate-800 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mx-4 opacity-30 hover:opacity-100 transition-opacity">Screen Printing • Embroidery • Vehicle Wraps • Signage • Promo Items •</span>
          <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mx-4 opacity-30 hover:opacity-100 transition-opacity">Screen Printing • Embroidery • Vehicle Wraps • Signage • Promo Items •</span>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-6 md:py-10">
          <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mx-4 opacity-30 hover:opacity-100 transition-opacity">Screen Printing • Embroidery • Vehicle Wraps • Signage • Promo Items •</span>
          <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mx-4 opacity-30 hover:opacity-100 transition-opacity">Screen Printing • Embroidery • Vehicle Wraps • Signage • Promo Items •</span>
        </div>
      </div>
    </section>
  );
};
