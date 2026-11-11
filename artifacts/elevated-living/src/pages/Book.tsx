import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Helmet } from "react-helmet-async";

const FREE_CONSULTATION_URL = "https://cal.com/elevatedlivingenterprise/free-consultation";

export function Book() {
  return (
    <Layout>
      <Helmet>
        <title>Free consultation | Elevated Living</title>
        <meta name="description" content="Free consultation with Elevated Living to talk through where you're stuck, what's getting in the way, and what support could help." />
        <meta property="og:title" content="Free consultation | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Free consultation with Elevated Living to talk through where you're stuck, what's getting in the way, and what support could help." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20 pb-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">Free consultation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Free consultation: a 20-minute conversation to talk through where you're stuck, what's getting in the way, and whether Elevated Living is the right fit. No pressure, no obligation.
          </p>
        </div>
      </Section>

      <Section className="pt-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-border/30">
            <iframe
              src={FREE_CONSULTATION_URL}
              title="Free consultation"
              className="w-full"
              style={{ height: "clamp(500px, 75vh, 700px)", border: "none" }}
              allow="payment"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
