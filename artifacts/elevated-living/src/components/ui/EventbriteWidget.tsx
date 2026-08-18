import { useEffect } from "react";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: {
        widgetType: string;
        eventId: string;
        iframeContainerId: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

const EVENT_ID = "1996444925515";
const CONTAINER_ID = `eventbrite-widget-container-${EVENT_ID}`;

export function EventbriteWidget() {
  useEffect(() => {
    const initWidget = () => {
      window.EBWidgets?.createWidget({
        widgetType: "checkout",
        eventId: EVENT_ID,
        iframeContainerId: CONTAINER_ID,
        iframeContainerHeight: 425,
        onOrderComplete: () => {
          console.log("Order complete!");
        },
      });
    };

    // If the script is already loaded, initialise immediately
    if (window.EBWidgets) {
      initWidget();
      return;
    }

    // Otherwise inject the script and wait for it to load
    const existing = document.querySelector(
      'script[src*="eb_widgets.js"]'
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", initWidget);
      return () => existing.removeEventListener("load", initWidget);
    }

    const script = document.createElement("script");
    script.src =
      "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js";
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div id={CONTAINER_ID} />
    </div>
  );
}
