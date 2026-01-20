import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Award,
  Eye,
  Sparkles,
  Shield,
  Users,
  CheckCircle,
  ChevronUp,
  Rocket,
  Heart,
  Zap,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every pixel, every line of code is crafted with precision and care.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "No hidden costs, no surprises. You'll always know exactly where your project stands.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "We leverage cutting-edge technologies to build future-proof solutions for your business.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your growth is our success. We're invested in building long-term partnerships.",
    color: "from-emerald-500 to-teal-400",
  },
];

const certifications = [
  { name: "ISO 27001 Certified", icon: Shield },
  { name: "GDPR Compliant", icon: CheckCircle },
  { name: "SSL Secured", icon: Shield },
  { name: "Data Protection", icon: CheckCircle },
  { name: "Quality Assured", icon: Award },
  { name: "24/7 Support", icon: Zap },
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Rocket },
  { value: "50+", label: "Expert Team", icon: Users },
  { value: "8+", label: "Years Experience", icon: TrendingUp },
  { value: "100%", label: "Client Satisfaction", icon: Heart },
];

const About = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <motion.div
            className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">About Digital Architects</span>
              </motion.div>
              
              <h1 className="heading-xl text-foreground mb-6">
                We Build Digital Solutions That{" "}
                <span className="gradient-text">Drive Growth</span>
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                We're a passionate team of developers, designers, and strategists committed to 
                transforming your ideas into powerful digital experiences that deliver real results.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center mb-16">
              <motion.span 
                className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Journey
              </motion.span>
              <h2 className="heading-lg text-foreground mb-4">
                The Story Behind <span className="gradient-text">Our Success</span>
              </h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                From a small team with big dreams to becoming a trusted digital partner for businesses across India.
              </p>
            </AnimatedSection>

            {/* Story Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="space-y-6">
                  <div className="glass-card p-6 border-l-4 border-primary">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      To empower businesses with innovative digital solutions that drive growth, 
                      enhance efficiency, and create lasting impact in the digital landscape.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 border-l-4 border-accent">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground">
                      To be India's most trusted digital transformation partner, known for 
                      delivering exceptional quality, innovation, and client success.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    We started with a simple belief: every business deserves 
                    access to world-class digital solutions. Today, we've helped 500+ businesses 
                    transform their digital presence and achieve remarkable growth.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                      alt="Our Team"
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="font-display text-xl font-bold text-foreground mb-2">
                        Industry Leaders
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Recognized as a leading digital solutions provider with 500+ successful projects.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Core Values
              </span>
              <h2 className="heading-lg text-foreground">
                Principles That <span className="gradient-text">Define Us</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="h-full glass-card p-8 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Compliance - Parallax Section */}
        <section ref={parallaxRef} className="py-24 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
              y,
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-background/90"
            style={{ opacity }}
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Trust & Compliance
              </span>
              <h2 className="heading-lg text-foreground mb-6">
                Security You Can <span className="gradient-text">Trust</span>
              </h2>
              <p className="body-md text-muted-foreground">
                We maintain the highest standards of security and compliance to ensure 
                your business and data are always protected.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card p-4 text-center group hover:border-primary/30 transition-colors"
                >
                  <cert.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-foreground">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
