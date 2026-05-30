import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingProps {
  namespace: string;
  calLink: string;
}

export function CalBooking({ namespace, calLink }: CalBookingProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return (
    <div className="mt-4 rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
      <div className="px-6 pt-5 pb-2">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">Book this service</p>
      </div>
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
}
