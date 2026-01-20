import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  AppWindow, 
  Brain, 
  Zap, 
  Code2,
  Check,
  ArrowRight,
  Rocket,
  Shield,
  Search,
  Gauge,
  Palette,
  MousePointerClick,
  TrendingUp,
  Clock,
  Layers,
  Monitor,
  Cpu,
  Workflow,
  Settings,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    tagline: "Your website is your best salesperson. Make it count.",
    problem: "Most websites are slow, generic, and don't convert visitors into customers. You need a digital presence that builds trust instantly and drives measurable results.",
    solution: "We architect high-performance websites with stunning design, SEO optimization, and conversion-focused UX. Every element is crafted to turn visitors into loyal customers.",
    features: [
      "Custom design (no templates)",
      "Mobile-first responsive",
      "SEO optimized from day one",
      "3-second load time guarantee",
      "Analytics & tracking setup",
      "CMS integration",
      "Ongoing maintenance",
    ],
    idealFor: "Startups launching products, SMBs rebranding, enterprises needing portals",
    techStack: ["React", "Next.js", "Tailwind", "Headless CMS", "Vercel"],
    color: "from-blue-500 to-cyan-400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Apps That Users Love",
    problem: "In 2026, users expect lightning-fast, beautifully designed mobile experiences. Generic apps with poor UX get uninstalled within minutes.",
    solution: "We craft pixel-perfect mobile applications with cutting-edge technologies, ensuring seamless performance across iOS and Android with a single codebase efficiency.",
    features: [
      "Flutter & React Native expertise",
      "AI-powered personalization",
      "Offline-first architecture",
      "Biometric authentication",
      "Real-time sync & notifications",
      "App Store optimization (ASO)",
      "Continuous OTA updates",
      "Performance monitoring",
    ],
    idealFor: "Startups, E-commerce, Healthcare, FinTech, Enterprise mobility",
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    color: "from-purple-500 to-pink-400",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "webapps",
    icon: Layers,
    title: "Web Application Development",
    tagline: "Scalable SaaS & Enterprise Platforms",
    problem: "Building web applications that scale from MVP to millions of users while maintaining speed and reliability is a complex challenge in 2026.",
    solution: "We architect robust web applications using serverless infrastructure, microservices, and modern frameworks that grow with your business seamlessly.",
    features: [
      "Serverless & edge computing",
      "Real-time collaboration features",
      "Multi-tenant SaaS architecture",
      "Role-based access control",
      "API-first design",
      "Progressive Web App (PWA)",
      "Auto-scaling infrastructure",
      "99.99% uptime guarantee",
    ],
    idealFor: "SaaS products, Enterprise dashboards, Collaboration tools, CRM systems",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Vercel"],
    color: "from-orange-500 to-amber-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI & Machine Learning Solutions",
    tagline: "Transform Your Business With Intelligent Automation",
    problem: "In 2026, businesses without AI integration are falling behind. Manual processes, generic customer experiences, and missed insights cost millions.",
    solution: "We implement cutting-edge AI solutions that automate operations, personalize experiences, and unlock data-driven insights for competitive advantage.",
    features: [
      "Custom GPT & LLM integration",
      "Intelligent chatbots & agents",
      "Predictive analytics dashboards",
      "Computer vision solutions",
      "Voice AI & speech recognition",
      "RAG-based knowledge systems",
      "AI-powered automation",
      "Model fine-tuning & optimization",
    ],
    idealFor: "Customer support, Sales automation, Content generation, Data analytics",
    techStack: ["OpenAI", "Claude", "LangChain", "Python", "TensorFlow", "Vector DBs"],
    color: "from-emerald-500 to-teal-400",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Automation",
    tagline: "Eliminate Repetitive Work, Scale Operations",
    problem: "Your team spends 40% of their time on repetitive tasks in 2026. Manual data entry, report generation, and disconnected systems drain productivity.",
    solution: "We design intelligent automation workflows that connect your tools, eliminate manual work, and let your team focus on high-impact activities.",
    features: [
      "End-to-end workflow automation",
      "CRM & ERP integrations",
      "Automated reporting & alerts",
      "Document processing & OCR",
      "Email & communication flows",
      "Invoice & payment automation",
      "Custom API integrations",
      "AI-enhanced decision making",
    ],
    idealFor: "Operations teams, Finance departments, HR, Sales & Marketing",
    techStack: ["n8n", "Make", "Zapier", "Custom APIs", "Webhooks", "RPA"],
    color: "from-yellow-500 to-orange-400",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "custom",
    icon: Settings,
    title: "Custom Software Development",
    tagline: "Tailored Solutions For Unique Challenges",
    problem: "Off-the-shelf software forces you to adapt your processes. In 2026, businesses need technology that molds to their unique workflows, not the other way around.",
    solution: "We build bespoke software solutions designed around your specific requirements, integrating seamlessly with existing systems and scaling with your growth.",
    features: [
      "Deep requirements discovery",
      "Custom architecture design",
      "Legacy system modernization",
      "Seamless data migration",
      "Third-party integrations",
      "Security & compliance built-in",
      "Comprehensive documentation",
      "Long-term support & evolution",
    ],
    idealFor: "Unique business processes, Legacy modernization, Competitive advantages",
    techStack: ["Custom Stack", "Cloud Native", "Enterprise Integration", "DevOps"],
    color: "from-indigo-500 to-violet-400",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[70vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          
          <motion.div
            className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                Our Services
              </motion.span>
              <h1 className="heading-xl text-foreground mb-6">
                Transforming Ideas Into{" "}
                <span className="gradient-text">Digital Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Where Innovation Meets Execution — We Don't Just Build Software, We Architect Your Digital Future
              </p>
              <p className="body-lg max-w-2xl mx-auto">
                From cutting-edge websites to intelligent AI solutions, our expert team delivers technology 
                that drives growth, efficiency, and competitive advantage for businesses worldwide.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6 mt-10"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  <span>100+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Global Clientele</span>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Detail */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="space-y-24">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    id={service.id}
                    className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      {/* Icon */}
                      <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                        <div className="w-full h-full rounded-2xl bg-background/90 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>

                      <h2 className="heading-md text-foreground mb-2">{service.title}</h2>
                      <p className="text-xl text-primary font-medium mb-6">{service.tagline}</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">The Problem</h3>
                          <p className="text-muted-foreground">{service.problem}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Our Solution</h3>
                          <p className="text-muted-foreground">{service.solution}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-3">What You Get</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-success flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link to="/contact">
                          <button className="btn-primary mt-4 group">
                            Discuss Your Project
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </Link>
                      </div>
                    </div>

                      {/* Visual */}
                      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
                        >
                          {/* Image */}
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-30 mix-blend-overlay`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                          
                          {/* Floating Badge */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{service.title}</p>
                                <p className="text-xs text-muted-foreground">Expert Solutions</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
