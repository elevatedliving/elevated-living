import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function BlogPostVirtualAssistant() {
  return (
    <Layout>
      <Helmet>
        <title>Why a Virtual Assistant Matters | Elevated Living</title>
        <meta
          name="description"
          content="Discover how a virtual assistant frees up small-business owners, supports reliable operations, and compares with the real costs of hiring part-time or full-time."
        />
        <link
          rel="canonical"
          href="https://elevatedliving.uk/blog/why-every-small-business-needs-a-virtual-assistant"
        />
        <meta
          property="og:title"
          content="Why Every Small Business Needs a Virtual Assistant | Elevated Living"
        />
        <meta
          property="og:description"
          content="Discover how a virtual assistant frees up small-business owners, supports reliable operations, and compares with the real costs of hiring part-time or full-time."
        />
        <meta
          property="og:url"
          content="https://elevatedliving.uk/blog/why-every-small-business-needs-a-virtual-assistant"
        />
        <meta
          property="og:image"
          content="https://elevatedliving.uk/images/va-special-offer-header.webp"
        />
        <meta
          property="og:image:alt"
          content="Elevated Living end-of-year Virtual Assistant offer: buy three hours and get one free"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why Every Small Business Needs a Virtual Assistant | Elevated Living"
        />
        <meta
          name="twitter:description"
          content="Discover how a virtual assistant frees up small-business owners, supports reliable operations, and compares with the real costs of hiring part-time or full-time."
        />
        <meta
          name="twitter:image"
          content="https://elevatedliving.uk/images/va-special-offer-header.webp"
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
              Small Businesses
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <time className="text-xs text-muted-foreground" dateTime="2026-11">
              November 2026
            </time>
          </div>

          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            Why Every Small Business Needs a Virtual Assistant
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            When you run a small business, the work that brings in customers
            can compete with the work that keeps everything running. A virtual
            assistant can take on agreed admin and organisational tasks, giving
            you more time to serve clients, develop your business and make
            decisions that need your attention.
          </p>

          <Link
            href="/services"
            className="mb-10 inline-flex items-center justify-center rounded-md bg-[#ec008c] px-6 py-3 font-semibold text-[#20232b] shadow-sm transition-colors hover:bg-[#d6007f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec008c] focus-visible:ring-offset-2"
          >
            Book Virtual Assistant Here
          </Link>

          <figure className="mb-10 overflow-hidden rounded-2xl shadow-md">
            <img
              src={`${import.meta.env.BASE_URL}images/va-special-offer-header.webp`}
              alt="Elevated Living end-of-year offer: buy three hours of Virtual Assistant support and get one hour free, at £35 per hour with a three-hour minimum booking"
              width="1200"
              height="630"
              className="mx-auto h-auto w-full"
            />
            <figcaption className="sr-only">
              Virtual Assistant support for small businesses and community
              organisations.
            </figcaption>
          </figure>

          <div className="prose prose-lg mt-2 max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground">
            <h2>Make more room for the work only you can do</h2>
            <p>
              Inbox follow-ups, diary coordination, document formatting and
              keeping digital files organised are all necessary. But when
              these jobs fill the gaps between client work, they can take over
              the day. A VA can handle tasks you have agreed together, so you
              can spend more of your time on customers, delivery and business
              development.
            </p>
            <p>
              Delegating also reduces the number of small decisions you have
              to keep in your head. A clear process for recurring admin means
              fewer things to remember, fewer last-minute scrambles and a
              steadier experience for the people you work with.
            </p>

            <h2>Get support that matches the workload</h2>
            <p>
              Not every business needs an administrator for a full working
              week. You may need a few hours to clear a backlog, regular help
              with emails and scheduling, or extra capacity during a busy
              period. Working with a VA can let you define the tasks and hours
              around what is actually needed, then review the arrangement as
              your business changes.
            </p>
            <p>
              This flexibility can make it easier to ask for help earlier,
              rather than waiting until admin is affecting customer service,
              cash flow or your own capacity.
            </p>

            <h2>Compare the full cost, not just the hourly figure</h2>
            <p>
              An employee’s salary is only one part of the cost of hiring.
              Depending on the role and the person’s circumstances, an
              employer may also need to budget for employer National
              Insurance, workplace pension contributions, paid holiday,
              recruitment, onboarding, payroll and equipment. There is also
              the time needed to manage the role and provide enough work
              across the agreed hours.
            </p>
            <p>
              A VA is an external service provider, so you usually agree a
              scope and pay for the work or hours you book. The hourly fee
              might look higher than an employee’s hourly pay when viewed on
              its own, but the comparison should include the wider employment
              costs and how much support you need. Ask about minimum bookings,
              expenses, VAT where applicable, confidentiality and what is
              included before you commit.
            </p>
            <p>
              For example, Elevated Living’s Virtual Assistant support is
              £35 per hour, with a three-hour minimum booking. The current
              end-of-year offer gives you a fourth hour free when you buy
              three: four hours for £105. The offer runs until 31 December
              2026.
            </p>

            <aside className="not-prose my-10 rounded-2xl border border-border bg-accent p-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary">
                End-of-year offer
              </p>
              <p className="mb-4 text-foreground">
                Buy three hours of Virtual Assistant support and get one hour
                free. Four hours for £105, with a minimum three-hour booking.
                Available until 31 December 2026.
              </p>
              <Link
                href="/services"
                className="font-semibold text-primary underline underline-offset-4"
              >
                View Virtual Assistant support and booking details →
              </Link>
            </aside>

            <h2>Make support part of your business infrastructure</h2>
            <p>
              A small business depends on more than its main service or
              product. It also needs the everyday work around it to happen:
              messages answered, information organised, appointments managed
              and commitments followed through. Reliable support helps protect
              your time and gives those essential tasks a proper place in the
              way your business operates.
            </p>
            <p>
              A VA is not automatically the right answer for every role. If
              you need someone working set hours under your direct,
              day-to-day direction, an employee may be a better fit. The
              important thing is to choose support that reflects the work,
              the level of control and the capacity your business actually
              needs.
            </p>
            <p>
              You do not need to wait until you are overwhelmed. Start by
              listing the tasks that repeat, delay important work or drain
              your attention. Those are often the best place to begin a
              practical conversation about VA support.
            </p>
          </div>

          <div className="not-prose mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm text-muted-foreground">
              Need help with emails, admin or organisation? Explore Virtual
              Assistant support and choose the booking that fits your needs.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-[#ec008c] px-6 py-3 font-semibold text-[#20232b] shadow-sm transition-colors hover:bg-[#d6007f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec008c] focus-visible:ring-offset-2"
            >
              Book Virtual Assistant Here
            </Link>
          </div>
        </article>
      </Section>
    </Layout>
  );
}
