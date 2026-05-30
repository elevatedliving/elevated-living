import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { CalBooking } from "@/components/ui/CalBooking";
import { Link } from "wouter";
import { BrainCircuit } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FloatingAssessmentButton } from "@/components/FloatingAssessmentButton";

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

      <FloatingAssessmentButton />

      {/* Opening */}
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6">For Solopreneurs / Small Business Owners</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            You started your business because you were good at something. You had the idea, the drive, the passion — and then the business side of business arrived. The invoices. The inbox. The to-do list that never gets shorter.
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
                Elevated Living's signature thinking and strategy service — cutting through the noise to find what matters and move you forward. The Power Hour is the recommended entry point for new clients.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Best start</p>
                  <h4 className="font-semibold text-lg mb-1">Power Hour</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A focused 60-minute session — one problem, cut through, one clear next step.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£125</p>
                </div>
              </div>
              <CalBooking
                namespace="elevated-edit-power-hour"
                calLink="elevatedlivingenterprise/elevated-edit-power-hour"
              />
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Half-Day</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">3.5 hours including prep and written action notes — cutting through the noise to leave you with a sharp, actionable plan.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£350</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Full Day</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A full day including a written roadmap and 30-day check-in — your vision, blockers and next 90 days worked through in full.</p>
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
                Practical, hands-on support — admin, coordination, inbox management, scheduling and day-to-day business operations. Not a task-ticking service; a proper working partnership. Minimum one-month commitment on retainers. Additional hours within a retainer month are charged at £45/hour.
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
                  <p className="text-muted-foreground text-sm leading-relaxed">8 hours per month of dedicated support — the right amount to take the admin off your plate and free you up for the work you love.</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">£360<span className="text-base font-normal text-muted-foreground">/month</span></p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Monthly Retainer — Regular</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">16 hours per month of consistent support — the equivalent of two solid days off your to-do list every month.</p>
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
                End-to-end delivery of defined projects and programmes — backed by 20+ years of specialist community and housing sector experience. A scoping session is recommended before any ongoing work begins.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Recommended first step</p>
                  <h4 className="font-semibold text-lg mb-1">Project Scoping &amp; Setup</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A half-day discovery, scoping and project planning session — scope, timeline, priorities, risk and next actions.</p>
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

          {/* ADHD note */}
          <div className="bg-accent/50 border-2 border-primary/20 rounded-2xl p-8 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <BrainCircuit className="w-40 h-40 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                <BrainCircuit className="w-3.5 h-3.5" /> Access to Work eligible
              </div>
              <h3 className="text-xl font-semibold mb-3">ADHD-Friendly Business Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Standard business advice often doesn't account for how the ADHD brain actually works. Elevated Living offers support built specifically around you — systems that will actually stick, not just look good on paper. If you're eligible for the DWP's Access to Work scheme, this support can be fully or partially funded. You make the application; we deliver the support.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Self-Assessment */}
      <Section id="assessment">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-3">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Answer seven quick questions and we'll recommend the right support for where you are right now — no jargon, no pressure.
          </p>
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
