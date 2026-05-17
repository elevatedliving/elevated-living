import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClass?: string;
  bg?: "default" | "muted" | "accent" | "primary" | "foreground";
  id?: string;
}

export function Section({ children, className, containerClass, bg = "default", id }: SectionProps) {
  const bgClasses = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    accent: "bg-accent text-foreground",
    primary: "bg-primary text-primary-foreground",
    foreground: "bg-foreground text-background",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", bgClasses[bg], className)}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </section>
  );
}
