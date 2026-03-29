import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { CheckCircle2, ListChecks, BrainCircuit } from "lucide-react";

export function BusinessOwners() {
  return (
    <Layout>
      <Section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">For Solopreneurs & Business Owners</h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            You're wearing every hat in the business. It's time to take a few of them off.
          </p>
          <Link href="/contact">
            <Button size="lg">Book a Clarity Session</Button>
          </Link>
        </div>
      </Section>

      <Section bg="muted">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="notion-card p-8 bg-card flex flex-col">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <ListChecks className="w-6 h-6" />
            </div>
            <h2 className="text-2xl mb-4">Project Clarity</h2>
            <p className="text-muted-foreground mb-6 flex-grow">
              Got a massive idea but no idea where to start? We sit down, empty your brain onto the table, and organize it into a step-by-step actionable roadmap. You leave knowing exactly what to do next.
            </p>
            <ul className="space-y-2 text-sm font-medium mb-6">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 90-minute deep dive</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Visual roadmap provided</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Accountability check-ins</li>
            </ul>
          </div>

          <div className="notion-card p-8 bg-card flex flex-col">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl mb-4">Virtual Assistant Support</h2>
            <p className="text-muted-foreground mb-6 flex-grow">
              High-level administrative support that doesn't need hand-holding. Inbox management, client onboarding, data entry, and schedule wrangling. I handle the noise, you handle the business.
            </p>
            <ul className="space-y-2 text-sm font-medium mb-6">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Flexible monthly retainers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Proactive problem solving</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> System setup & cleanup</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Access to Work Section - Prominent Callout */}
      <Section>
        <div className="bg-accent/50 border-2 border-primary/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BrainCircuit className="w-64 h-64 text-primary" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              <BrainCircuit className="w-4 h-4" /> Specialist Support
            </div>
            
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">ADHD & Access to Work</h2>
            
            <div className="space-y-4 text-foreground/80 text-lg mb-8">
              <p>
                If you are a business owner with ADHD (or awaiting diagnosis), the administrative side of running a business isn't just annoying—it can be paralyzing.
              </p>
              <p>
                <strong>The good news:</strong> The DWP's <span className="font-semibold text-primary">Access to Work</span> scheme provides grants to pay for support workers (like me) to help you manage the tasks that your brain struggles with. 
              </p>
              <p>
                I understand the specific challenges of working with ADHD. I can help you navigate the application process for funding, and once approved, provide the cost-neutral admin support that allows you to operate in your zone of genius.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground">Discuss Access to Work</Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="bg-white">Download the Guide</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
