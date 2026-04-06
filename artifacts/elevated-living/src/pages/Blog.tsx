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
    image: "images/confidence-action.png",
  },
  {
    id: 5,
    slug: "/blog/hoodie-hypothesis",
    title: "The Hoodie Hypothesis: What Your Comfort Rituals Are Actually Telling You About How You Work",
    category: "Solopreneurs",
    date: "Apr 1, 2026",
    excerpt: "You've reached for the hoodie. Or the hat. Or the specific mug. This post unpacks why your comfort rituals are a legitimate productivity strategy — and the science that backs it up.",
    image: "images/hoodie-hypothesis.png",
  },
  {
    id: 4,
    slug: "/blog/toms-vs-social-value",
    title: "TOMs, Social Value, and Why You Actually Need to Know the Difference",
    category: "Small Charities",
    date: "Mar 29, 2026",
    excerpt: "You've probably been asked to help a contractor 'demonstrate their social value.' This post explains what TOMs actually are, how they differ from social impact, and what to watch out for before you say yes.",
    image: "images/toms-social-value.png",
  },
  {
    id: 1,
    slug: "/blog/access-to-work",
    title: "Why Access to Work Is a Game Changer for Neurodivergent Solopreneurs",
    category: "For Business Owners",
    date: "Mar 12, 2026",
    excerpt: "Navigating the DWP isn't easy, but the funding available for neurodivergent founders can completely transform your capacity. Here's what it is, what it covers, and how to apply.",
    image: "images/access-to-work.png",
  },
  {
    id: 2,
    slug: "/blog/corporate-jargon",
    title: "Stop Using Corporate Jargon in Your Impact Reports",
    category: "For VCSEs",
    date: "Feb 28, 2026",
    excerpt: "Funders want to see human stories backed by solid data. Here's why plain English always wins over consultant-speak.",
    image: null,
  },
  {
    id: 3,
    slug: null,
    title: "The Project Focus Checklist",
    category: "Resources",
    date: "Jan 15, 2026",
    excerpt: "Five questions you need to ask before starting any new operational initiative in your small business.",
    image: null,
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
                  <div className="h-48 border-b border-border relative overflow-hidden">
                    {post.image ? (
                      <>
                        <img
                          src={`${import.meta.env.BASE_URL}${post.image}`}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent to-primary/10 group-hover:from-primary/30 transition-colors"></div>
                    )}
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
