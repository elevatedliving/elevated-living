import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";

const DUMMY_POSTS = [
  {
    id: 1,
    title: "Why Access to Work is a Game Changer for Solopreneurs",
    category: "For Business Owners",
    date: "Mar 12, 2026",
    excerpt: "Navigating the DWP isn't easy, but the funding available for neurodivergent founders can completely transform your capacity.",
  },
  {
    id: 2,
    title: "Stop Using Corporate Jargon in Your Impact Reports",
    category: "For Community Orgs",
    date: "Feb 28, 2026",
    excerpt: "Funders want to see human stories backed by solid data. Here's why plain English always wins over consultant-speak.",
  },
  {
    id: 3,
    title: "The Project Clarity Checklist",
    category: "Resources",
    date: "Jan 15, 2026",
    excerpt: "Five questions you need to ask before starting any new operational initiative in your small business.",
  }
];

export function Blog() {
  return (
    <Layout>
      <Section className="pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-4">Insights & Notes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on operations, funding, neurodivergence in business, and keeping things beautifully simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post) => (
              <article key={post.id} className="notion-card flex flex-col overflow-hidden bg-card group cursor-pointer">
                <div className="h-48 bg-muted border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                  {/* Placeholder for real images later */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-105 transition-transform duration-500">
                     <span className="text-6xl font-serif italic text-primary">EL</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{post.excerpt}</p>
                  <div className="mt-6 text-sm font-semibold text-primary">Read article &rarr;</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
