import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { Helmet } from "react-helmet-async";

export function About() {
  return (
    <Layout>
      <Helmet>
        <title>About | Elevated Living</title>
        <meta name="description" content="Meet Kay Oldroyd — Founder and Director of Elevated Living. With 30+ years in community infrastructure, Kay built Elevated Living to help others stop burning out over operations." />
        <meta property="og:title" content="About | Elevated Living" />
        <meta property="og:description" content="Meet Kay Oldroyd — Founder and Director of Elevated Living. With 30+ years in community infrastructure, Kay built Elevated Living to help others stop burning out over operations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-3xl mx-auto">
          <div>
            <h1 className="mb-6">The messy reality of doing good work — understood.</h1>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                We know what it feels like to be a business owner or a charity leader who is brilliant at what they do, but utterly bogged down by the administrative weight of doing it.
              </p>
              <p>
                Elevated Living was founded because too many passionate people were burning out over operations. You shouldn't have to be an expert in project management, funding compliance, or system design just to run your business or community group.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 py-2 not-italic">
                <p className="text-foreground font-medium">
                  "When you remove the overwhelm, focus follows — and when focus follows, everything else starts to move."
                </p>
                <footer className="mt-2 text-sm text-muted-foreground">Kay Oldroyd, Founder &amp; Director, Elevated Living</footer>
              </blockquote>
              <p>
                Elevated Living's job is to come in, find the focus in the chaos, and build the structures that let you breathe again.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/book">
                <Button size="lg">Let's chat about your work</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">The Approach</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl mb-3 text-primary">Zero Judgment</h3>
              <p className="text-muted-foreground text-sm">
                Elevated Living doesn't care how messy your inbox is or if you're a year behind on your impact tracking. We're here to fix it, not judge it.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl mb-3 text-primary">Plain English</h3>
              <p className="text-muted-foreground text-sm">
                No corporate jargon or consultant-speak. We deal in practical, actionable steps that actually make sense for your day-to-day.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl mb-3 text-primary">Lived Experience</h3>
              <p className="text-muted-foreground text-sm">
                Particularly for neurodivergent founders — we get it. Systems are built around how your brain actually works, not a textbook ideal.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl mb-3 text-primary">Sector Knowledge</h3>
              <p className="text-muted-foreground text-sm">
                Elevated Living knows how funders think, how CICs operate, and the unique pressures of the community and social enterprise sector.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/40 border border-primary/10 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 w-28 h-36 rounded-xl overflow-hidden shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}images/kay-oldroyd.jpg`}
                alt="Kay Oldroyd, Founder and Director of Elevated Living"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                Kay Oldroyd, Founder and Director of Elevated Living, has spent over 30 years working deep inside community infrastructure — creating and running the projects, managing the partnerships, and trying to keep the lights on while still delivering the mission.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-5">
                Kay is a Level 1 Associate of the Institute of Social Value and a qualified Social Value and Return on Investment Practitioner.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Level 1 Associate — Institute of Social Value
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Social Value &amp; SROI Practitioner
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
