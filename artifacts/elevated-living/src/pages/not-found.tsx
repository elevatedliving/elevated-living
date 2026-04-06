import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <Section className="py-32 text-center">
        <h1 className="text-6xl text-primary mb-6">404</h1>
        <h2 className="text-3xl mb-4">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link href="/">
          <Button size="lg">Return to Homepage</Button>
        </Link>
      </Section>
    </Layout>
  );
}
