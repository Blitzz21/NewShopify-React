import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
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
    <section ref={sectionRef} id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Media Side - Creative layout */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                <iframe
                  title="Freckles Graphics showcase"
                  src="https://www.youtube.com/embed/haLV7uOuWa4?rel=0&modestbranding=1"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            
            {/* Floating Text Element */}
            <div className="absolute -bottom-40 -left-10 z-20 bg-brand-blue p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl hidden md:block">
              <p className="text-6xl font-display font-black text-white leading-none">30+</p>
              <p className="text-blue-200 font-bold tracking-widest uppercase text-sm mt-2">Years of Excellence</p>
            </div>
            
            {/* Pattern */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/cross-stripes.png')] opacity-20 z-0"></div>
          </div>

          {/* Content Side */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4">The Freckles Story</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[0.9]">
              LOCAL ROOTS,<br/>
              <span className="text-brand-blue">GLOBAL STANDARDS.</span>
            </h3>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                What started in 1994 as a passion for print has evolved into Lafayette's most trusted production house. We aren't a faceless internet giant; we are craftsmen.
              </p>
              <p>
                Every squeegee pull, every stitch, and every pixel is inspected by a human who cares about your brand as much as you do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "In-House Production",
                "Fast Turnaround",
                "Design Assistance",
                "Bulk Pricing"
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CheckCircle2 className="text-green-600" size={16} />
                  </div>
                  <span className="text-slate-900 font-bold">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="group inline-flex items-center text-lg font-bold text-slate-900 border-b-2 border-black pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors">
              Learn More <span className="ml-2 group-hover:ml-4 transition-all">&rarr;</span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};
