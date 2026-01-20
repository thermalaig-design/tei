import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-gradient-to-r from-background/70 via-card/60 to-background/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
            : "bg-gradient-to-r from-background/30 via-transparent to-background/30 backdrop-blur-md"
        )}
      >
        <div className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        
        <nav className="container-wide relative">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="/image.png" 
                  alt="Thermal Engineers and Insulators Private Limited Logo" 
                  className="relative rounded-full h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                  TEI
                </span>
                <span className="hidden md:block text-[10px] text-muted-foreground/70 font-medium tracking-wide">
                  Thermal Engineers and Insulators Private Limited
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-lg rounded-full px-2 py-1 border border-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden rounded-full px-6 py-2.5 font-semibold text-white transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <nav className="relative pt-24 px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "block py-4 text-2xl font-display font-semibold transition-colors",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link to="/contact" className="w-full">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group overflow-hidden rounded-full w-full px-6 py-4 font-semibold text-white transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
                    <span className="relative flex items-center justify-center gap-2">
                      Get Started
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
