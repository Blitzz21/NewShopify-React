import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10
        y: (e.clientY / window.innerHeight - 0.5) * 20, // -10 to 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#e8e8e3] overflow-hidden flex flex-col justify-center pt-20">
      
      {/* Background Texture & Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}></div>
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
        backgroundSize: '80px 80px' 
      }}></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 h-full flex flex-col justify-center min-h-[70vh]">
        
        {/* Top Meta Info */}
        <div className={`absolute top-0 left-4 right-4 md:left-8 md:right-8 py-4 hidden md:flex justify-between items-end text-xs font-bold uppercase tracking-widest text-slate-500 pointer-events-none transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col gap-1">
            <span>Est. 1994</span>
            <span>Lafayette, IN</span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span>Custom Print</span>
            <span>Production House</span>
          </div>
        </div>

        {/* Main Kinetic Typography Layout */}
        <div className="relative flex flex-col items-center justify-center w-full">
          
          {/* Top Text Layer */}
          <h1 className={`text-[12vw] md:text-[13vw] font-display font-black leading-none tracking-tighter text-slate-900 relative z-30 mb-2 md:mb-4 select-none transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
            <span className="block" style={{ transform: `translateX(${mousePos.x * -1.5}px)` }}>CRAFTING</span>
          </h1>

          {/* Bottom Text Layer */}
          <h1 className={`text-[12vw] md:text-[13vw] font-display font-black leading-none tracking-tighter relative z-30 select-none mt-2 md:mt-4 transition-all duration-1000 delay-150 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cta to-purple-600" style={{ transform: `translateX(${mousePos.x * 1.5}px)` }}>
              LEGACY
            </span>
          </h1>

          {/* Call to Action - Centered Button */}
          <div className={`relative z-40 mt-12 md:mt-16 transition-all duration-1000 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
             <a href="#contact" className="group flex items-center justify-center px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-brand-cta transition-all text-lg md:text-xl shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
               Start Project
               <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
             </a>
          </div>

        </div>
        
        {/* Barcode */}
         <div className={`absolute top-1/4 right-8 hidden lg:flex flex-col items-center mix-blend-multiply z-0 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-40' : 'opacity-0'}`}>
           <div className="flex gap-1 h-16 items-end">
             {[...Array(16)].map((_, i) => (
               <div key={i} className={`bg-slate-900 w-${Math.random() > 0.5 ? '1' : '2'} h-${Math.floor(Math.random() * 80) + 20}%`}></div>
             ))}
           </div>
           <span className="text-[10px] font-mono tracking-widest mt-2 -rotate-90 origin-center translate-y-4">LFA-94</span>
        </div>

      </div>
    </div>
  );
};