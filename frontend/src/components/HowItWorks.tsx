import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, UploadCloud, PencilRuler, Printer, Package, ChevronDown } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "The Spark",
    subtitle: "Concept & Consultation",
    description: "It starts with a napkin sketch, a brand guideline, or just a crazy idea. We sit down (or Zoom) to understand your goals. Whether it's 50 shirts for a family reunion or 5,000 for a corporate rollout, we align on the vision before ink touches screen.",
    icon: Lightbulb,
    image: "../assets/vehicle.png",
    color: "bg-yellow-400"
  },
  {
    id: 2,
    title: " The Handoff",
    subtitle: "Upload & Design",
    description: "Use our streamlined portal to upload your assets. Don't have art? No problem. Our design team is ready to step in. We accept everything from vector files to 'can you make it look like this?' screenshots.",
    icon: UploadCloud,
    image: "../assets/patch.pn",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "Precision Polish",
    subtitle: "Edit & Proof",
    description: "We don't guess. We proof. Our artists refine your design for optimal printability, checking line weights, colors, and placement. You get a digital mockup to approve. Nothing goes to production until you say 'Perfect'.",
    icon: PencilRuler,
    image: "../assets/check.jpg",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Ink Meets Fabric",
    subtitle: "Production",
    description: "This is where the magic happens. Our automatic presses spin, embroidery needles dance, and wide-format printers hum. We use premium inks and state-of-the-art tech to ensure every unit looks exactly like the first.",
    icon: Printer,
    image: "../assets/print.webp",
    color: "bg-brand-cta"
  },
  {
    id: 5,
    title: "The Arrival",
    subtitle: "Delivery & Fulfillment",
    description: "Boxed, labeled, and ready to wow. Pick up locally in Lafayette or let us ship directly to your door (or your customers' doors). We double-check the count so you don't have to.",
    icon: Package,
    image: "../assets/garment.jpg",
    color: "bg-green-500"
  }
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // The section starts when the top of the container hits the top of the viewport
      // It ends when the bottom of the container hits the bottom of the viewport
      const start = containerTop;
      const end = containerTop + containerHeight - viewportHeight;
      
      // Calculate progress 0 to 1
      let progress = (scrollY - start) / (end - start);
      
      // Clamp progress
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Map progress to steps
      const index = Math.min(Math.floor(progress * steps.length), steps.length - 1);
      setActiveStep(index);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} id="process" className="relative bg-black">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-900 flex flex-col md:flex-row">
        
        {/* LEFT PANEL: Text Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-20 bg-black/90 md:bg-black border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-center px-6 md:px-20 py-10 md:py-0">
           
           {/* Section Header */}
           <div className="absolute top-6 left-6 md:left-20 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-brand-cta animate-pulse"></span>
             Our Process
           </div>

           {/* Grid Stacking for Overlapping Text - Robust Layout */}
           <div className="grid grid-cols-1 grid-rows-1 mt-8 md:mt-0">
             {steps.map((step, index) => (
               <div 
                 key={step.id} 
                 className={`col-start-1 row-start-1 transition-all duration-700 ease-out transform flex flex-col justify-center ${
                   index === activeStep 
                     ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                     : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                 }`}
               >
                 <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4 md:mb-8 shadow-2xl shadow-white/5`}>
                   <step.icon size={24} className="text-white md:w-8 md:h-8" />
                 </div>
                 
                 <h2 className="text-4xl md:text-8xl font-display font-black text-white mb-2 md:mb-4 tracking-tighter">
                   0{step.id}.
                 </h2>
                 
                 <h3 className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-4 md:mb-6">
                   {step.title}
                 </h3>
                 
                 <p className="text-sm md:text-xl text-slate-400 leading-relaxed max-w-lg">
                   {step.description}
                 </p>
               </div>
             ))}
           </div>

           {/* Progress Indicators */}
           <div className="absolute left-0 bottom-0 w-full md:hidden h-1 bg-slate-800">
              <div 
                className="h-full bg-brand-cta transition-all duration-300"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
           </div>
           
           <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-slate-800">
             <div 
                className="w-full bg-brand-cta transition-all duration-500 ease-out"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%`, top: 0, position: 'absolute' }}
             ></div>
           </div>
        </div>

        {/* RIGHT PANEL: Visuals */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-slate-900">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeStep ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={step.image} 
                alt={step.title}
                className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                   index === activeStep ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-90"></div>
              
              {/* Floating detail tag */}
              <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
                 <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-1">{step.subtitle}</p>
                 <div className="h-px w-12 md:w-20 bg-white/50 ml-auto"></div>
              </div>
            </div>
          ))}

          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-20"></div>
        </div>
      </div>

      {/* Spacer Element - Controls the scroll length */}
      {/* 400vh means the user has to scroll 4 screen heights to get through the section */}
      <div className="h-[400vh] w-full bg-black"></div>
      
    </div>
  );
};
