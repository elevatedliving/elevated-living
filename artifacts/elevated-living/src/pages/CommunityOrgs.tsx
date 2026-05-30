import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { FloatingAssessmentButton } from "@/components/FloatingAssessmentButton";

export function CommunityOrgs() {
  return (
    <Layout>
      <Helmet>
        <title>For Community Orgs / Social Enterprises | Elevated Living</title>
        <meta name="description" content="Specialist operational and impact support for community organisations and social enterprises. Elevated Living helps you evidence your work, build capacity, and sustain what matters." />
        <meta property="og:title" content="For Community Orgs / Social Enterprises | Elevated Living" />
        <meta property="og:description" content="Specialist operational and impact support for community organisations and social enterprises. Elevated Living helps you evidence your work, build capacity, and sustain what matters." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <FloatingAssessmentButton />

      {/* Opening */}
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6">For Community Orgs / Social Enterprises</h1>
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

      {/* Services & Pricing */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-3">Services &amp; Fees</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            All prices exclude VAT. A written agreement is issued before every engagement. Bespoke packages are available on request.
          </p>

          {/* The Elevated Edit */}
          <div className="mb-12">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">The Elevated Edit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elevated Living's signature thinking and strategy service — cutting through the noise to find what matters and move your organisation forward. Written action plan included in all sessions above Power Hour. The Power Hour is the recommended entry point for new clients.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Best start</p>
                  <h4 className="font-semibold text-lg mb-1">Power Hour</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A focused 60-minute session — one challenge, cut through, one clear next step.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£125</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Half-Day</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">An in-depth session — where your organisation is now and where it needs to go, with clear priorities and a practical plan.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£350</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Full Day</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A full-day session — your organisation's vision, direction and priorities worked through in full, with a written roadmap and 30-day follow-up.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£650</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Two 60-minute sessions per month plus async support between sessions. Priority scheduling included. Retainers payable in advance.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£375<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* VA Support */}
          <div className="mb-12">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Virtual Assistant Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Practical admin support to take the day-to-day off your plate — emails, scheduling, coordination and operational support. Ideal for organisations without dedicated admin staff. Minimum one-month commitment on retainers. Additional hours within a retainer month are charged at £45/hour.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Ad Hoc Support</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Flexible support as and when you need it. Minimum 2 hours per booking.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£50<span className="text-base font-normal text-muted-foreground">/hour</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Starter</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">8 hours per month of dedicated support to take the admin off your plate and free your team up for the work that matters.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£360<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Regular</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">16 hours per month of consistent support — the equivalent of two solid days off your organisation's to-do list every month.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£680<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="mb-12">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hands-on delivery backed by 20+ years in community and housing sector programme management. A scoping session is recommended before any ongoing work begins.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Recommended first step</p>
                  <h4 className="font-semibold text-lg mb-1">Project Scoping &amp; Setup</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A half-day session — scope, timeline, priorities, risk and next actions mapped out before delivery begins.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£495</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Ad Hoc Day Rate</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Standalone project days, flexible to your needs — ideal for short bursts of focused delivery.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£600<span className="text-base font-normal text-muted-foreground">/day</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Light</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">2 days per month plus ongoing oversight — keeps momentum without a full-time commitment.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£1,050<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Standard</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">3 days per month with active management — the right level for a project that needs consistent hands-on delivery.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£1,550<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Intensive</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">4 days per month for complex delivery — sustained focus on a high-priority project over several months.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£2,000<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Development */}
          <div className="mb-12">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Partnership Development &amp; Community Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building the connections that help your organisation grow and sustain. From identifying the right relationships to facilitating meaningful community consultation — all work is scoped individually to your context.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Partnership Mapping &amp; Strategy</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A half-day session to identify and prioritise the right relationships to support your vision and growth.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">From £495</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Community Consultation Support</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Planning and facilitating meaningful community engagement that delivers real insight and genuine participation.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">From £600</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Ongoing Partnership Management</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Regular support to manage and develop your key partnerships over time — scoped to your organisation's specific relationships.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">From £500<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Report Writing */}
          <div className="mb-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Impact Report Writing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professionally capturing and communicating the difference your organisation makes — for funders, commissioners and the communities you serve. Bespoke to your outcomes, audience, and funder requirements. A free scoping consultation is always the right first step.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                Pricing confirmed following a free 20-minute consultation — we scope what's needed before any commitment is made.
              </p>
              <div className="mt-4">
                <Link href="/book">
                  <Button variant="outline" size="sm">Book a free consultation →</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Self-Assessment */}
      <Section id="assessment">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-3">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Answer seven quick questions and we'll recommend the right support for your organisation — no jargon, no pressure.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-background">
            <iframe
              src={`${import.meta.env.BASE_URL}assessments/vcse.html`}
              title="Find your support — community organisations and social enterprises"
              className="w-full"
              style={{ height: "820px", border: "none" }}
              scrolling="yes"
            />
          </div>
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
