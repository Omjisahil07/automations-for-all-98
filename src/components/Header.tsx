import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsProgramsOpen(false);
    if (isProgramsOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isProgramsOpen]);

  const programs = [
    { name: "Automation Bootcamp", path: "/bootcamp", description: "2-Day Intensive Workshop" },
    { name: "Automation Accelerator", path: "/accelerator", description: "4-Week Program" },
    { name: "Agentic AI Mastery", path: "/mastery", description: "12-Week Transformation" },
    { name: "Launchpad (Free)", path: "/launchpad", description: "Free 90-Min Masterclass" },
  ];

  const navItems = [
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "border-b border-white/10 shadow-lg shadow-black/20" 
          : "border-b border-transparent"
      }`}
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/1.png" className="w-6 h-6" />
            </motion.div>
            <div>
              <h1 className="text-xl font-heading font-bold gradient-primary bg-clip-text text-transparent">
                Automation School™
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Programs Dropdown */}
            <div className="relative">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProgramsOpen(!isProgramsOpen);
                }}
                className="relative text-sm font-medium text-muted-foreground hover:text-white transition-colors px-3 py-1 group flex items-center gap-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
              </motion.button>

              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-card border border-border/50 rounded-xl shadow-luxury overflow-hidden z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {programs.map((program) => (
                      <Link
                        key={program.path}
                        to={program.path}
                        onClick={() => {
                          setIsProgramsOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-4 py-3 hover:bg-primary/10 transition-colors border-b border-border/30 last:border-0"
                      >
                        <div className="font-medium text-foreground">{program.name}</div>
                        <div className="text-xs text-muted-foreground">{program.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-white transition-colors px-3 py-1 group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="cta" size="sm" className="rounded-full text-sm relative overflow-hidden group">
                <span className="relative z-10">Start Learning</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-muted/50 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="border-t border-white/10 py-4 bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Programs */}
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground uppercase tracking-wider px-4">Programs</div>
                {programs.map((program) => (
                  <Link
                    key={program.path}
                    to={program.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-medium text-muted-foreground hover:text-white transition-colors hover:bg-primary/20 rounded-lg px-4 py-2"
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left text-sm font-medium text-muted-foreground hover:text-white transition-colors hover:bg-primary/20 rounded-full px-4 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Link to="/launchpad" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="cta"
                    size="sm"
                    className="rounded-full w-full text-sm"
                  >
                    Start Learning Free
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      </div>
      
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm -z-10 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </motion.header>
  );
};

export default Header;
