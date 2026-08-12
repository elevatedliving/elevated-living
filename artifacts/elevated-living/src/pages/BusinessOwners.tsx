import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export function BusinessOwners() {
  return (
    <Layout>
      <Helmet>
        <title>For Business Owners | Elevated Living</title>
        <meta name="description" content="Operational support for solopreneurs and small business owners — from focus sessions and VA support to Access to Work guidance. Stop drowning in admin and start moving forward." />
        <meta property="og:title" content="For Business Owners | Elevated Living" />
        <meta property="og:description" content="Operational support for solopreneurs and small business owners — from focus sessions and VA support to Access to Work guidance. Stop drowning in admin and start moving forward." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Opening */}
      <Section className="pt-20 pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-3">For Solopreneurs / Small Business Owners</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            You started your business because you were good at something. You had the idea, the drive, the passion — and then the business side of business arrived. The invoices. The inbox. The to-do list that never gets shorter.
          </p>
        </div>
      </Section>

      {/* Services CTA */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Elevated Living offers a range of services designed to take the pressure off — so you can get back to doing the work you actually love.
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
          <h2 className="text-primary-foreground mb-4">Ready to make sense of the chaos?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Book a complimentary 20-minute session — no obligation, no sales pitch. Just an honest conversation about where you are and whether Elevated Living can help.
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
