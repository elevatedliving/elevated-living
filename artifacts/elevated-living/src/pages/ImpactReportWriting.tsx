import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileSearch, PenTool, Presentation } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function ImpactReportWriting() {
  return (
    <Layout>
      <Helmet>
        <title>Impact Report Writing | Elevated Living</title>
        <meta name="description" content="Professional impact report writing for charities, CICs and social enterprises. Elevated Living turns your data, stories and case studies into reports that funders actually read." />
        <meta property="og:title" content="Impact Report Writing | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Professional impact report writing for charities, CICs and social enterprises. Elevated Living turns your data, stories and case studies into reports that funders actually read." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 text-primary font-semibold uppercase tracking-wider text-sm">Specialist Service</div>
          <h1 className="mb-6">Impact Report Writing</h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Stop staring at a blank page. Elevated Living will turn your hard work, data, and case studies into a professional impact report that proves your value to funders and stakeholders.
          </p>

          <div className="rounded-2xl overflow-hidden mb-16 shadow-md">
            <img
              src={`${import.meta.env.BASE_URL}images/impact-report-writing.png`}
              alt="A blank page and pen on a desk, ready to become an impact report"
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="bg-accent/40 rounded-2xl p-8 mb-16 border border-primary/10">
            <h3 className="text-2xl mb-4">How it works:</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">The Fact-Find</h4>
                  <p className="text-muted-foreground text-sm">Elevated Living provides a structured, easy-to-fill questionnaire. You dump in your stats, outcomes, and raw stories. Then there's a 45-minute call to fill in any gaps.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">The Draft</h4>
                  <p className="text-muted-foreground text-sm">The narrative is structured using sector-appropriate language, the vital statistics are highlighted, and a compelling case is built for your continued support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">The Final Polish</h4>
                  <p className="text-muted-foreground text-sm">We review the draft together. Once approved, you have a polished, professional document ready to send to your board and funders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">Discuss Your Needs</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
