import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <Layout>
      <Section className="pt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="mb-6">The messy reality of doing good work — understood.</h1>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                The founder of Elevated Living has spent over 30 years working deep inside community infrastructure — writing the bids, managing the partnerships, and trying to keep the lights on while still delivering the mission.
              </p>
              <p>
                We know what it feels like to be a business owner or a charity leader who is brilliant at what they do, but utterly bogged down by the administrative weight of doing it.
              </p>
              <p>
                Elevated Living was founded because too many passionate people were burning out over operations. You shouldn't have to be an expert in project management, funding compliance, or system design just to run your business or community group.
              </p>
              <p className="text-foreground font-medium border-l-4 border-primary pl-4 py-2">
                The job is to come in, find the focus in the chaos, and build the structures that let you breathe again.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg">Let's chat about your work</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-xl">
              {/* Using a placeholder aesthetic image since we requested one in requirements */}
              <img 
                src={`${import.meta.env.BASE_URL}images/about-portrait.png`}
                alt="Illustration representing the founder" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-full -z-10 blur-3xl opacity-50"></div>
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
                Elevated Living knows how funders think, how CICs operate, and the unique pressures of the VCSE sector.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
