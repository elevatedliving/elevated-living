import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/for-business-owners", label: "For Solopreneurs" },
  {
    href: "/for-community-organisations",
    label: "For Community Orgs",
    children: [
      { href: "/impact-report-writing", label: "Impact Report Writing" },
    ],
  },
  { href: "/workshops-events", label: "Workshops & Events" },
  { href: "/contact", label: "Contact" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/blog", label: "Blog" },
    ],
  },
];

function DropdownLink({ link, location }: { link: NavLink; location: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = location === link.href || link.children?.some(c => c.href === location);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href}
        className={cn(
          "text-sm font-medium transition-colors relative group text-primary hover:text-[#1B2B5E] flex items-center gap-1",
          isActive && "text-[#1B2B5E]"
        )}
      >
        {link.label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", open && "rotate-180")} />
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#1B2B5E] rounded-full"
          />
        )}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-xl shadow-lg py-2 z-50"
          >
            {link.children?.map(child => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-2 text-sm font-medium text-primary hover:text-[#1B2B5E] hover:bg-accent/50 transition-colors",
                  location === child.href && "text-[#1B2B5E] bg-accent/30"
                )}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <DropdownLink key={link.href} link={link} location={location} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group text-primary hover:text-[#1B2B5E]",
                    location === link.href && "text-[#1B2B5E]"
                  )}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#1B2B5E] rounded-full"
                    />
                  )}
                </Link>
              )
            )}

          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/book">
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-center text-[11px] font-semibold leading-tight p-4 hover:bg-primary/90 transition-colors cursor-pointer">
                  Book a Complimentary Focus Session
                </div>
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
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.href ? null : link.href)}
                        className={cn(
                          "w-full flex items-center justify-between font-semibold pb-2 border-b border-border/50 text-primary",
                          location === link.href && "text-[#1B2B5E]"
                        )}
                      >
                        <Link href={link.href}>{link.label}</Link>
                        <ChevronDown className={cn("w-4 h-4 transition-transform shrink-0", mobileExpanded === link.href && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            {link.children.map(child => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block pl-4 pt-3 pb-1 text-base font-medium text-primary border-l-2 border-primary/30 ml-2 mt-2",
                                  location === child.href && "text-[#1B2B5E] border-[#1B2B5E]"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block font-semibold pb-2 border-b border-border/50 text-primary",
                        location === link.href && "text-[#1B2B5E]"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-8">
                <Link href="/book">
                  <Button className="w-full rounded-full" size="lg">Book a Complimentary Focus Session</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
