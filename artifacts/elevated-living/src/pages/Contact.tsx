import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Calendar, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Contact() {

  return (
    <Layout>
      <Helmet>
        <title>Contact | Elevated Living</title>
        <meta name="description" content="Get in touch with Elevated Living. Book a complimentary focus session, ask about impact report writing, or find out how we can support your organisation or business." />
        <meta property="og:title" content="Contact | Elevated Living" />
        <meta property="og:description" content="Get in touch with Elevated Living. Book a complimentary focus session, ask about impact report writing, or find out how we can support your organisation or business." />
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

            {/* Zoho Form Column */}
            <div>
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" /> Send a Message
              </h2>
              <iframe
                aria-label="Contact Elevated Living"
                frameBorder="0"
                className="w-full"
                style={{ height: "clamp(420px, 55vh, 500px)", border: "none" }}
                src="https://forms.zohopublic.eu/elevatedlivingenterprisegm1/form/contactelevatedlivingenterprise/formperma/mKCVYfjzwhDyApINx2pCQK9o4oDVfhKDYg0qWVslecc"
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
