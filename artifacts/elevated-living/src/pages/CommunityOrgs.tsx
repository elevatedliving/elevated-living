import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export function CommunityOrgs() {
  return (
    <Layout>
      <Helmet>
        <title>For Community Orgs / Social Enterprises | Elevated Living</title>
        <meta name="description" content="Specialist operational and impact support for community organisations and social enterprises. Elevated Living helps you evidence your work, build capacity, and sustain what matters." />
        <meta property="og:title" content="For Community Orgs / Social Enterprises | Elevated Living" />
        <meta property="og:description" content="Specialist operational and impact support for community organisations and social enterprises. Elevated Living helps you evidence your work, build capacity, and sustain what matters." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Opening */}
      <Section className="pt-20 pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-3">For Community Orgs / Social Enterprises</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The people doing the most important work often have the least support behind them. You started your organisation because you cared deeply about your community. Now you're drowning in admin, chasing funders, and wondering how everyone else seems to manage it.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mt-4">
            They don't. They just have better support. That's where Elevated Living comes in.
          </p>
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
            Elevated Living brings three decades of built-in context, meaning we hit the ground running from day one.
          </p>
        </div>
      </Section>

      {/* Services CTA */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Elevated Living offers a range of services built around the realities of running a community organisation — from project management and impact reporting to strategy and operational support.
          </p>
          <Link href="/services">
            <Button size="lg" className="font-bold">
              View our services →
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-primary-foreground mb-4">Ready to get the support your organisation deserves?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Book a complimentary 20-minute session — no obligation, no sales pitch. Just an honest conversation about where your organisation is and whether Elevated Living can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-primary font-bold w-full sm:w-auto">
                Book your complimentary session →
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
