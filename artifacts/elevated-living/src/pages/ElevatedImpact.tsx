import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket } from "lucide-react";

export function ElevatedImpact() {
  return (
    <Layout>
      <Section className="pt-24 pb-32">
        <div className="max-w-2xl mx-auto text-center notion-card p-10 md:p-16 border-t-4 border-t-primary">
          <div className="mx-auto w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-8">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl mb-6">Elevated Impact®</h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Elevated Impact® is a separate, dedicated platform designed specifically to help organisations measure, track, and amplify their social impact. 
          </p>
          <p className="text-base text-foreground/80 mb-10">
            For specialised software and frameworks regarding impact measurement, please visit the dedicated platform.
          </p>
          
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Visit Elevated Impact® <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </Section>
    </Layout>
  );
}
