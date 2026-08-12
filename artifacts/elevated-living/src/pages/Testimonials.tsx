import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Helmet } from "react-helmet-async";

const TESTIMONIALS = [
  {
    id: 1,
    src: "testimonial-tony.png",
    alt: "Testimonial from Your Confidence Coach",
  },
  {
    id: 2,
    src: "testimonial-claudette.png",
    alt: "Testimonial from Claudette H",
  },
  {
    id: 3,
    src: "testimonial-floyd.png",
    alt: "Testimonial from Floyd M",
  },
  {
    id: 4,
    src: "testimonial-npc.png",
    alt: "Testimonial from Nelston Property Consultants",
  },
  {
    id: 5,
    src: "testimonial-cassandra.png",
    alt: "Testimonial from Cassandra A Campbell, @eds_unplugged",
  },
  {
    id: 6,
    src: "testimonial-marcia.png",
    alt: "Testimonial from Marcia Brock, @marcia_brock",
  },
];

export function Testimonials() {
  return (
    <Layout>
      <Helmet>
        <title>Client Stories | Elevated Living</title>
        <meta name="description" content="Hear from the solopreneurs, business owners and community org leaders who've worked with Elevated Living — and what changed when they stopped trying to do it all alone." />
        <meta property="og:title" content="Client Stories | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Hear from the solopreneurs, business owners and community org leaders who've worked with Elevated Living — and what changed when they stopped trying to do it all alone." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="mb-4">Words from Clients</h1>
          <p className="text-xl text-muted-foreground">
            Feedback from previous and current clients.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="rounded-2xl overflow-hidden shadow-sm border border-border/40">
              <img
                src={`${import.meta.env.BASE_URL}images/${t.src}`}
                alt={t.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
