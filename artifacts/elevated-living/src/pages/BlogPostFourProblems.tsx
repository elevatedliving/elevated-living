import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const title = "4 Problems I Can Help You Solve This Week";

export function BlogPostFourProblems() {
  return (
    <Layout>
      <Helmet>
        <title>4 Problems I Can Help You Solve This Week | Elevated Living</title>
        <meta
          name="description"
          content="Explore four practical ways Elevated Living can help small businesses and community organisations with admin, project management and impact reporting."
        />
        <link
          rel="canonical"
          href="https://elevatedliving.uk/blog/four-problems-i-can-solve-this-week"
        />
        <meta
          property="og:title"
          content="4 Problems I Can Help You Solve This Week | Elevated Living"
        />
        <meta
          property="og:description"
          content="Explore four practical ways Elevated Living can help small businesses and community organisations with admin, project management and impact reporting."
        />
        <meta
          property="og:url"
          content="https://elevatedliving.uk/blog/four-problems-i-can-solve-this-week"
        />
        <meta
          property="og:image"
          content="https://elevatedliving.uk/images/four-problems-this-week.jpg"
        />
        <meta
          property="og:image:alt"
          content="Elevated Living infographic listing four kinds of practical support for small businesses and community organisations"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="4 Problems I Can Help You Solve This Week | Elevated Living"
        />
        <meta
          name="twitter:description"
          content="Explore four practical ways Elevated Living can help small businesses and community organisations with admin, project management and impact reporting."
        />
        <meta
          name="twitter:image"
          content="https://elevatedliving.uk/images/four-problems-this-week.jpg"
        />
      </Helmet>

      <Section className="pt-20">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Small Businesses &amp; Community Organisations
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <time className="text-xs text-muted-foreground" dateTime="2026-11">
              November 2026
            </time>
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
            {title}
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            When you’re running a small business or community organisation,
            it’s easy to end up carrying every detail yourself. If admin,
            priorities or reporting are taking up too much space, here are
            four practical ways I can help.
          </p>

          <figure className="mb-10 overflow-hidden rounded-2xl shadow-md">
            <img
              src={`${import.meta.env.BASE_URL}images/four-problems-this-week.jpg`}
              alt="Elevated Living infographic describing support with organising files, admin, project priorities and impact reporting"
              width="1080"
              height="1350"
              className="mx-auto h-auto w-full"
            />
            <figcaption className="sr-only">
              Four practical ways Elevated Living can support small businesses
              and community organisations.
            </figcaption>
          </figure>

          <div className="prose prose-lg mt-2 max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground">
            <h2>1. Information is everywhere</h2>
            <p>
              When files are spread across folders, inboxes and devices, even a
              simple task can take longer than it should. I can help organise
              your files and folders into a clear structure, so the information
              you need is easier to find.
            </p>

            <h2>2. There’s no time for admin</h2>
            <p>
              Routine admin can quietly take over the time you meant to spend
              on your customers, community or next step. I can take on agreed
              admin tasks and help get the day-to-day work under control, giving
              you more room for the parts of the work that need you.
            </p>

            <h2>3. Everything feels like a priority</h2>
            <p>
              If several important things are competing for attention, it can
              be hard to know where to begin. Project management support can
              help you sort the work into manageable steps, set realistic
              priorities and keep moving without pretending there are more
              hours in the week than there are.
            </p>

            <h2>4. You can’t show the difference your work makes</h2>
            <p>
              Your work matters, but explaining its impact clearly can be
              challenging. I can help create an impact report that shows what
              you do, the difference it makes and why that work is needed.
            </p>

            <h2>Support that fits your work</h2>
            <p>
              Support can be regular or one-off, depending on what would help
              most. Alongside administration, project management and impact
              reporting, I also work across partnership management, social
              impact, AI automation and website builds. I deliver training and
              workshops too, and can provide meeting support or help with
              co-founder conflict.
            </p>
            <p>
              You don’t have to arrive with a perfect brief. If something is
              getting in the way of the work you want to do, we can talk it
              through and work out a useful next step.
            </p>
          </div>

          <div className="not-prose mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm text-muted-foreground">
              For new or established small businesses and community
              organisations. Get in touch to talk about the support you need.
            </p>
            <a
              href="https://cal.com/elevatedlivingenterprise/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Free consultation
            </a>
          </div>
        </article>
      </Section>
    </Layout>
  );
}
