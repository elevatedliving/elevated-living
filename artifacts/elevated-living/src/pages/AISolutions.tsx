import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

export function AISolutions() {
  return (
    <Layout>
      <Helmet>
        <title>AI Solutions | Elevated Living</title>
        <meta
          name="description"
          content="Practical AI training and support from Elevated Living, including beginner-friendly sessions through Square AI Academy."
        />
        <meta property="og:title" content="AI Solutions | Elevated Living" />
        <meta
          property="og:description"
          content="Practical AI training and support from Elevated Living, including beginner-friendly sessions through Square AI Academy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">AI Solutions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practical AI training and support to help you build confidence, save time, and use AI
            in ways that work for your business or organisation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">Introducing Square AI Academy</h2>
          <img
            src={`${import.meta.env.BASE_URL}images/square-ai-academy-primary.png`}
            alt="Square AI Academy — Learn Locally, Grow Globally"
            className="mx-auto w-full max-w-md mb-8"
          />
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Square AI Academy is Elevated Living&apos;s dedicated AI training arm. Delivering
            in-person sessions for absolute beginners of all ages and all backgrounds. These
            sessions take place in different locations or can be hosted in your own space. Click{" "}
            <a
              href="https://www.squareaiacademy.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              here
            </a>{" "}
            for more details.
          </p>
        </div>
      </Section>
    </Layout>
  );
}