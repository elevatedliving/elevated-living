import { Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";

const QUIZ_PATH = "/whats-keeping-you-stuck";

export function FloatingAssessmentButton() {
  const [location] = useLocation();

  // Keep the quiz page itself unobstructed while the embedded form is in use.
  if (location === QUIZ_PATH) return null;

  return (
    <Link
      href={QUIZ_PATH}
      aria-label="Take a 2-minute quiz to find out What's Keeping You Stuck?"
      data-testid="link-floating-stuck-quiz"
      className="floating-quiz-cta fixed bottom-[5.375rem] right-3 z-[45] flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-[#fff1ce] px-2 text-center text-[#382714] shadow-xl transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#b7833f]/40 sm:bottom-24 sm:right-5 sm:h-[120px] sm:w-[120px] sm:px-3 lg:bottom-7 lg:right-7 lg:h-36 lg:w-36"
    >
      <Sparkles aria-hidden="true" className="mb-1 h-3 w-3 shrink-0 text-[#fff8e7] sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
      <span className="text-[8px] font-medium leading-tight sm:text-[9px] lg:text-[11px]">
        Take a 2-minute quiz to find out
      </span>
      <span className="mt-1 font-serif text-[9px] font-semibold leading-tight sm:text-[10px] lg:text-xs">
        What&apos;s Keeping You Stuck?
      </span>
    </Link>
  );
}
