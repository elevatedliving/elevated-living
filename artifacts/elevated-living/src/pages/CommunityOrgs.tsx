import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { Users, FileText, Settings, Building2 } from "lucide-react";

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
            Translating your frontline impact into funder-friendly language, and building the operational bedrock you need to scale sustainably.
          </p>
          <Link href="/contact">
            <Button size="lg">Discuss Your Organisation's Needs</Button>
          </Link>
        </div>
      </Section>

      <Section bg="muted">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="notion-card p-8 bg-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">Impact Report Writing</h3>
              <p className="text-sm text-muted-foreground mb-6">
                You know the difference you're making, but funders need to see it in their language. I turn your raw data and stories into compelling, compliant impact reports.
              </p>
              <Link href="/impact-report-writing" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                Learn more &rarr;
              </Link>
            </div>

            <div className="notion-card p-8 bg-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">Operational Strategy</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Charities often run on passion and duct tape. I help you build robust systems, policies, and governance structures that protect your team and satisfy stakeholders.
              </p>
              <Link href="/contact" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                Inquire &rarr;
              </Link>
            </div>

            <div className="notion-card p-8 bg-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">Project Management</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Got a new grant but no capacity to mobilize it? I offer freelance project management to get initiatives off the ground, built properly, and handed back to your team.
              </p>
              <Link href="/contact" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                Inquire &rarr;
              </Link>
            </div>

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
