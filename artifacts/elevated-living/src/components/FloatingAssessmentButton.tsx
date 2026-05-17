import { useEffect, useState } from "react";
import { HelpCircle } from "lucide-react";

interface Props {
  targetId?: string;
}

export function FloatingAssessmentButton({ targetId = "assessment" }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToAssessment = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToAssessment}
      aria-label="Take the self-assessment for an instant recommendation"
      className="floating-assessment-btn fixed bottom-6 right-6 z-50 w-36 h-36 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4"
    >
      <HelpCircle className="w-5 h-5 shrink-0 mb-0.5" />
      <span className="text-center leading-snug" style={{ fontSize: "11px", fontWeight: 500 }}>
        Not sure where to start?
      </span>
      <span className="text-center leading-snug opacity-90" style={{ fontSize: "10px", fontWeight: 400 }}>
        Take the quick self-assessment for an instant recommendation
      </span>
    </button>
  );
}
