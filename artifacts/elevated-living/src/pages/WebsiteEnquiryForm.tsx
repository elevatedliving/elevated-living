import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

const TALLY_SCRIPT_URL = "https://tally.so/widgets/embed.js";
const TALLY_FORM_URL =
  "https://tally.so/embed/rjXOxL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function WebsiteEnquiryForm() {
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
    <Layout>
      <Helmet>
        <title>Website Enquiry Form | Elevated Living</title>
        <meta
          name="description"
          content="Share details about the website you would like Elevated Living to build."
        />
        <meta property="og:title" content="Website Enquiry Form | Elevated Living" />
        <meta
          property="og:description"
          content="Share details about the website you would like Elevated Living to build."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4" data-testid="heading-website-enquiry-form">
              Website Enquiry Form
            </h1>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              ref={iframeRef}
              data-tally-src={TALLY_FORM_URL}
              loading="lazy"
              width="100%"
              height={1945}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Website Build — Enquiry Form"
              className="block w-full border-0"
              data-testid="iframe-website-enquiry-form"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
