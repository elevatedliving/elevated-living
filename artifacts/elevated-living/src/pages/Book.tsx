import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export function Book() {
  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Book a Complimentary Focus Session | Elevated Living</title>
        <meta name="description" content="Book a free 30-minute focus session with Elevated Living. We'll talk through where you're stuck, what's getting in the way, and how we can help." />
        <meta property="og:title" content="Book a Complimentary Focus Session | Elevated Living" />
        <meta property="og:description" content="Book a free 30-minute focus session with Elevated Living. We'll talk through where you're stuck, what's getting in the way, and how we can help." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20 pb-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 text-primary font-semibold uppercase tracking-wider text-sm">Free Session</div>
          <h1 className="mb-4">Book a Complimentary Focus Session</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A free 30-minute conversation to talk through where you're stuck, what's getting in the way, and whether Elevated Living is the right fit. No pressure, no obligation.
          </p>
        </div>
      </Section>

      <Section className="pt-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden shadow-sm border border-border/30"
            data-url="https://calendly.com/contact-elevatedliving/30min"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </Section>
    </Layout>
  );
}
