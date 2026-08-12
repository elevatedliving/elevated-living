import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "[ Testimonial copy to be added ]",
    name: "[ Name ]",
    role: "[ Role / Organisation ]",
    hasLogo: true,
  },
  {
    id: 2,
    quote: "[ Testimonial copy to be added ]",
    name: "[ Name ]",
    role: "[ Role / Organisation ]",
    hasLogo: true,
  },
  {
    id: 3,
    quote: "[ Testimonial copy to be added ]",
    name: "[ Name ]",
    role: "[ Role / Organisation ]",
    hasLogo: true,
  },
  {
    id: 4,
    quote: "[ Testimonial copy to be added ]",
    name: "[ Name ]",
    role: "[ Role / Organisation ]",
    hasLogo: true,
  },
];

export function Testimonials() {
  return (
    <Layout>
      <Helmet>
        <title>Client Stories | Elevated Living</title>
        <meta name="description" content="Hear from the solopreneurs, business owners and community org leaders who've worked with Elevated Living — and what changed when they stopped trying to do it all alone." />
        <meta property="og:title" content="Client Stories | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Hear from the solopreneurs, business owners and community org leaders who've worked with Elevated Living — and what changed when they stopped trying to do it all alone." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-4">Words from Clients</h1>
          <p className="text-xl text-muted-foreground">
            Don't just take my word for it. Here's what happens when we clear the operational roadblocks.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm relative flex flex-col gap-6">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              {/* Logo / image placeholder */}
              <div className="w-full h-16 rounded-xl border-2 border-dashed border-border bg-muted/50 flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">[ Client logo / image ]</span>
              </div>

              {/* Quote */}
              <p className="text-lg text-muted-foreground/80 relative z-10 font-serif italic leading-relaxed">
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="mt-auto">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
