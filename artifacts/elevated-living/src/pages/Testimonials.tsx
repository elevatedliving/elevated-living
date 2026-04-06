import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Quote } from "lucide-react";

const DUMMY_TESTIMONIALS = [
  {
    id: 1,
    quote: "Working with Elevated Living completely changed how I run my consultancy. I was drowning in admin and ignoring my own growth. The focus session gave me a roadmap, and the VA support gave me my weekends back.",
    name: "Sarah J.",
    role: "Independent Consultant"
  },
  {
    id: 2,
    quote: "The impact report they produced for our CIC was phenomenal. They took our messy spreadsheets and passionate ramblings and turned them into a document that secured our next three years of funding.",
    name: "Director",
    role: "Local Youth Charity"
  },
  {
    id: 3,
    quote: "I didn't even know Access to Work applied to me as a solopreneur with ADHD. The guidance through that process was invaluable, and having specialized admin support has quieted the noise in my brain.",
    name: "Marcus T.",
    role: "Creative Director"
  },
  {
    id: 4,
    quote: "No judgment, no jargon. Just someone who rolls their sleeves up and sorts out the operational mess. Highly recommended.",
    name: "Emma W.",
    role: "Social Enterprise Founder"
  }
];

export function Testimonials() {
  return (
    <Layout>
      <Section className="pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-4">Words from Clients</h1>
          <p className="text-xl text-muted-foreground">
            Don't just take my word for it. Here's what happens when we clear the operational roadblocks.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {DUMMY_TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <p className="text-lg text-foreground/90 mb-8 relative z-10 font-serif italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
