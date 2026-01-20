import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  PhoneCall, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  Headphones,
  Check,
  ChevronUp,
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/home/CTASection";

const phases = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Discovery & Consultation",
    duration: "Week 1",
    description: "We start with an in-depth consultation to understand your vision, business goals, target audience, and project requirements.",
    outputs: ["Project scope document", "Timeline & milestones", "Budget estimation"],
    activities: [
      "Free 30-min consultation call",
      "Business goals & KPIs analysis",
      "Competitor & market research",
      "Technical feasibility assessment",
    ],
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    duration: "Week 1-2",
    description: "We create a comprehensive strategy and technical architecture that aligns with your business objectives and scales with growth.",
    outputs: ["Technical architecture", "User flow diagrams", "Feature prioritization"],
    activities: [
      "User persona development",
      "Information architecture design",
      "Technology stack selection",
      "Database & API planning",
    ],
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    duration: "Week 2-4",
    description: "Our designers craft beautiful, intuitive interfaces that reflect your brand and deliver exceptional user experiences.",
    outputs: ["High-fidelity mockups", "Interactive prototype", "Design system & assets"],
    activities: [
      "Wireframing & user flows",
      "Brand-aligned visual design",
      "Responsive design for all devices",
      "Accessibility (WCAG) compliance",
    ],
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-500/10",
  },
  {
    number: "04",
    icon: Code,
    title: "Development",
    duration: "Week 4-10",
    description: "Our expert developers transform designs into a fully functional, high-performance product using cutting-edge technologies.",
    outputs: ["Functional application", "API documentation", "Admin dashboard"],
    activities: [
      "Agile development sprints",
      "Weekly progress updates & demos",
      "Code reviews & quality checks",
      "Real-time Slack collaboration",
    ],
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & Quality Assurance",
    duration: "Week 10-11",
    description: "Comprehensive testing ensures your product is bug-free, secure, and performs flawlessly across all devices and scenarios.",
    outputs: ["QA test reports", "Performance benchmarks", "Security audit"],
    activities: [
      "Automated & manual testing",
      "Cross-browser/device testing",
      "Performance optimization",
      "Security vulnerability scanning",
    ],
    color: "from-yellow-500 to-orange-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Deployment",
    duration: "Week 12",
    description: "We handle the complete deployment process and ensure a smooth, successful launch with zero downtime.",
    outputs: ["Live product", "Training & documentation", "Launch support"],
    activities: [
      "Production deployment",
      "Domain & hosting setup",
      "Analytics & monitoring integration",
      "Team training & handover",
    ],
    color: "from-red-500 to-rose-400",
    bgColor: "bg-red-500/10",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Ongoing Support & Growth",
    duration: "Ongoing",
    description: "We provide continuous support, maintenance, and optimization to help your product grow and evolve with your business.",
    outputs: ["24/7 monitoring", "Monthly reports", "Feature updates"],
    activities: [
      "Proactive monitoring & alerts",
      "Regular performance optimization",
      "New feature development",
      "Scalability & growth planning",
    ],
    color: "from-indigo-500 to-violet-400",
    bgColor: "bg-indigo-500/10",
  },
];

const stats = [
  { icon: Clock, value: "12", label: "Weeks Average", suffix: "" },
  { icon: Users, value: "100", label: "Happy Clients", suffix: "+" },
  { icon: Target, value: "98", label: "On-Time Delivery", suffix: "%" },
  { icon: Zap, value: "24", label: "Hour Response", suffix: "h" },
];

const HowItWorks = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
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
        {/* Hero Section with Background */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <motion.div
            className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]"
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
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-foreground">Transparent & Proven Process</span>
              </motion.div>
              
              <h1 className="heading-xl text-foreground mb-6">
                From Concept to Launch in{" "}
                <span className="gradient-text">12 Weeks</span>
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Our battle-tested process eliminates guesswork and ensures predictable results. 
                You'll always know exactly where we are and what's coming next.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}<span className="text-primary">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Timeline - Modern Cards */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="heading-lg text-foreground mb-4">
                Our 7-Phase <span className="gradient-text">Development Process</span>
              </h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                Each phase is carefully designed to deliver maximum value while keeping you informed every step of the way.
              </p>
            </AnimatedSection>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line - Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2" />

              <div className="space-y-8 lg:space-y-0">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative lg:flex lg:items-center lg:gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Node - Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center z-10 shadow-lg shadow-primary/30">
                      <span className="text-sm font-bold text-white">{phase.number}</span>
                    </div>

                    {/* Card */}
                    <div className={`lg:w-[calc(50%-4rem)] ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}`}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="glass-card p-6 lg:p-8 relative overflow-hidden group"
                      >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                        
                        {/* Mobile Number Badge */}
                        <div className="lg:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{phase.number}</span>
                        </div>

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-5">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} p-0.5 flex-shrink-0`}>
                            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                              <phase.icon className="w-6 h-6 text-foreground" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${phase.color} text-white`}>
                                {phase.duration}
                              </span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {phase.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                          {phase.description}
                        </p>

                        {/* Activities Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                          {phase.activities.map((activity) => (
                            <div
                              key={activity}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-muted-foreground">{activity}</span>
                            </div>
                          ))}
                        </div>

                        {/* Outputs */}
                        <div className="pt-4 border-t border-border/50">
                          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Deliverables:</p>
                          <div className="flex flex-wrap gap-2">
                            {phase.outputs.map((output) => (
                              <span
                                key={output}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full ${phase.bgColor} text-foreground border border-border/50`}
                              >
                                {output}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <div className={`absolute top-1/2 -translate-y-1/2 hidden lg:block ${
                          index % 2 === 0 ? "-right-3" : "-left-3"
                        }`}>
                          <div className={`w-6 h-6 rotate-45 bg-card border-r border-t border-border/50 ${
                            index % 2 === 0 ? "" : "rotate-[225deg]"
                          }`} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-[calc(50%-4rem)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Process Works */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-background/95" />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center mb-12">
              <h2 className="heading-lg text-foreground mb-4">
                Why Our Process <span className="gradient-text">Works</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Complete Transparency",
                  description: "Weekly updates, real-time collaboration, and access to project tracking. You're never in the dark.",
                  icon: "🔍",
                },
                {
                  title: "Fixed Timeline & Budget",
                  description: "No surprises. We commit to deadlines and budgets upfront, and we stick to them.",
                  icon: "📅",
                },
                {
                  title: "Quality Guaranteed",
                  description: "Every project includes comprehensive QA, performance optimization, and a 30-day bug-fix guarantee.",
                  icon: "✅",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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

export default HowItWorks;
