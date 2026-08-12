import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { CalBooking } from "@/components/ui/CalBooking";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { FloatingAssessmentButton } from "@/components/FloatingAssessmentButton";

export function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Services | Elevated Living</title>
        <meta name="description" content="Operational support for solopreneurs, small business owners, and community organisations. Strategy, project management, AI services, and impact support — all in one place." />
        <meta property="og:title" content="Services | Elevated Living" />
        <meta property="og:description" content="Operational support for solopreneurs, small business owners, and community organisations. Strategy, project management, AI services, and impact support — all in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <FloatingAssessmentButton />

      {/* Opening */}
      <Section className="pt-20 pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-3">Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            You started your business or organisation because you were good at something. You had the idea, the drive, the passion — and then the business side of business arrived. The invoices. The inbox. The to-do list that never gets shorter.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            The people doing the most important work often have the least support behind them. Whether you're a solopreneur, a small business owner, or leading a community organisation — you're probably drowning in admin, chasing funders or clients, and wondering how everyone else seems to manage it.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            They don't. They just have better support. That's where Elevated Living comes in.
          </p>
        </div>
      </Section>

      {/* Services & Pricing */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h2 className="text-2xl">Services &amp; Fees</h2>
            <a
              href={`${import.meta.env.BASE_URL}Elevated-Living-Services-Overview-2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/40 rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View Service Catalogue
            </a>
          </div>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            A written agreement is issued before every engagement. Bespoke packages are available on request.
          </p>

          {/* SERVICE 01 — The Elevated Edit */}
          <div className="mb-14">
            <div className="mb-6">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Service 01</p>
              <h3 className="text-xl font-semibold mb-2">The Elevated Edit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elevated Living's signature thinking and strategy service, built for people doing too much, thinking in circles, or simply needing expert space to get clear. One door with three ways in: one-to-one sessions, an in-person group session, and an ongoing membership.
              </p>
            </div>

            {/* 1:1 Sessions */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">1:1 Sessions</h4>
            <div className="grid gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Recommended entry point</p>
                    <h4 className="font-semibold text-lg mb-1">Power Hour</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">A focused 60-minute session on one key challenge — cut through, one clear next step.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£125</p>
                  </div>
                </div>
                <CalBooking calLink="elevatedlivingenterprise/elevated-edit-power-hour" label="Book Power Hour" />
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Half-Day Session</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">3.5 hours, with follow-up notes and key actions.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£350</p>
                  </div>
                </div>
                <CalBooking calLink="elevatedlivingenterprise/elevated-edit-half-day-session" label="Book Half-Day" />
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Full-Day Intensive</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">A full day of structured work, a written action plan, and a 30-day check-in to keep momentum going.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£650</p>
                  </div>
                </div>
                <CalBooking calLink="elevatedlivingenterprise/elevated-edit-full-day-intensive" label="Book Full Day" />
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Monthly Retainer</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Two 60-minute sessions per month, plus async support between sessions. Priority scheduling included. Payable in advance.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£325<span className="text-base font-normal text-muted-foreground">/month</span></p>
                  </div>
                </div>
                <CalBooking calLink="elevatedlivingenterprise/elevated-edit-monthly-retainer" label="Book Monthly Retainer" />
              </div>
            </div>

            {/* Group Session */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Group Session</h4>
            <div className="grid gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Elevated Edit — Group Session</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">A 2-hour in-person session. Guided through the six pressure points that get most small businesses and projects stuck — you leave with a named priority and the first steps of a 90-day action plan. Book individually, in person.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£25<span className="text-base font-normal text-muted-foreground">/person</span></p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/contact">
                    <Button variant="outline" size="sm">Contact to book →</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Membership */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Membership</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Free Membership</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Community access and ongoing support. Full details to follow.</p>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-primary">Free</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Membership</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Deeper ongoing support and accountability. Full details to follow.</p>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-primary">£17<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">Membership tiers are being finalised — this section will be updated once pricing and structure are confirmed.</p>
            <p className="text-xs text-muted-foreground mt-1 italic">The Elevated Edit is delivered online or in person across London and surrounding areas. Additional travel costs may apply outside Greater London.</p>
          </div>

          {/* SERVICE 02 — Fractional Project Management */}
          <div className="mb-14">
            <div className="mb-6">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Service 02</p>
              <h3 className="text-xl font-semibold mb-2">Fractional Project Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                You have a project that needs to happen, but not the capacity, structure, or headspace to drive it yourself. This service gives you senior project delivery support on a fractional basis: scoping, timelines, coordination, and accountability — without the cost or commitment of a full-time hire. Backed by 20+ years of specialist community and housing sector experience.
              </p>
            </div>
            <div className="grid gap-4 mb-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Recommended first step</p>
                    <h4 className="font-semibold text-lg mb-1">Project Scoping &amp; Setup</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Half-day discovery, scoping and project planning — scope, timeline, priorities, risk and next actions.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£495</p>
                  </div>
                </div>
                <CalBooking calLink="elevatedlivingenterprise/project-scoping-setup" label="Book Scoping Session" />
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Ad Hoc Day Rate</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Standalone project days, flexible to your needs — ideal for short bursts of focused delivery.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">£600<span className="text-base font-normal text-muted-foreground">/day</span></p>
                  </div>
                </div>
                <CalBooking calLink="elevatedlivingenterprise/project-adhoc-day-rate" label="Book a Project Day" />
              </div>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Monthly Retainers</h4>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Light</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">8 hours a month, ongoing oversight — keeps momentum without a full-time commitment.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£720<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Standard</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">12 hours a month, active management — the right level for a project that needs consistent hands-on delivery.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£1,020<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Intensive</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">16 hours a month for complex delivery — sustained focus on a high-priority project over several months.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£1,280<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">A scoping session is recommended before any retainer. Retainer rates are discounted against ad hoc booking. Minimum 1-month commitment, payable in advance, with 30 days' notice to end.</p>
          </div>

          {/* SERVICE 03 — AI Services */}
          <div className="mb-14">
            <div className="mb-6">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Service 03</p>
              <h3 className="text-xl font-semibold mb-2">AI Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Two ways in: learn to use AI yourself, or hand the work to someone who already knows how. Whether you want the skills or just the outcome, this service meets you where you are.
              </p>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Getting Ahead with AI</h4>
            <div className="grid gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Getting Ahead with AI</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">A cohort-based course for absolute beginners. No prior experience needed — delivered at a pace that works for people building confidence with AI tools for the first time. Delivered in partnership with Square AI Academy. Cohort dates and booking via their site.</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-lg font-semibold text-muted-foreground">Contact to discuss</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/contact">
                    <Button variant="outline" size="sm">Get in touch →</Button>
                  </Link>
                </div>
              </div>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Done-For-You AI Support</h4>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">AI Audit / Quick Win</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A single session identifying where AI could save real time, with one thing actually set up before you finish.</p>
                  <div className="mt-3">
                    <Link href="/contact"><Button variant="outline" size="sm">Get in touch →</Button></Link>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-lg font-semibold text-muted-foreground">Contact to discuss</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Ad Hoc AI Support</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Workflow builds, prompt templates, content systems and one-off automation, booked as needed.</p>
                  <div className="mt-3">
                    <Link href="/contact"><Button variant="outline" size="sm">Get in touch →</Button></Link>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-lg font-semibold text-muted-foreground">Contact to discuss</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly AI Retainer</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Ongoing, done-for-you AI support: content generation, admin automation, reporting and whatever your actual bottleneck is, month to month.</p>
                  <div className="mt-3">
                    <Link href="/contact"><Button variant="outline" size="sm">Get in touch →</Button></Link>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-lg font-semibold text-muted-foreground">Contact to discuss</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">The short discovery conversation is free. AI Services pricing is confirmed afterwards, so the support is scoped properly to what you actually need.</p>
          </div>

          {/* SERVICE 04 — Impact & Partnerships */}
          <div className="mb-4">
            <div className="mb-6">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Service 04</p>
              <h3 className="text-xl font-semibold mb-2">Impact &amp; Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strong partnerships and evidenced impact sit at the heart of long-term, sustainable growth — for any organisation, not just VCSE. This service covers both: building the relationships that matter, and proving the difference your work makes. All work is scoped individually to your context.
              </p>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Partnership Development &amp; Community Engagement</h4>
            <div className="grid gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Partnership Mapping &amp; Strategy</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A half-day session to identify and prioritise the right relationships for your vision and growth.</p>
                  <div className="mt-3">
                    <Link href="/book"><Button variant="outline" size="sm">Book a free consultation →</Button></Link>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">From £495</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Community Consultation Support</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Planning and facilitating meaningful community engagement that delivers real insight and genuine participation.</p>
                  <div className="mt-3">
                    <Link href="/book"><Button variant="outline" size="sm">Book a free consultation →</Button></Link>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">From £600</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Ongoing Partnership Management</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Regular support to manage and develop your key partnerships over time — scoped to your specific relationships.</p>
                  <div className="mt-3">
                    <Link href="/book"><Button variant="outline" size="sm">Book a free consultation →</Button></Link>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">From £500<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Impact Report Writing</h4>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A bespoke, professionally written impact report that brings your outcomes to life, speaks the right language to funders and partners, and is tailored to your specific stakeholder requirements.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">Step 1</p>
                  <p className="font-medium mb-1 text-sm">Free Scoping Consultation</p>
                  <p className="text-xs text-muted-foreground">Discuss your outcomes, audience and funder requirements.</p>
                  <p className="font-bold text-primary mt-2 text-sm">Free</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">Step 2</p>
                  <p className="font-medium mb-1 text-sm">Bespoke Proposal &amp; Pricing</p>
                  <p className="text-xs text-muted-foreground">A tailored quote confirmed based on scope and complexity.</p>
                  <p className="font-bold text-primary mt-2 text-sm">—</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">Step 3</p>
                  <p className="font-medium mb-1 text-sm">Report Writing &amp; Delivery</p>
                  <p className="text-xs text-muted-foreground">A professionally written report evidencing your social value and outcomes.</p>
                  <p className="font-bold text-primary mt-2 text-sm">Bespoke</p>
                </div>
              </div>
              <Link href="/book">
                <Button variant="outline" size="sm">Book a free consultation →</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Self-Assessment */}
      <Section id="assessment">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-3">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Answer a few quick questions and we'll recommend the right support for where you are right now — no jargon, no pressure.
          </p>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">For solopreneurs &amp; small business owners</h3>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-background">
              <iframe
                src={`${import.meta.env.BASE_URL}assessments/solopreneur.html`}
                title="Find your support — solopreneurs and small business owners"
                className="w-full"
                style={{ height: "820px", border: "none" }}
                scrolling="yes"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For community organisations &amp; social enterprises</h3>
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
