import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  ShoppingCart, 
  GraduationCap,
  Home,
  Factory,
  Rocket,
  Briefcase,
  Sparkles
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useMemo, useRef } from "react";

const industries = [
  { 
    icon: Building2, 
    name: "FinTech & Banking", 
    description: "Secure, compliant financial solutions",
    color: "from-blue-500 to-cyan-400",
    glowColor: "#3b82f6",
  },
  { 
    icon: Stethoscope, 
    name: "Healthcare & MedTech", 
    description: "HIPAA-ready health platforms",
    color: "from-emerald-500 to-teal-400",
    glowColor: "#10b981",
  },
  { 
    icon: ShoppingCart, 
    name: "E-commerce & Retail", 
    description: "High-converting online stores",
    color: "from-orange-500 to-amber-400",
    glowColor: "#f97316",
  },
  { 
    icon: GraduationCap, 
    name: "Education & EdTech", 
    description: "Engaging learning experiences",
    color: "from-violet-500 to-purple-400",
    glowColor: "#8b5cf6",
  },
  { 
    icon: Home, 
    name: "Real Estate & PropTech", 
    description: "Property management innovation",
    color: "from-pink-500 to-rose-400",
    glowColor: "#ec4899",
  },
  { 
    icon: Factory, 
    name: "Manufacturing & Logistics", 
    description: "Supply chain optimization",
    color: "from-yellow-500 to-orange-400",
    glowColor: "#eab308",
  },
  { 
    icon: Rocket, 
    name: "SaaS & Tech Startups", 
    description: "Rapid MVP to scale",
    color: "from-cyan-500 to-blue-400",
    glowColor: "#06b6d4",
  },
  { 
    icon: Briefcase, 
    name: "Professional Services", 
    description: "Streamlined operations",
    color: "from-indigo-500 to-violet-400",
    glowColor: "#6366f1",
  },
];

const FloatingParticle = ({ delay, duration, x, y, color }: { delay: number; duration: number; x: number; y: number; color: string }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: color,
      boxShadow: `0 0 15px ${color}`,
    }}
    animate={{
      y: [0, -40, 0],
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const IndustriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Removed parallax effects for better performance
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"]
  // });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.5, 0.7]);

  const particles = useMemo(() => 
    [...Array(4)].map((_, i) => ({ // Further reduced from 15 to 4 particles
      id: i,
      x: 25 + (i * 25) % 50,
      y: 25 + (i * 30) % 50,
      duration: 15 + (i % 2), // Even longer durations
      delay: (i % 2) * 3, // Longer delays
      color: ['#3b82f6', '#10b981'][i % 2], // Only 2 colors
    }))
  , []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32" style={{ contain: 'layout style paint' }}>
      {/* Static background - removed parallax for performance */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
             transform: 'scale(1.1)',
           }}>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#0a1628]/80 to-[#030712]/90" />
      
      <div className="absolute inset-0 bg-[#030712]/60 overflow-hidden" />

      <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="indGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
          <pattern id="indGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#indGridGrad)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="indCenterFade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="indGridMask">
            <rect width="100%" height="100%" fill="white" />
            <rect width="100%" height="100%" fill="url(#indCenterFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#indGrid)" mask="url(#indGridMask)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="iLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="iLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="iLineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <filter id="iGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M -100 280 Q 480 200 960 280 T 2020 260"
          stroke="url(#iLineGrad1)"
          strokeWidth="2"
          fill="none"
          filter="url(#iGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 540 Q 500 620 960 540 T 2020 560"
          stroke="url(#iLineGrad2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#iGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.path
          d="M -100 800 Q 480 720 960 800 T 2020 780"
          stroke="url(#iLineGrad3)"
          strokeWidth="1"
          fill="none"
          filter="url(#iGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-blue-500/20 to-cyan-400/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.06, 0.18, 0.06],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-emerald-500/20 to-violet-400/10 blur-[150px]"
      />
      <motion.div
        animate={{
          opacity: [0.03, 0.1, 0.03],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-orange-400/10 via-transparent to-transparent blur-[90px]"
      />

      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 backdrop-blur-xl mb-6"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-wider">
              Industries We Serve
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            Deep Expertise Across{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Every Sector</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed"
          >
            We've delivered transformative solutions across diverse industries, 
            understanding the unique challenges and regulations of each.
          </motion.p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.08}>
          {industries.map((industry, index) => (
            <StaggerItem key={industry.name}>
              <motion.div
                whileHover={{ 
                  y: -10, 
                  scale: 1.04,
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                className="group relative cursor-pointer"
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${industry.glowColor}30, transparent)`,
                    filter: 'blur(20px)'
                  }}
                />
                
                <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.1] to-white/[0.03] backdrop-blur-2xl overflow-hidden shadow-2xl">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${industry.glowColor}, transparent)` }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700"
                    style={{ background: `radial-gradient(circle, ${industry.glowColor}, transparent 70%)` }}
                  />

                  <div className="relative p-6 lg:p-8 text-center">
                    <div className="relative mx-auto mb-5">
                      <motion.div 
                        className={`relative w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${industry.color} p-[2px]`}
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full rounded-xl bg-[#0a0f1a]/80 flex items-center justify-center group-hover:bg-[#0a0f1a]/60 transition-colors duration-300">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.15, 1],
                            }}
                            transition={{ 
                              duration: 2.5, 
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                          >
                            <industry.icon className="w-7 h-7 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="absolute -inset-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ 
                          background: `radial-gradient(circle at center, ${industry.glowColor}40, transparent 70%)`,
                          filter: 'blur(15px)'
                        }}
                      />

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full border opacity-0 group-hover:opacity-100"
                            style={{ 
                              width: 50 + i * 18,
                              height: 50 + i * 18,
                              borderColor: `${industry.glowColor}${30 - i * 10}`,
                              marginLeft: -(25 + i * 9),
                              marginTop: -(25 + i * 9),
                            }}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0, 0.45, 0],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <motion.h3 
                      className="font-display font-bold text-white mb-2 text-sm lg:text-base group-hover:text-white transition-colors duration-300"
                    >
                      {industry.name}
                    </motion.h3>
                    
                    <p className="text-xs lg:text-sm text-white/60 hidden lg:block group-hover:text-white/80 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <motion.div
                  className="absolute -bottom-2 left-3 right-3 h-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(to bottom, ${industry.glowColor}15, transparent)`,
                    filter: 'blur(10px)'
                  }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
