import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Services | Elevated Living</title>
        <meta name="description" content="The full range of Elevated Living services — operational support, strategy sessions, project management, partnership development, and impact report writing." />
        <meta property="og:title" content="Services | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="The full range of Elevated Living services — operational support, strategy sessions, project management, partnership development, and impact report writing." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <Section className="pt-20 pb-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4">Services Overview</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything Elevated Living offers — in one place. Browse the service catalogue below, or scroll down to view The Small Business Reset presentation.
          </p>
        </div>
      </Section>

      {/* Service Catalogue PDF */}
      <Section bg="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-2">Service Catalogue</h2>
          <p className="text-muted-foreground mb-6">A full overview of services and fees. You can scroll through it below or open it in a new tab to save a copy.</p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
            <iframe
              src={`${import.meta.env.BASE_URL}Elevated-Living-Services-Overview-2026.pdf`}
              className="w-full"
              style={{ height: "780px", display: "block" }}
              title="Elevated Living Service Catalogue"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Not displaying?{" "}
            <a
              href={`${import.meta.env.BASE_URL}Elevated-Living-Services-Overview-2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Open the PDF in a new tab
            </a>
          </p>
        </div>
      </Section>

      {/* The Small Business Reset */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-2">The Small Business Reset</h2>
          <p className="text-muted-foreground mb-6">A presentation from Elevated Living to help you reset, refocus, and move forward with clarity.</p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card p-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://gamma.app/embed/04mj68lrk2o9b52"
                style={{ width: "100%", maxWidth: "100%", height: "500px", display: "block" }}
                allow="fullscreen"
                title="The Small Business Reset"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-primary-foreground mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Book a free 20-minute conversation — no obligation, no pitch. We'll work out together what would make the biggest difference right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-primary font-bold w-full sm:w-auto">
                Book a free consultation →
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                Get in touch →
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
