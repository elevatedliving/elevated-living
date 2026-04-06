import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/for-business-owners", label: "For Business Owners" },
  { href: "/for-community-organisations", label: "For VCSEs" },
  { href: "/impact-report-writing", label: "Impact Report Writing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <img
              src={`${import.meta.env.BASE_URL}images/elevated-living-logo.png`}
              alt="Elevated Living"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}

            <Link href="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary">
              Blog
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="default">Book a Complimentary Focus Session</Button>
              </Link>
            </div>
            
            <button
              className="lg:hidden p-2 text-foreground z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-0 bg-background z-40 flex flex-col pt-24 px-6 overflow-y-auto pb-24"
          >
            <div className="flex flex-col gap-6 text-lg">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-semibold pb-2 border-b border-border/50",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link href="/blog" className="font-semibold pb-2 border-b border-border/50">
                Blog
              </Link>
              
              <Link href="/contact" className="font-semibold pb-2 border-b border-border/50">
                Contact
              </Link>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="w-full" size="lg">Book a Complimentary Focus Session</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
