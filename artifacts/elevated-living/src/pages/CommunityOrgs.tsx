import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export function CommunityOrgs() {
  return (
    <Layout>
      <Helmet>
        <title>Community Organisation Support | Elevated Living</title>
        <meta
          name="description"
          content="Project management, impact reports and partnership support for community organisations and social enterprises. Online nationally and internationally; in person by location."
        />
        <link rel="canonical" href="https://www.elevatedliving.uk/for-community-organisations" />
        <meta property="og:title" content="Community Organisation Support | Elevated Living" />
        <meta
          property="og:description"
          content="Project management, impact reports and partnership support for community organisations and social enterprises. Online nationally and internationally; in person by location."
        />
        <meta property="og:url" content="https://www.elevatedliving.uk/for-community-organisations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Community Organisation Support | Elevated Living" />
        <meta
          name="twitter:description"
          content="Project management, impact reports and partnership support for community organisations and social enterprises. Online nationally and internationally; in person by location."
        />
        <meta name="twitter:image" content="https://www.elevatedliving.uk/images/og-social.png" />
      </Helmet>

      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
            Support for community organisations and social enterprises
          </p>
          <h1 className="mb-5">Practical support for community organisations and social enterprises</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            You started your organisation because you care about your community. Now you may be balancing funded projects, partnerships, reporting and day-to-day operations with limited time and capacity. Elevated Living helps bring structure to the work so you can keep it moving.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            From project planning and delivery to impact reports and partnership development, support is scoped around your organisation, outcomes and stakeholder needs.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
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

      {/* 30 years context */}
      <Section>
        <div className="max-w-3xl mx-auto border-l-4 border-primary pl-8 py-4">
          <h2 className="text-3xl mb-4">30 Years of Sector Context</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            There's no need to explain what a CIC is, how tricky it is to balance restricted versus unrestricted funding, or the nuanced dynamics of local authority partnerships.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Elevated Living brings three decades of sector experience, helping projects get up to speed quickly.
          </p>
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4">Support for the work your organisation needs to deliver</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Get practical help with project capacity, evidence of impact, and the partnerships that support long-term work.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Fractional project management</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Project scoping, timelines, priorities, risk and coordination when you need experienced delivery support but not a full-time hire.
              </p>
              <Link href="/services" className="font-semibold text-primary underline underline-offset-4">
                Explore project support →
              </Link>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Impact report writing</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Turn your outcomes into a clear, professionally written report tailored to the questions funders, partners and other stakeholders need answered.
              </p>
              <Link href="/impact-report-writing" className="font-semibold text-primary underline underline-offset-4">
                See impact report support →
              </Link>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Partnerships and community engagement</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Identify and prioritise useful relationships, develop partnerships, or plan community consultation that supports genuine participation.
              </p>
              <Link href="/services" className="font-semibold text-primary underline underline-offset-4">
                Explore partnership support →
              </Link>
            </article>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-primary-foreground">Ready to talk through what your organisation needs?</h2>
          <p className="mb-10 text-lg leading-relaxed text-primary-foreground/80">
            Book a complimentary 20-minute conversation. No obligation or sales pitch—just an honest discussion about your priorities and whether Elevated Living can help.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/book">
              <Button size="lg" variant="secondary" className="w-full font-bold text-primary sm:w-auto">
                Book your complimentary session →
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
                Ask a question
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
