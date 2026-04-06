import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { BrainCircuit } from "lucide-react";
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
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Opening */}
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6">For Business Owners &amp; Solopreneurs</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            You're a consultant, creative, or solopreneur drowning in admin and losing sight of why you started. You need focus, structure, and someone who actually follows through.
          </p>
        </div>
      </Section>

      {/* The reality */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-8">Sound familiar?</h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              You started your business because you were good at something. You had the idea, the drive, the passion — and then the business side of business arrived.
            </p>
            <p>
              The invoices. The inbox. The projects you said yes to because you couldn't afford to say no. The to-do list that never gets shorter.
            </p>
            <p>
              To the outside world, you look like you've got it together. Inside, it's a different story.
            </p>
            <p>
              That's not failure. That's what happens when brilliant, passionate people build something without anyone helping them with the rest of it.
            </p>
          </div>
        </div>
      </Section>

      {/* What we offer */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-10">What we offer</h2>
          <div className="space-y-8">

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl mb-3">Project Focus Sessions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sometimes you just need someone to sit with you, look at everything on your plate, and help you make sense of it. You'll leave with a clear picture of where you are, where you're going, and what needs to happen next.
              </p>
              <p className="text-sm text-primary/80 italic">
                Start here if everything feels overwhelming and you're not sure where to begin.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl mb-3">Virtual Assistant Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ongoing, practical, hands-on support. Weekly planning sessions, action logs that actually get followed up, and someone in your corner making sure things don't fall through the cracks. Not a task-ticking service — a proper working partnership.
              </p>
              <p className="text-sm text-primary/80 italic">
                Start here if you know what needs doing but keep running out of time and energy to do it.
              </p>
            </div>

            <div className="bg-accent/50 border-2 border-primary/20 rounded-2xl p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <BrainCircuit className="w-40 h-40 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                  <BrainCircuit className="w-3.5 h-3.5" /> Access to Work eligible
                </div>
                <h3 className="text-xl mb-3">ADHD-Friendly Business Support</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Standard business advice often doesn't account for how the ADHD brain actually works. Elevated Living offers support built specifically around you — systems that will actually stick, not just look good on paper. If you're eligible for the DWP's Access to Work scheme, this support can be fully or partially funded. You make the application; we deliver the support.
                </p>
                <p className="text-sm text-primary/80 italic">
                  Start here if you've always worked differently and finally want support that gets that.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-primary-foreground mb-4">Ready to make sense of the chaos?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Book a complimentary focus session — no obligation, no sales pitch. Just an honest conversation about where you are and whether Elevated Living can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-primary font-bold w-full sm:w-auto">
                Book your complimentary focus session →
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
