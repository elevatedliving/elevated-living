import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function BlogPostTOMs() {
  return (
    <Layout>
      <Helmet>
        <title>TOMs vs Social Value: What's the Difference? | Elevated Living</title>
        <meta name="description" content="The Themes, Outcomes and Measures (TOMs) framework and Social Value are not the same thing. Here's what every VCSE leader needs to understand about the difference." />
        <meta property="og:title" content="TOMs vs Social Value: What's the Difference? | Elevated Living" />
        <meta property="og:description" content="The Themes, Outcomes and Measures (TOMs) framework and Social Value are not the same thing. Here's what every VCSE leader needs to understand about the difference." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Small Charities</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">March 2026</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            TOMs, Social Value, and Why You Actually Need to Know the Difference
          </h1>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary pl-6">
            You've probably been approached by a housing association, contractor, or local authority asking you to "help them demonstrate their social value." Maybe they've sent over a spreadsheet and a lot of acronyms. This post cuts through it — so you know exactly what you're being asked, and what to do about it.
          </p>

          <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
            <img
              src={`${import.meta.env.BASE_URL}images/toms-social-value.png`}
              alt="Social value terminology word cloud including TOMs, SROI, deadweight, stakeholders and more"
              className="w-full h-auto object-cover"
            />
          </div>
        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground mt-2">

          <h2>First: what is "social value"?</h2>
          <p>
            Social value is a broad term for the positive difference an organisation makes beyond its core product or service — the impact it has on people, communities, and the environment that wouldn't have happened otherwise.
          </p>
          <p>
            For a small charity or community organisation, this is probably what you think about every single day. It's your reason for existing. The mentoring sessions, the food bank runs, the training you deliver for free, the connections you make between isolated people — all of that is social value in its truest sense.
          </p>
          <p>
            But here's where it gets complicated: "social value" also has a very specific legal meaning in the world of public procurement.
          </p>
          <p>
            The Public Services (Social Value) Act 2012 requires commissioners — councils, NHS trusts, government departments — to consider how the contracts they award can improve economic, social, and environmental wellbeing. In practice, this means big contractors (builders, facilities management companies, IT suppliers) have to demonstrate the social value they'll generate as part of winning public contracts.
          </p>
          <p>
            That's where you come in. And sometimes, that's where it starts to go wrong.
          </p>

          <h2>So what are TOMs?</h2>
          <p>
            TOMs stands for <strong>Themes, Outcomes and Measures</strong>. It's a national standardised framework — developed by the Social Value Portal — that gives commissioners and contractors a consistent way to measure social value commitments.
          </p>
          <p>
            The National TOMs framework is built around five themes:
          </p>
          <ul>
            <li><strong>Jobs</strong> — employment, training, apprenticeships</li>
            <li><strong>Growth</strong> — supply chain spend with SMEs and local businesses</li>
            <li><strong>Social</strong> — supporting voluntary organisations, health and wellbeing</li>
            <li><strong>Environment</strong> — carbon reduction, sustainable practices</li>
            <li><strong>Innovation</strong> — new approaches, digital inclusion</li>
          </ul>
          <p>
            Within each theme, there are specific outcomes with assigned financial proxy values — essentially, a way of turning community activity into a number that can go in a contract return. So a "volunteer hour" might be worth £X in the framework. A "job created for a long-term unemployed person" is worth £Y.
          </p>
          <p>
            Many local authorities also have their own local TOMs that sit on top of the national framework, with additional priorities specific to their area.
          </p>

          <h2>The key difference — and why it matters</h2>
          <p>
            Social value is the <em>concept</em>. TOMs is one <em>method of measuring it</em>. They are not the same thing.
          </p>
          <p>
            This distinction matters because:
          </p>
          <ul>
            <li>Not every organisation that talks about social value is using TOMs</li>
            <li>Not every piece of community work can or should be translated into a TOMs measure</li>
            <li>Your organisation's social impact exists whether or not anyone has put a number on it</li>
          </ul>
          <p>
            The problem is that in the procurement world, if you can't measure it in TOMs, it often doesn't count — even if the actual community benefit is enormous.
          </p>

          <h2>What this looks like in practice for small charities</h2>
          <p>
            Here's a scenario that comes up repeatedly: a housing association wins a large contract. As part of that contract, they've committed to a set of TOMs targets. To hit those targets, they need to demonstrate community engagement, volunteer hours, training delivered in the local area — and suddenly they're on the phone to your organisation asking if you'd like to "partner" with them.
          </p>
          <p>
            Sometimes this is a genuine partnership with real resource behind it. Often, it isn't. Often what they actually want is for you to host one of their staff members for a day so they can log it as volunteering. Or for you to run a free workshop and let them claim the hours.
          </p>
          <p>
            You do the work. They get the credit. And they hit their procurement targets.
          </p>
          <p>
            Not all corporate social value partnerships are like this — some are excellent, transformative, and properly resourced. But it's important to go in with your eyes open.
          </p>

          <h2>Questions to ask before you say yes</h2>
          <ul>
            <li>What are they actually asking you to do, and how long will it take?</li>
            <li>Is there any funding, resource, or in-kind support coming back to your organisation?</li>
            <li>Who will be claiming the social value generated — them or you?</li>
            <li>Is this activity something you would do anyway, or is it being created for their reporting purposes?</li>
            <li>Is there a formal agreement in place that protects your organisation?</li>
          </ul>
          <p>
            Your social impact is valuable. Don't give it away for free to help someone else win a contract.
          </p>

          <h2>The bottom line</h2>
          <p>
            TOMs is a useful tool in the right context. Understanding it helps you navigate conversations with funders, commissioners, and corporate partners from a position of knowledge rather than confusion.
          </p>
          <p>
            But the most important thing is this: the impact your organisation makes every day doesn't need a framework to be real. Your job is to evidence it clearly, communicate it powerfully, and make sure the people who benefit from your work — including funders and partners — understand exactly what they'd be losing if you weren't there.
          </p>
          <p>
            That's what an impact report does. And that's a conversation worth having.
          </p>

          <div className="border-t border-border mt-12 pt-8 not-prose">
            <p className="text-sm text-muted-foreground mb-4">
              If you'd like support evidencing your organisation's impact — in plain English, for funders who actually want to understand what you do — Elevated Living can help.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Book a Complimentary Focus Session →
            </Link>
          </div>
        </div>
        </div>
      </Section>
    </Layout>
  );
}
