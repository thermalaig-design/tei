import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Rocket, Zap, Star, ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useMemo } from "react";

const FloatingParticle = ({ delay, duration, x, y, color }: { delay: number; duration: number; x: number; y: number; color: string }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: color,
      boxShadow: `0 0 20px ${color}`,
    }}
    animate={{
      y: [0, -50, 0],
      opacity: [0, 1, 0],
      scale: [0, 1.8, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const CTASection = () => {
  const particles = useMemo(() => 
    [...Array(18)].map((_, i) => ({ // Reduced from 30 to 18 particles
      id: i,
      x: 8 + (i * 5) % 88,
      y: 8 + (i * 9) % 88,
      duration: 6 + (i % 3), // Longer durations
      delay: (i % 6) * 0.7, // Longer delays
      color: ['#8b5cf6', '#06b6d4', '#f97316'][i % 3], // Fewer colors
    }))
  , []);

  return (
    <section className="relative py-24 md:py-32" style={{ contain: 'layout style paint' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0f0a1f] to-[#030712] overflow-hidden" />
      
      <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ctaGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.12" />
          </linearGradient>
          <pattern id="ctaGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#ctaGridGrad)" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="ctaCenterFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="ctaGridMask">
            <rect width="100%" height="100%" fill="white" />
            <rect width="100%" height="100%" fill="url(#ctaCenterFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctaGrid)" mask="url(#ctaGridMask)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ctaLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ctaLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ctaLineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
          <filter id="ctaGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M -100 250 Q 400 150 960 250 T 2020 220"
          stroke="url(#ctaLineGrad1)"
          strokeWidth="2"
          fill="none"
          filter="url(#ctaGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 540 Q 500 450 960 540 T 2020 510"
          stroke="url(#ctaLineGrad2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#ctaGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M -100 830 Q 480 920 960 830 T 2020 860"
          stroke="url(#ctaLineGrad3)"
          strokeWidth="1"
          fill="none"
          filter="url(#ctaGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-600/40 to-purple-500/20 blur-[200px]"
      />
      <motion.div
        animate={{
          scale: [1.4, 1, 1.4],
          opacity: [0.12, 0.3, 0.12],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full bg-gradient-to-tl from-cyan-500/35 to-blue-500/15 blur-[220px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-orange-500/20 via-pink-500/10 to-transparent blur-[150px]"
      />

      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <AnimatedSection>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-violet-500/50 via-cyan-500/50 to-orange-500/50 blur-xl opacity-40" />
            
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-orange-500/30">
              <div className="relative p-10 md:p-16 lg:p-20 rounded-[2.3rem] bg-gradient-to-br from-[#0c0a1a]/95 via-[#0f0d1f]/95 to-[#0a0818]/95 backdrop-blur-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
                
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 left-16 w-4 h-4 rounded-full bg-violet-500/60 blur-sm"
                />
                <motion.div
                  animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 right-16 w-3 h-3 rounded-full bg-cyan-500/60 blur-sm"
                />
                <motion.div
                  animate={{ x: [-12, 12, -12], y: [8, -8, 8] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 right-24 w-2.5 h-2.5 rounded-full bg-orange-500/50 blur-sm"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-24 right-1/3 w-2 h-2 rounded-full bg-pink-500/50"
                />
                <motion.div
                  animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-24 left-1/4 w-2 h-2 rounded-full bg-emerald-500/50"
                />

                <div className="absolute top-10 left-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 text-violet-400/30" />
                  </motion.div>
                </div>
                <div className="absolute bottom-10 right-10">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-5 h-5 text-cyan-400/30" />
                  </motion.div>
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-400/40 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 backdrop-blur-xl mb-8"
                  >
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 text-violet-400" />
                    </motion.div>
                    <span className="text-sm font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
                      Free Strategy Session
                    </span>
                  </motion.div>

                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-8 leading-tight"
                  >
                    Ready to Build Something{" "}
                    <span className="relative">
                      <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">Amazing?</span>
                      <motion.span
                        className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-violet-400 via-cyan-400 to-orange-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      />
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto"
                  >
                    Let's discuss how we can transform your vision into a powerful digital 
                    solution. Book a free 30-minute strategy call—no sales pitch, just insights.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                  >
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03, boxShadow: "0 0 60px rgba(139,92,246,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-lg overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 bg-[length:200%_100%] animate-gradient-x" />
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 via-cyan-500/50 to-violet-600/50 blur-xl opacity-50" />
                        <span className="relative flex items-center gap-2">
                          <Rocket className="w-5 h-5" />
                          Start Your Project
                        </span>
                        <motion.div
                          className="relative"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </Link>
                    
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex items-center gap-3 px-8 py-5 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/40 transition-all duration-300"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Schedule a Call
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </Link>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm"
                  >
                    {[
                      { icon: Zap, text: "Response within 2 hours", color: "text-yellow-400" },
                      { icon: Star, text: "Free project estimate", color: "text-violet-400" },
                      { icon: Sparkles, text: "No obligation", color: "text-cyan-400" },
                    ].map((item, index) => (
                      <motion.div 
                        key={item.text}
                        className="flex items-center gap-2 text-white/60"
                        whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.9)" }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </motion.div>
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
