import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { CheckCircle2, Building2 } from "lucide-react";

export function CommunityOrgs() {
  return (
    <Layout>
      <Section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="mb-6">For Community Organisations & VCSEs</h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            The people doing the most important work often have the least support behind them. That's exactly why Elevated Living exists — to help community organisations and VCSEs get organised, evidence their impact, and build something that lasts.
          </p>
          <Link href="/contact">
            <Button size="lg">Discuss Your Organisation's Needs</Button>
          </Link>
        </div>
      </Section>

      {/* Who I Help */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6">Who I help</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            You started your organisation because you cared deeply about your community. Now you're drowning in admin, chasing funders, writing the same story six different ways, and wondering how everyone else seems to manage it.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            They don't. They just have better support. That's where Elevated Living comes in.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Impact Report Writing",
              "Project Management",
              "Operational & Admin Support",
              "Partnership Development & Stakeholder Engagement",
            ].map((service) => (
              <span key={service} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" /> {service}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto border-l-4 border-primary pl-8 py-4">
          <h2 className="text-3xl mb-4">30 Years of Sector Context</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I don't need you to explain what a CIC is, how tricky it is to balance restricted versus unrestricted funding, or the nuanced dynamics of local authority partnerships.
          </p>
          <p className="text-lg text-muted-foreground">
            I bring three decades of built-in context, meaning we hit the ground running from day one.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
