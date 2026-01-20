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

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      style={{
        boxShadow: "0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(6,182,212,0.3)",
      }}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

const Index = () => {
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
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
