import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Calendar, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

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

export function Contact() {
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
        <title>Contact | Elevated Living</title>
        <meta name="description" content="Get in touch with Elevated Living. Book a complimentary focus session or ask about impact reports and support for your organisation or business." />
        <meta property="og:title" content="Contact | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Get in touch with Elevated Living. Book a complimentary focus session or ask about impact reports and support for your organisation or business." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-4">Let's Talk</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need project focus, admin support, or an impact report, the best way to start is with a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Booking Column */}
            <div>
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" /> Book a Call
              </h2>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://cal.eu/elevatedlivingenterprise/free-consultation"
                  title="Book a complimentary focus session"
                  className="w-full"
                  style={{ height: "clamp(480px, 60vh, 700px)", border: "none" }}
                  allow="payment"
                />
              </div>
            </div>

            {/* Message Form Column */}
            <div>
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" /> Send a Message
              </h2>
              <iframe
                ref={iframeRef}
                data-tally-src={TALLY_FORM_URL}
                loading="lazy"
                width="100%"
                height={1945}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Get in touch — Enquiry Form"
                className="block w-full border-0"
              />
            </div>
          </div>

        </div>
      </Section>
    </Layout>
  );
}
