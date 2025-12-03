import React from 'react';
import { Navbar } from '../components/Navbar';
import { PrintBuilder } from '../components/PrintBuilder';
import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-cta selection:text-white">
      <Navbar />
      <main>
        <PrintBuilder />
        <Hero />
        <Features />
        <TrustedBy />
        <Services />
        <HowItWorks />
        <About />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
