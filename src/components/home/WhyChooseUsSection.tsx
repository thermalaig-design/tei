import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Search,
  Smartphone,
  Settings,
  Server,
  Headphones,
  Shield,
  Sparkles,
  Check,
  Star,
  Zap
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useMemo, useRef } from "react";

const features = [
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engines in mind. Higher rankings, more visibility, organic traffic that converts.",
    highlight: "Google Ready",
    color: "from-emerald-500 to-teal-400",
    glowColor: "#10b981",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Pixel-perfect on every device. Desktop, tablet, mobile—flawless experience everywhere.",
    highlight: "All Devices",
    color: "from-blue-500 to-cyan-400",
    glowColor: "#3b82f6",
  },
  {
    icon: Settings,
    title: "Full User Control",
    description: "Easy-to-use admin panels. Update content, manage users, track analytics—all in your hands.",
    highlight: "Your Control",
    color: "from-violet-500 to-purple-400",
    glowColor: "#8b5cf6",
  },
  {
    icon: Server,
    title: "Best Hosting Services",
    description: "Lightning-fast servers with 99.9% uptime. Global CDN, auto-scaling, zero downtime deployments.",
    highlight: "99.9% Uptime",
    color: "from-orange-500 to-amber-400",
    glowColor: "#f97316",
  },
  {
    icon: Headphones,
    title: "24/7 Contact Support",
    description: "Round-the-clock assistance whenever you need it. Live chat, email, phone—we're always here.",
    highlight: "Always Online",
    color: "from-pink-500 to-rose-400",
    glowColor: "#ec4899",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SSL certificates, regular backups. Your data is always protected.",
    highlight: "256-bit SSL",
    color: "from-cyan-500 to-blue-400",
    glowColor: "#06b6d4",
  },
];

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

export const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Removed parallax effect for better performance
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"]
  // });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const particles = useMemo(() => 
    [...Array(12)].map((_, i) => ({ // Reduced from 30 to 12 particles
      id: i,
      x: 10 + (i * 8) % 85,
      y: 10 + (i * 15) % 85,
      duration: 7 + (i % 3), // Longer durations
      delay: (i % 4) * 0.8, // Longer delays
      color: ['#10b981', '#3b82f6', '#8b5cf6'][i % 3], // Fewer colors
    }))
  , []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Static background - removed parallax for performance */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')`,
             transform: 'scale(1.1)',
           }}>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#0a1020]/90 to-[#030712]/95" />
      <div className="absolute inset-0 bg-[#030712]/60" />
      
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="whyGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
          </linearGradient>
          <pattern id="whyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#whyGridGrad)" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="whyCenterFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="80%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="whyGridMask">
            <rect width="100%" height="100%" fill="white" />
            <rect width="100%" height="100%" fill="url(#whyCenterFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#whyGrid)" mask="url(#whyGridMask)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="wLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wLineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <filter id="wGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M -100 250 Q 400 180 960 250 T 2020 230"
          stroke="url(#wLineGrad1)"
          strokeWidth="2"
          fill="none"
          filter="url(#wGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 540 Q 480 620 960 540 T 2020 560"
          stroke="url(#wLineGrad2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#wGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.path
          d="M -100 830 Q 480 900 960 830 T 2020 850"
          stroke="url(#wLineGrad3)"
          strokeWidth="1"
          fill="none"
          filter="url(#wGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, 80, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-600/40 to-teal-500/20 blur-[200px]"
      />
      <motion.div
        animate={{
          scale: [1.4, 1, 1.4],
          opacity: [0.12, 0.3, 0.12],
          x: [0, -100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full bg-gradient-to-tl from-blue-600/35 to-violet-500/20 blur-[220px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-orange-500/20 via-transparent to-transparent blur-[150px]"
      />

      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 w-4 h-4 rounded-full bg-emerald-500/60 blur-sm"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-blue-500/60 blur-sm"
      />

      <div className="absolute top-20 left-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-6 h-6 text-emerald-400/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-16">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-5 h-5 text-blue-400/30" />
        </motion.div>
      </div>

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            Built Different.{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Built Better.</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 rounded-full"
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
            We don't just write code—we architect solutions that give your business 
            an unfair competitive advantage.
          </motion.p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                className="group relative h-full cursor-pointer"
              >
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.glowColor}30, transparent)`,
                    filter: 'blur(25px)'
                  }}
                />

                <div className="relative h-full rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.1] to-white/[0.03] backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white/25">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${feature.glowColor}, transparent)` }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700"
                    style={{ background: `radial-gradient(circle, ${feature.glowColor}, transparent 70%)` }}
                  />

                  <div className="relative p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <motion.div 
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-[2px]`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-full h-full rounded-2xl bg-[#0a0f1a]/80 flex items-center justify-center group-hover:bg-[#0a0f1a]/60 transition-colors duration-300">
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
                              <feature.icon className="w-7 h-7 text-white" />
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ 
                            background: `radial-gradient(circle at center, ${feature.glowColor}40, transparent 70%)`,
                            filter: 'blur(20px)'
                          }}
                        />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute rounded-full border opacity-0 group-hover:opacity-100"
                              style={{ 
                                width: 60 + i * 20,
                                height: 60 + i * 20,
                                borderColor: `${feature.glowColor}${30 - i * 10}`,
                                marginLeft: -(30 + i * 10),
                                marginTop: -(30 + i * 10),
                              }}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0, 0.4, 0],
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

                      <motion.span 
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          color: feature.glowColor,
                          borderColor: `${feature.glowColor}40`,
                          background: `${feature.glowColor}15`,
                        }}
                        whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${feature.glowColor}40` }}
                      >
                        <Check className="w-3 h-3" />
                        {feature.highlight}
                      </motion.span>
                    </div>

                    <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/60 leading-relaxed text-sm lg:text-base group-hover:text-white/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <motion.div
                  className="absolute -bottom-2 left-4 right-4 h-8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(to bottom, ${feature.glowColor}15, transparent)`,
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
