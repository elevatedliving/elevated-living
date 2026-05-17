import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";

function PriceCard({ label, title, description, price, note }: {
  label?: string;
  title: string;
  description: string;
  price: string;
  note?: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="flex-1">
        {label && <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{label}</p>}
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        {note && <p className="text-xs text-muted-foreground mt-2 italic">{note}</p>}
      </div>
      <div className="sm:text-right shrink-0">
        <p className="text-2xl font-bold text-primary">{price}</p>
      </div>
    </div>
  );
}

function ServiceSection({ number, title, subtitle, children }: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-20">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl font-bold text-primary/15 leading-none select-none">{number}</span>
        <div>
          <h2 className="text-2xl font-bold mb-1">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}

export function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Services &amp; Fees | Elevated Living</title>
        <meta name="description" content="The full range of Elevated Living services — virtual assistant support, strategy sessions, project management, partnership development, and impact report writing. Transparent pricing, no surprises." />
        <meta property="og:title" content="Services &amp; Fees | Elevated Living" />
        <meta property="og:description" content="The full range of Elevated Living services — virtual assistant support, strategy sessions, project management, partnership development, and impact report writing. Transparent pricing, no surprises." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Hero */}
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6">Services &amp; Fees</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Five core services designed to meet you where you are — and move you forward with confidence. All prices exclude VAT. A written agreement or statement of work is issued before every engagement begins.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Bespoke packages are available on request. Not sure where to start? A free 20-minute consultation is always the right first step.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto">

          {/* 01 — VA Support */}
          <ServiceSection
            number="01"
            title="Virtual Assistant Support"
            subtitle="Practical admin support to take the day-to-day off your plate"
          >
            <PriceCard
              title="Ad Hoc Support"
              description="Flexible support as and when you need it — emails, scheduling, data entry, document preparation, day-to-day coordination. Minimum 2 hours per booking."
              price="£50/hour"
            />
            <PriceCard
              title="Monthly Retainer — Starter"
              description="8 hours per month of dedicated support. Retainer clients receive a reduced rate of £45/hour on additional hours booked within the month."
              price="£360/month"
              note="Minimum 1-month commitment, payable in advance."
            />
            <PriceCard
              title="Monthly Retainer — Regular"
              description="16 hours per month of consistent support — the equivalent of two solid days off your to-do list every month. £45/hour on additional hours within the month."
              price="£680/month"
              note="Minimum 1-month commitment, payable in advance."
            />
          </ServiceSection>

          {/* 02 — The Elevated Edit */}
          <ServiceSection
            number="02"
            title="The Elevated Edit"
            subtitle="Structured 1:1 sessions to untangle overwhelm, set priorities, and leave with a clear action plan"
          >
            <PriceCard
              label="Recommended entry point"
              title="Power Hour"
              description="A focused 60-minute session on one key challenge — cut through, clear next step, no fluff. Delivered online or in-person across London and surrounding areas."
              price="£125"
            />
            <PriceCard
              title="Half-Day Session"
              description="3.5 hours going deeper across multiple priorities. Includes follow-up notes and key actions. Ideal when you need more than one session can hold."
              price="£350"
            />
            <PriceCard
              title="Full-Day Intensive"
              description="A full day of structured work — written action plan and a 30-day check-in to keep momentum going. The most comprehensive option."
              price="£650"
            />
            <PriceCard
              title="Monthly Retainer"
              description="Two 60-minute sessions per month plus async support between sessions. Priority scheduling included. Retainers payable in advance with carry-over async support."
              price="£375/month"
            />
          </ServiceSection>

          {/* 03 — Project Management */}
          <ServiceSection
            number="03"
            title="Project Management"
            subtitle="End-to-end management of defined projects, programmes, or launches"
          >
            <PriceCard
              label="Recommended first step"
              title="Project Scoping &amp; Setup"
              description="A half-day discovery, scoping and project planning session — scope, timeline, priorities, risk and next actions mapped out before delivery begins."
              price="£495"
            />
            <PriceCard
              title="Ad Hoc Day Rate"
              description="Standalone project days, flexible to your needs. Ideal for short bursts of focused delivery when you don't need an ongoing retainer."
              price="£600/day"
            />
            <PriceCard
              title="Monthly Retainer — Light"
              description="2 days per month plus ongoing oversight. Retainer rates reflect a 10–15% saving against the ad hoc day rate."
              price="£1,050/month"
              note="Minimum 1-month commitment, payable in advance with 30 days notice to end."
            />
            <PriceCard
              title="Monthly Retainer — Standard"
              description="3 days per month with active management — the right level for a project that needs consistent, hands-on delivery."
              price="£1,550/month"
              note="Minimum 1-month commitment, payable in advance with 30 days notice to end."
            />
            <PriceCard
              title="Monthly Retainer — Intensive"
              description="4 days per month for complex delivery — sustained focus across multiple workstreams or a single high-stakes project."
              price="£2,000/month"
              note="Minimum 1-month commitment, payable in advance with 30 days notice to end."
            />
          </ServiceSection>

          {/* 04 — Partnership Development */}
          <ServiceSection
            number="04"
            title="Partnership Development &amp; Community Engagement"
            subtitle="Building the connections that help your organisation grow and sustain"
          >
            <PriceCard
              title="Partnership Mapping &amp; Strategy"
              description="A half-day session to identify and prioritise the right relationships to support your vision and growth. All work is scoped individually."
              price="From £495"
            />
            <PriceCard
              title="Community Consultation Support"
              description="Planning and facilitating meaningful community engagement that delivers real insight — not just box-ticking. Scoped individually to your context."
              price="From £600"
            />
            <PriceCard
              title="Ongoing Partnership Management"
              description="Regular support to manage and develop your key partnerships over time. A free consultation is available to discuss your specific needs."
              price="From £500/month"
            />
          </ServiceSection>

          {/* 05 — Impact Report Writing */}
          <div className="mb-20">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl font-bold text-primary/15 leading-none select-none">05</span>
              <div>
                <h2 className="text-2xl font-bold mb-1">Impact Report Writing</h2>
                <p className="text-muted-foreground">Professionally evidencing the difference your organisation makes</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your work changes lives — but unless it is captured, evidenced, and communicated clearly, funders, partners, and commissioners may never fully see it. This bespoke service produces a professionally written impact report that brings your outcomes to life in the right language, tailored to your specific funder or stakeholder requirements.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { step: "01", title: "Free Scoping Consultation", desc: "We discuss your outcomes, audience, and funder requirements." },
                  { step: "02", title: "Bespoke Proposal & Pricing", desc: "A tailored quote confirmed based on scope and complexity." },
                  { step: "03", title: "Report Writing & Delivery", desc: "A professionally written report evidencing your social value and outcomes." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-primary/20">{step}</span>
                    <h4 className="font-semibold text-sm">{title}</h4>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/impact-report-writing">
                <Button variant="outline" size="sm">Find out more about Impact Report Writing →</Button>
              </Link>
            </div>
          </div>

        </div>
      </Section>

      {/* At a Glance */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-2">Services at a Glance</h2>
          <p className="text-muted-foreground mb-8">A quick reference to all five services and their starting investment levels.</p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold">Service</th>
                  <th className="text-left py-4 px-6 font-semibold">Starting Investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { service: "Virtual Assistant Support", price: "£50/hour or from £360/month" },
                  { service: "The Elevated Edit", price: "£125 per session or from £375/month" },
                  { service: "Project Management", price: "£495 scoping session or £600/day" },
                  { service: "Partnership Development", price: "From £495 per session" },
                  { service: "Impact Report Writing", price: "Bespoke pricing — free consultation included" },
                ].map(({ service, price }) => (
                  <tr key={service} className="bg-card hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 font-medium">{service}</td>
                    <td className="py-4 px-6 text-muted-foreground">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> All prices exclude VAT</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Written agreement before every engagement</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Bespoke packages available on request</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Free consultations for impact reporting and partnership work</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-primary-foreground mb-4">Not sure which service is right for you?</h2>
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
