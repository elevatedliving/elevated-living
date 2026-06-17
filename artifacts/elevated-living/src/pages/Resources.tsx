import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Resources() {
  return (
    <Layout>
      <Helmet>
        <title>Resources | Elevated Living</title>
        <meta name="description" content="Free guides and tools from Elevated Living — practical resources to help solopreneurs and community organisations and social enterprises get more organised and evidence their impact." />
        <meta property="og:title" content="Resources | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Free guides and tools from Elevated Living — practical resources to help solopreneurs and community organisations and social enterprises get more organised and evidence their impact." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-4">Free Resources</h1>
          <p className="text-xl text-muted-foreground">
            Tools, templates, and guides to help you find focus right now.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          
          <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Access to Work Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">A simple 2-page checklist on how to apply for DWP funding as a neurodivergent business owner.</p>
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Impact Data Tracker</h3>
              <p className="text-sm text-muted-foreground mb-4">A basic spreadsheet template for charities to start tracking their core outcomes efficiently.</p>
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download Excel
              </Button>
            </div>
          </div>

        </div>
      </Section>
    </Layout>
  );
}
