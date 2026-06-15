import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />

      {/* Floating Contact Tab — desktop only */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Link href="/contact">
          <div className="flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase px-3 py-3 rounded-r-lg shadow-lg hover:bg-primary/90 transition-colors cursor-pointer"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Contact Us
          </div>
        </Link>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link href="/book">
          <Button className="w-full flex items-center justify-center gap-2 shadow-lg" size="lg">
            <Calendar className="w-4 h-4" /> Book a Complimentary Focus Session
          </Button>
        </Link>
      </div>
    </div>
  );
}
