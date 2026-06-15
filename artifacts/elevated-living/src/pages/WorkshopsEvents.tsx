import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Helmet } from "react-helmet-async";

export function WorkshopsEvents() {
  return (
    <Layout>
      <Helmet>
        <title>Workshops &amp; Events | Elevated Living</title>
        <meta name="description" content="Workshops and events from Elevated Living — practical skills, community learning, and professional development sessions open to all." />
        <meta property="og:title" content="Workshops &amp; Events | Elevated Living" />
        <meta property="og:description" content="Workshops and events from Elevated Living — practical skills, community learning, and professional development sessions open to all." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4">Workshops &amp; Events</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practical, accessible learning sessions designed to build real skills — whether you're running a business, leading an organisation, or just looking to get ahead.
          </p>
        </div>
      </Section>

      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-8">Upcoming Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Getting Ahead With AI */}
            <a
              href="https://www.eventbrite.co.uk/e/1990882780991?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/getting-ahead-with-ai.png`}
                alt="Getting Ahead With AI — Practical AI Skills for Beginners"
                className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 flex flex-col gap-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">Workshop</p>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
                  Getting Ahead With AI — Practical AI Skills for Beginners
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A hands-on introductory session covering practical AI tools and techniques you can start using straight away — no technical background needed.
                </p>
                <div className="text-sm text-muted-foreground mt-1">
                  <p className="font-medium text-foreground">6 August · 18:00</p>
                  <p>Academy of Success, London</p>
                </div>
                <span className="mt-2 font-semibold text-primary group-hover:underline text-sm">Book on Eventbrite →</span>
              </div>
            </a>

          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4">Want to be the first to hear about new events?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Get in touch and we'll keep you updated when new workshops are added.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </Section>
    </Layout>
  );
}
