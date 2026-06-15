import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CAL_ORIGIN = "https://cal.eu";

interface CalBookingProps {
  calLink: string;
  label?: string;
}

export function CalBooking({ calLink, label = "Book this service" }: CalBookingProps) {
  const [open, setOpen] = useState(false);
  const url = `${CAL_ORIGIN}/${calLink}?embed=true`;

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="mt-3 shrink-0"
      >
        {label} →
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm sm:p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative bg-background rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-3xl overflow-hidden flex flex-col"
            style={{ height: "92dvh", maxHeight: "92dvh" }}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border shrink-0">
              <p className="font-semibold text-foreground text-sm sm:text-base">{label}</p>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={url}
                title={label}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="payment"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
