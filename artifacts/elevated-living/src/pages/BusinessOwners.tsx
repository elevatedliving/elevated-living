import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export function BusinessOwners() {
  return (
    <Layout>
      <Helmet>
        <title>Business Support in London | Elevated Living</title>
        <meta
          name="description"
          content="Practical business support for solopreneurs and small business owners. Work online nationally or internationally; in-person availability depends on location."
        />
        <link rel="canonical" href="https://www.elevatedliving.uk/for-business-owners" />
        <meta property="og:title" content="Business Support in London | Elevated Living" />
        <meta
          property="og:description"
          content="Practical business support for solopreneurs and small business owners. Work online nationally or internationally; in-person availability depends on location."
        />
        <meta property="og:url" content="https://www.elevatedliving.uk/for-business-owners" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Support in London | Elevated Living" />
        <meta
          name="twitter:description"
          content="Practical business support for solopreneurs and small business owners. Work online nationally or internationally; in-person availability depends on location."
        />
        <meta name="twitter:image" content="https://www.elevatedliving.uk/images/og-social.png" />
      </Helmet>

      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
            Solopreneur and small business support
          </p>
          <h1 className="mb-5">Business support for solopreneurs and small business owners</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            You started your business because you were good at something. Then the invoices, inbox, projects and endless to-do list arrived. Elevated Living offers practical support to help you find focus and move the work forward.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Services are available online nationally and internationally. In-person availability depends on your location.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/book">
              <Button size="lg" className="w-full font-bold sm:w-auto">
                Book a complimentary session →
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4">Practical support for the work behind your business</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Choose focused thinking time for a specific challenge, or delivery support when a project needs more structure and follow-through.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Focus and strategy sessions</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                One-to-one thinking and strategy sessions for when you are doing too much, going round in circles, or need a clear next step. Work through the challenge, set priorities and leave with a practical way forward.
              </p>
              <Link href="/services" className="font-semibold text-primary underline underline-offset-4">
                See focus and strategy options →
              </Link>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Fractional project management</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Get support with project scoping, timelines, coordination and accountability when you do not have the capacity to drive everything yourself—without taking on a full-time hire.
              </p>
              <Link href="/services" className="font-semibold text-primary underline underline-offset-4">
                Explore project support →
              </Link>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5">A useful first step, without pressure</h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Start with a complimentary 20-minute conversation. Talk through what is taking up your time, what you want to get moving, and whether Elevated Living is the right fit. A written agreement is provided before any engagement begins.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/book">
              <Button size="lg" className="w-full font-bold sm:w-auto">
                Book your complimentary session →
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ask a question
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
