import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  AppWindow, 
  Brain, 
  Zap, 
  Code2,
  ArrowRight,
  Sparkles,
  Star
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useMemo, useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Your digital storefront that converts visitors into loyal customers with stunning design and blazing performance.",
    color: "from-blue-500 to-cyan-400",
    glowColor: "#3b82f6",
    link: "/services#websites",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android apps users love. Native performance, beautiful interfaces, seamless experiences.",
    color: "from-purple-500 to-pink-400",
    glowColor: "#a855f7",
    link: "/services#mobile",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    description: "Scalable SaaS platforms built with modern architecture that grows with your business.",
    color: "from-orange-500 to-amber-400",
    glowColor: "#f97316",
    link: "/services#webapps",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation that saves hours. ML models, chatbots, and predictive analytics.",
    color: "from-emerald-500 to-teal-400",
    glowColor: "#10b981",
    link: "/services#ai",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Workflows that run on autopilot. Eliminate repetitive tasks and focus on what matters.",
    color: "from-yellow-500 to-orange-400",
    glowColor: "#eab308",
    link: "/services#automation",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Built exactly for your process. Tailored solutions that fit like a glove.",
    color: "from-indigo-500 to-violet-400",
    glowColor: "#6366f1",
    link: "/services#custom",
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

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Removed parallax effect for better performance
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"]
  // });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({ // Reduced from 30 to 15 particles
      id: i,
      x: 5 + (i * 7) % 90,
      y: 5 + (i * 12) % 90,
      duration: 6 + (i % 3), // Longer durations
      delay: (i % 5) * 0.6, // Longer delays
      color: ['#3b82f6', '#06b6d4', '#8b5cf6'][i % 3], // Fewer colors
    }))
  , []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Static background - removed parallax for performance */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')`,
             transform: 'scale(1.1)',
           }}>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#0a0f1a]/90 to-[#030712]/95" />
      <div className="absolute inset-0 bg-[#030712]/60" />
      
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="servicesGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.12" />
          </linearGradient>
          <pattern id="servicesGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#servicesGridGrad)" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="servicesCenterFade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="servicesGridMask">
            <rect width="100%" height="100%" fill="white" />
            <rect width="100%" height="100%" fill="url(#servicesCenterFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#servicesGrid)" mask="url(#servicesGridMask)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sLineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <filter id="sGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M -100 300 Q 480 200 960 300 T 2020 280"
          stroke="url(#sLineGrad1)"
          strokeWidth="2"
          fill="none"
          filter="url(#sGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 540 Q 500 620 960 540 T 2020 560"
          stroke="url(#sLineGrad2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#sGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.path
          d="M -100 780 Q 500 850 960 780 T 2020 800"
          stroke="url(#sLineGrad3)"
          strokeWidth="1"
          fill="none"
          filter="url(#sGlow)"
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
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/20 blur-[200px]"
      />
      <motion.div
        animate={{
          scale: [1.4, 1, 1.4],
          opacity: [0.12, 0.3, 0.12],
          x: [0, -100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full bg-gradient-to-tl from-violet-600/35 to-purple-500/20 blur-[220px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-emerald-500/20 via-transparent to-transparent blur-[150px]"
      />

      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 w-4 h-4 rounded-full bg-blue-500/60 blur-sm"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-violet-500/60 blur-sm"
      />

      <div className="absolute top-20 left-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-6 h-6 text-blue-400/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-16">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-5 h-5 text-violet-400/30" />
        </motion.div>
      </div>
        
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-gradient-to-r from-primary/15 to-violet-500/15 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent uppercase tracking-wider">
              What We Build
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            Solutions That Drive{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent">Real Growth</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-violet-500 to-cyan-400 rounded-full"
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
            From concept to deployment, we deliver end-to-end digital solutions 
            that transform your business and delight your users.
          </motion.p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <Link to={service.link}>
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
                      background: `linear-gradient(135deg, ${service.glowColor}30, transparent)`,
                      filter: 'blur(25px)'
                    }}
                  />
                  
                  <div className="relative h-full rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.1] to-white/[0.03] backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white/25">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-[2px]"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)` }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700"
                      style={{ background: `radial-gradient(circle, ${service.glowColor}, transparent 70%)` }}
                    />
                    
                    <div className="relative p-8 lg:p-10">
                      <div className="relative mb-8">
                        <motion.div 
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[2px]`}
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
                              <service.icon className="w-7 h-7 text-white" />
                            </motion.div>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ 
                            background: `radial-gradient(circle at center, ${service.glowColor}40, transparent 70%)`,
                            filter: 'blur(20px)'
                          }}
                        />
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute top-1/2 left-1/2 rounded-full border opacity-0 group-hover:opacity-100"
                              style={{ 
                                width: 60 + i * 20,
                                height: 60 + i * 20,
                                borderColor: `${service.glowColor}${30 - i * 10}`,
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

                      <motion.h3 
                        className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-300"
                      >
                        <span className="relative">
                          {service.title}
                          <motion.span
                            className="absolute -bottom-1 left-0 h-[2px] rounded-full"
                            style={{ background: `linear-gradient(90deg, ${service.glowColor}, transparent)` }}
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </motion.h3>
                      
                      <p className="text-white/60 mb-8 leading-relaxed text-sm lg:text-base group-hover:text-white/80 transition-colors duration-300">
                        {service.description}
                      </p>

                      <motion.div 
                        className="flex items-center gap-3 text-sm font-semibold"
                        style={{ color: service.glowColor }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                          Explore Service
                        </span>
                        <motion.div
                          className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:border-current group-hover:bg-white/5"
                          style={{ borderColor: `${service.glowColor}40` }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>

                  <motion.div
                    className="absolute -bottom-2 left-4 right-4 h-8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(to bottom, ${service.glowColor}15, transparent)`,
                      filter: 'blur(10px)'
                    }}
                  />
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(139,92,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl font-bold text-foreground overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">View All Services</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
