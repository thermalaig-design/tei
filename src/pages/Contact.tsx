import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building2,
  Handshake,
  Headphones,
  Check,
  Sparkles
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const contactTypes = [
  { id: "sales", label: "Sales Inquiry", icon: MessageSquare },
  { id: "technical", label: "Technical", icon: Building2 },
  { id: "partnership", label: "Partnership", icon: Handshake },
  { id: "support", label: "Support", icon: Headphones },
];

const projectTypes = [
  "Website Development",
  "Mobile App Development",
  "Web Application",
  "AI & Machine Learning",
  "Business Automation",
  "Custom Software",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000 - ₹5,00,000",
  "₹5,00,000+",
  "Not Sure Yet",
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 2 business hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Background Image */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <motion.div
            className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[120px]"
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Get in Touch</span>
              </motion.div>
              
              <h1 className="heading-xl text-foreground mb-6">
                Let's Build Your{" "}
                <span className="gradient-text">Vision Together</span>
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Book a free 30-minute strategy call. No sales pitch, just insights 
                and honest recommendations for your project.
              </p>

              <motion.div 
                className="flex flex-wrap justify-center gap-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  "Response within 2 hours",
                  "Free project estimate",
                  "No obligation",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <AnimatedSection direction="left">
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden p-8 h-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                    
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                        Contact Information
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Reach out to us through any of these channels
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <motion.a
                        href="mailto:hello@digitalarchitects.in"
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-primary/20">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            Email Us
                          </div>
                          <div className="text-sm text-muted-foreground">
                            hello@digitalarchitects.in
                          </div>
                        </div>
                      </motion.a>

                      <motion.a
                        href="tel:+919876543210"
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-primary/20">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            Call Us
                          </div>
                          <div className="text-sm text-muted-foreground">
                            +91 98765 43210
                          </div>
                        </div>
                      </motion.a>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Visit Us
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Delhi, India
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Business Hours
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Mon - Sat: 10AM - 7PM IST<br />
                            24/7 Support for clients
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                      <div className="flex gap-3">
                        {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                          <motion.a
                            key={social}
                            href="#"
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-primary/20 text-sm font-medium text-foreground hover:text-primary transition-colors border border-white/10 hover:border-primary/30"
                          >
                            {social}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <AnimatedSection direction="right">
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden p-8"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
                    
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
                        {contactTypes.map((type) => (
                          <TabsTrigger
                            key={type.id}
                            value={type.id}
                            className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/20 data-[state=active]:to-accent/20 data-[state=active]:text-primary data-[state=active]:border-primary/40 border border-white/10 rounded-xl py-3 px-4 text-sm transition-all duration-300 hover:border-white/20"
                          >
                            <type.icon className="w-4 h-4 mr-2" />
                            {type.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="Your Name"
                              required
                              className="bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-xl h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@company.com"
                              required
                              className="bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-xl h-12"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-foreground">Company Name</Label>
                            <Input
                              id="company"
                              placeholder="Your Company"
                              className="bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-xl h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-foreground">Phone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all rounded-xl h-12"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-foreground">Project Type *</Label>
                            <Select required>
                              <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50 rounded-xl h-12">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-foreground">Budget Range</Label>
                            <Select>
                              <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50 rounded-xl h-12">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, "-")}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-foreground">Tell Us About Your Project *</Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your project, goals, and any specific requirements..."
                            rows={5}
                            required
                            className="bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 transition-all resize-none rounded-xl"
                          />
                        </div>

                        <p className="text-xs text-muted-foreground">
                          We respect your privacy. Your information is encrypted and never shared 
                          with third parties. By submitting, you agree to our Privacy Policy.
                        </p>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(var(--primary-rgb), 0.4)" }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50 transition-all shadow-lg shadow-primary/25"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending...
                            </span>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </Tabs>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ or Additional Info */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container-wide relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-foreground mb-6">
                Still Have <span className="gradient-text">Questions?</span>
              </h2>
              <p className="body-md text-muted-foreground mb-8">
                Check out our FAQ section or reach out directly. We're always happy to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  View Our Services
                </motion.a>
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  See Our Work
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
