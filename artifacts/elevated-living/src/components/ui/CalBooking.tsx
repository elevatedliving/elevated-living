import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CalBookingProps {
  namespace: string;
  calLink: string;
  label?: string;
}

export function CalBooking({ namespace, calLink, label = "Book this service" }: CalBookingProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [open, namespace]);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <p className="font-semibold text-foreground">{label}</p>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto flex-1">
              <Cal
                namespace={namespace}
                calLink={calLink}
                style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
                config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
