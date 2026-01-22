import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles, Rocket, Code2, Zap, Star } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";

const typewriterTexts = [
  "Transform Your Vision Into Reality",
  "Scale Your Business Digitally",
  "Automate. Innovate. Dominate.",
  "Where Ideas Meet Innovation",
  "Launch. Grow.",
];

const useTypewriter = (texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

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

export const HeroSection = () => {
  const typewriterText = useTypewriter(typewriterTexts, 80, 40, 2500);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Removed parallax effect for better performance
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const particles = useMemo(() => 
    [...Array(8)].map((_, i) => ({ // Further reduced from 20 to 8 particles
      id: i,
      x: 10 + (i * 12) % 80,
      y: 10 + (i * 15) % 80,
      duration: 8 + (i % 2), // Even longer durations
      delay: (i % 4) * 1.2, // Longer delays
      color: ['#3b82f6', '#06b6d4'][i % 2], // Only 2 colors
    }))
  , []);
    
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ contain: 'layout style paint' }}>
      {/* Static background - removed parallax for performance */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop')`,
             transform: 'scale(1.1)',
           }}>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e2a]/95 via-[#121a3a]/90 to-[#0c1428]/95" />
      <div className="absolute inset-0 bg-[#0c1428]/60" />
      
      <svg className="absolute inset-0 w-full h-full z-[1] opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.12" />
          </linearGradient>
          <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#heroGridGrad)" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="heroCenterFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="70%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="heroGridMask">
            <rect width="100%" height="100%" fill="white" />
            <rect width="100%" height="100%" fill="url(#heroCenterFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" mask="url(#heroGridMask)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full z-[2] opacity-25" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="heroLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M -100 200 Q 400 100 960 200 T 2020 180"
          stroke="url(#heroLineGrad1)"
          strokeWidth="2"
          fill="none"
          filter="url(#heroGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.path
          d="M -100 540 Q 500 450 960 540 T 2020 510"
          stroke="url(#heroLineGrad2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#heroGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 8, ease: "easeInOut", delay: 1, repeat: Infinity }}
        />
        <motion.path
          d="M -100 880 Q 500 920 960 860 T 2020 900"
          stroke="url(#heroLineGrad3)"
          strokeWidth="1"
          fill="none"
          filter="url(#heroGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 10, ease: "easeInOut", delay: 2, repeat: Infinity }}
        />
      </svg>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/15 blur-[150px] z-[4]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-cyan-500/25 to-violet-600/15 blur-[180px] z-[4]"
      />
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-violet-500/20 via-pink-500/5 to-transparent blur-[120px] z-[4]"
      />

      {particles.map((particle) => (
        <FloatingParticle key={`particle-${particle.id}`} {...particle} />
      ))}

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 w-3 h-3 rounded-full bg-blue-500/40 blur-sm z-[5]"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-2.5 h-2.5 rounded-full bg-cyan-500/40 blur-sm z-[5]"
      />

      <div className="absolute top-20 left-16 z-[5]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-6 h-6 text-blue-400/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-16 z-[5]">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-5 h-5 text-cyan-400/30" />
        </motion.div>
      </div>

      <div className="container-wide relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SaaS Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            <span>We Build</span>{" "}
            <span className="block mt-2">
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent">{typewriterText}</span>
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-violet-500/30 to-cyan-500/30 blur-xl opacity-40" />
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-violet-500/20 to-cyan-500/20">
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#0c0a1a]/90 via-[#0f0d1f]/90 to-[#0a0818]/90 backdrop-blur-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
                <p className="relative text-lg text-white/80 leading-relaxed">
                  Your one-stop SaaS marketing agency for{" "}
                  <span className="font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    stunning websites
                  </span>,{" "}
                  <span className="font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    powerful mobile apps
                  </span>, and{" "}
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
                    AI-powered automation tools
                  </span>{" "}
                  that handle your daily tasks while you focus on growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: Code2, text: "Custom Websites", color: "#3b82f6" },
              { icon: Rocket, text: "Mobile Apps", color: "#8b5cf6" },
              { icon: Zap, text: "Automation Tools", color: "#06b6d4" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                whileHover={{ scale: 1.08, y: -4, boxShadow: `0 0 25px ${item.color}40` }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl cursor-pointer transition-all duration-300"
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                <span className="text-sm font-medium text-foreground/90">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="relative group overflow-hidden rounded-full px-10 py-5 font-bold text-white text-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-primary bg-[length:200%_100%] animate-gradient-x" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-violet-500/50 to-primary/50 blur-xl opacity-50" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_70%)]" />
                <span className="relative flex items-center gap-2">
                  Book Free Strategy Call
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Projects", color: "#3b82f6" },
                { value: "98%", label: "Satisfaction", color: "#10b981" },
                { value: "50+", label: "Clients", color: "#8b5cf6" },
                { value: "24/7", label: "Support", color: "#f97316" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="text-center group cursor-pointer p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
                  style={{ 
                    boxShadow: `0 0 0 rgba(${stat.color === '#3b82f6' ? '59,130,246' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#8b5cf6' ? '139,92,246' : '249,115,22'},0)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${stat.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                  }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-display font-bold mb-1"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
