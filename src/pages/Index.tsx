import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/home/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";



const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('scrollToTopBtn');
      if (button) {
        if (window.scrollY > 0) {
          button.classList.remove('opacity-0', 'translate-y-4');
          button.classList.add('opacity-100', 'translate-y-0');
        } else {
          button.classList.remove('opacity-100', 'translate-y-0');
          button.classList.add('opacity-0', 'translate-y-4');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="scroll-smooth">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
          
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 opacity-0 translate-y-4"
        style={{
          boxShadow: "0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(6,182,212,0.3)",
        }}
        id="scrollToTopBtn"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Index;
