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
        <div className="px-5 pb-6 pt-8 sm:px-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="max-w-xl">
              <h2 id="signup-popup-title" className="mb-2 text-2xl">
                Stay in the loop
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sign up for useful resources, upcoming sessions, and news from Elevated Living.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close signup form"
              className="flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full p-2 text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ZohoSignupForm />
        </div>
      </div>
    </div>
  );
}