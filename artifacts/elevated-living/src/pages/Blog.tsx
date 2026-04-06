import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";

const DUMMY_POSTS = [
  {
    id: 6,
    slug: "/blog/confidence-action",
    title: "Confidence Doesn't Come First. Action Does.",
    category: "Solopreneurs",
    date: "Apr 6, 2026",
    excerpt: "If you're waiting to feel ready before you start, you could be waiting a very long time. Here's why confidence is a consequence of action — not a condition of it.",
  },
  {
    id: 5,
    slug: "/blog/hoodie-hypothesis",
    title: "The Hoodie Hypothesis: What Your Comfort Rituals Are Actually Telling You About How You Work",
    category: "Solopreneurs",
    date: "Apr 1, 2026",
    excerpt: "You've reached for the hoodie. Or the hat. Or the specific mug. This post unpacks why your comfort rituals are a legitimate productivity strategy — and the science that backs it up.",
  },
  {
    id: 4,
    slug: "/blog/toms-vs-social-value",
    title: "TOMs, Social Value, and Why You Actually Need to Know the Difference",
    category: "Small Charities",
    date: "Mar 29, 2026",
    excerpt: "You've probably been asked to help a contractor 'demonstrate their social value.' This post explains what TOMs actually are, how they differ from social impact, and what to watch out for before you say yes.",
  },
  {
    id: 1,
    slug: null,
    title: "Why Access to Work is a Game Changer for Solopreneurs",
    category: "For Business Owners",
    date: "Mar 12, 2026",
    excerpt: "Navigating the DWP isn't easy, but the funding available for neurodivergent founders can completely transform your capacity.",
  },
  {
    id: 2,
    slug: null,
    title: "Stop Using Corporate Jargon in Your Impact Reports",
    category: "Small Charities",
    date: "Feb 28, 2026",
    excerpt: "Funders want to see human stories backed by solid data. Here's why plain English always wins over consultant-speak.",
  },
  {
    id: 3,
    slug: null,
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
              Thoughts on strategy, funding, neurodivergence in business, managing overwhelm and keeping things as simple as possible!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post) => {
              const card = (
                <article className="notion-card flex flex-col overflow-hidden bg-card group cursor-pointer h-full">
                  <div className="h-48 bg-muted border-b border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-6xl font-serif italic text-primary">EL</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{post.excerpt}</p>
                    <div className="mt-6 text-sm font-semibold text-primary">
                      Read article →
                    </div>
                  </div>
                </article>
              );
              return post.slug
                ? <Link key={post.id} href={post.slug}>{card}</Link>
                : <div key={post.id}>{card}</div>;
            })}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
