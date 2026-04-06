import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { CheckCircle2, BrainCircuit } from "lucide-react";
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
      <Section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">For Solopreneurs & Business Owners</h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            You're wearing every hat in the business. It's time to take a few of them off.
          </p>
        </div>
      </Section>

      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            You're a consultant, creative, or solopreneur drowning in admin and losing sight of why you started. You need focus, structure, and someone who actually follows through.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If you have ADHD, Elevated Living also offers specialist support tailored to how your brain works — and if you're eligible, this can be funded through the DWP's Access to Work scheme. You handle the application; we handle the rest.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Project Focus Sessions", "Virtual Assistant Support", "ADHD-Friendly Business Support", "Accountability & Action Planning"].map((service) => (
              <span key={service} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" /> {service}
              </span>
            ))}
          </div>
          <Link href="/book">
            <Button size="lg">Book a Focus Session</Button>
          </Link>
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
                <strong>The good news:</strong> The DWP's <span className="font-semibold text-primary">Access to Work</span> scheme provides grants to pay for specialist support to help manage the tasks that your brain struggles with.
              </p>
              <p>
                Elevated Living understands the specific challenges of working with ADHD and can help navigate the application process for funding. Once approved, the cost-neutral admin support means you can operate in your zone of genius.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/book">
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
