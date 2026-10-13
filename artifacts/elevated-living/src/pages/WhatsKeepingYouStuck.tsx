import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

const TALLY_SCRIPT_URL = "https://tally.so/widgets/embed.js";
const TALLY_FORM_URL = "https://tally.so/r/BzRN85?transparentBackground=1";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function WhatsKeepingYouStuck() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const loadTallyEmbed = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else if (!iframe.hasAttribute("src")) {
        iframe.src = iframe.dataset.tallySrc || TALLY_FORM_URL;
      }
    };

    if (window.Tally) {
      loadTallyEmbed();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_SCRIPT_URL}"]`,
    );
    const script = existingScript ?? document.createElement("script");

    script.addEventListener("load", loadTallyEmbed);
    script.addEventListener("error", loadTallyEmbed);

    if (!existingScript) {
      script.src = TALLY_SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      script.removeEventListener("load", loadTallyEmbed);
      script.removeEventListener("error", loadTallyEmbed);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>What&apos;s Keeping You Stuck? | Elevated Living</title>
        <meta
          name="description"
          content="Take Elevated Living's 2-minute quiz to discover what's keeping you stuck."
        />
        <meta
          property="og:title"
          content="What&apos;s Keeping You Stuck? | Elevated Living"
        />
        <meta
          property="og:description"
          content="Take Elevated Living's 2-minute quiz to discover what's keeping you stuck."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://elevatedliving.uk/images/og-social.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main
        className="fixed inset-0 overflow-hidden bg-background"
        data-testid="page-whats-keeping-you-stuck"
      >
        <iframe
          ref={iframeRef}
          data-tally-src={TALLY_FORM_URL}
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="What's Keeping You Stuck?"
          className="absolute inset-0 block h-full w-full border-0"
          data-testid="iframe-whats-keeping-you-stuck"
        />
      </main>
    </>
  );
}
