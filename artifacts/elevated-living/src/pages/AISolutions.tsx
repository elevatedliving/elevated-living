import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function AISolutions() {
  return (
    <Layout>
      <Helmet>
        <title>AI Solutions | Elevated Living</title>
        <meta
          name="description"
          content="Website building, automated workflows, chatbots, and practical AI training for absolute beginners from Elevated Living."
        />
        <meta property="og:title" content="AI Solutions | Elevated Living" />
        <meta
          property="og:description"
          content="Website building, automated workflows, chatbots, and practical AI training for absolute beginners from Elevated Living."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">AI Solutions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practical AI support helps businesses and organisations work smarter. Elevated Living
            builds websites, automated workflows and chatbots, and provides friendly training for
            people who are completely new to AI.
          </p>
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3">Practical AI services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Straightforward builds shaped around each business or organisation&apos;s needs.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Website building</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Clear, effective websites that explain a business or organisation&apos;s services
                and help visitors take the next step. AI tools and integrations can be included
                where they add practical value.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Automated workflows</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Reduce repetitive admin by connecting everyday tasks and tools, so information
                moves smoothly and routine work takes less time.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Chatbot builds</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Helpful chatbots tailored to your services that answer common questions and guide
                visitors, with a clear route to a person when needed.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4">AI training for absolute beginners</h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Beginner-friendly, practical sessions introduce useful AI tools and demonstrate how
            they can support everyday tasks. No technical knowledge or previous experience is
            needed.
          </p>
          <Link href="/contact">
            <Button>Ask about AI training</Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}