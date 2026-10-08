import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";

const RESULTS_PDF_URL = `${import.meta.env.BASE_URL}documents/whats-keeping-you-stuck-results.pdf`;

export function StuckResults() {
  return (
    <Layout>
      <Helmet>
        <title>What&apos;s Keeping You Stuck? Results | Elevated Living</title>
        <meta
          name="description"
          content="View or download the What's Keeping You Stuck? results summary from Elevated Living."
        />
        <meta
          property="og:title"
          content="What&apos;s Keeping You Stuck? Results | Elevated Living"
        />
        <meta
          property="og:description"
          content="View or download the What's Keeping You Stuck? results summary from Elevated Living."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <h1 className="mb-2" data-testid="heading-stuck-results">
                What&apos;s Keeping You Stuck?
              </h1>
              <p className="text-muted-foreground">Results summary</p>
            </div>
            <a
              href={RESULTS_PDF_URL}
              download="whats-keeping-you-stuck-results.pdf"
              className={buttonVariants({ variant: "default" })}
              data-testid="link-download-stuck-results"
            >
              Download the PDF
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              src={RESULTS_PDF_URL}
              title="What&apos;s Keeping You Stuck? Results Summary PDF"
              className="block w-full border-0"
              style={{ height: "85vh", minHeight: "640px" }}
              data-testid="iframe-stuck-results-pdf"
            >
              <p className="p-6 text-center text-muted-foreground">
                The PDF preview is unavailable in this browser. Use the Download the PDF button
                above to view the results summary.
              </p>
            </iframe>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
