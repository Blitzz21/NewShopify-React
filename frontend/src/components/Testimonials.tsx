import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Samantha Cerceo",
    role: "North Mechanical",
    quote: "Freckles has been a fabulous vendor to work with! Natalie always goes above and beyond to meet our deadlines, gets information to us quickly, and is great with communication no matter the day or time! Our products always look amazing when we receive them."
  },
  {
    id: 2,
    name: "Brandon Schlick",
    role: "Norfolk Admirals",
    quote: "Freckles have been a dream to work with since day one! The combination of their friendly staff, quick turnaround times, and competitive pricing has proven to be a winning recipe. With their help, we’ve been able to provide stylish, quality merchandise."
  },
  {
    id: 3,
    name: "Kris Argo",
    role: "Faith Ministries",
    quote: "For several years now Freckles Graphics has been a reliable source for FCS in all our uniform and branding needs. Their staff is always helpful in the process. If you need it, Freckles can deliver projects to meet our needs precisely and efficiently."
  },
  {
    id: 4,
    name: "Ryan Walden",
    role: "McCutcheon Athletics",
    quote: "Freckles Graphics' customer service is second to none. The job is not complete until the customer is 100% satisfied. What draws me most towards partnering with Freckles is their constant desire to diversify what they can offer."
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cta/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`flex flex-col md:flex-row justify-between items-end mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-brand-cta font-bold tracking-widest uppercase text-sm mb-3">
              Client Stories
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">
              Trusted by the Best
            </h3>
            <p className="text-slate-500 text-lg">
              We build relationships, not just orders.
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-xl border border-slate-100 relative group overflow-hidden flex flex-col items-center text-center">
                  <div className="absolute top-0 right-0 p-12 opacity-5 text-brand-blue transform group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                    <Quote size={120} />
                  </div>

                  <div className="relative z-10 w-full max-w-4xl mx-auto">
                    
                    <div className="flex justify-center mb-8 gap-1">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} size={24} className="text-yellow-400 fill-current" />
                         ))}
                    </div>

                    <blockquote className="text-xl md:text-3xl font-display font-medium text-slate-900 leading-snug mb-8">
                       "{testimonial.quote}"
                    </blockquote>
                     
                    <div>
                       <div className="text-lg font-bold text-slate-900">{testimonial.name}</div>
                       <div className="text-brand-cta font-bold uppercase tracking-widest text-xs mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2 md:hidden">
           {testimonials.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrent(idx)}
               className={`w-3 h-3 rounded-full transition-all duration-300 ${
                 current === idx ? 'bg-brand-cta w-8' : 'bg-slate-300'
               }`}
             />
           ))}
        </div>

      </div>
    </section>
  );
};