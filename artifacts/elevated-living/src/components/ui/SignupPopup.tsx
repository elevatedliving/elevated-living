import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ZohoSignupForm } from "./ZohoSignupForm";

const POPUP_SHOWN_KEY = "elevated-living-signup-popup-shown";

export function SignupPopup({ disabled = false }: { disabled?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (disabled) return;

    try {
      if (sessionStorage.getItem(POPUP_SHOWN_KEY) === "true") return;
    } catch {
      // If storage is unavailable, the popup can still work for this visit.
    }

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(POPUP_SHOWN_KEY, "true");
      } catch {
        // Continue without session persistence if storage is unavailable.
      }
      setOpen(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [disabled]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-popup-title"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background shadow-2xl"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close signup form"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-5 pb-6 pt-8 sm:px-8">
          <div className="mb-5 max-w-xl pr-8">
            <h2 id="signup-popup-title" className="mb-2 text-2xl">
              Stay in the loop
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sign up for useful resources, upcoming sessions, and news from Elevated Living.
            </p>
          </div>
          <ZohoSignupForm />
        </div>
      </div>
    </div>
  );
}