import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function BlogPostADHD() {
  return (
    <Layout>
      <Helmet>
        <title>Hands up: who’s got at least 147 tabs open? | Elevated Living</title>
        <meta
          name="description"
          content="A note for neurodivergent solopreneurs about ADHD, working with your brain, and finding support that fits."
        />
        <meta property="og:title" content="Hands up: who’s got at least 147 tabs open? | Elevated Living" />
        <meta
          property="og:description"
          content="A note for neurodivergent solopreneurs about ADHD, working with your brain, and finding support that fits."
        />
        <link rel="canonical" href="https://www.elevatedliving.uk/blog/adhd-awareness-month" />
        <meta property="og:url" content="https://www.elevatedliving.uk/blog/adhd-awareness-month" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/adhd-awareness-month.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hands up: who’s got at least 147 tabs open? | Elevated Living" />
        <meta
          name="twitter:description"
          content="A note for neurodivergent solopreneurs about ADHD, working with your brain, and finding support that fits."
        />
        <meta name="twitter:image" content="https://www.elevatedliving.uk/images/adhd-awareness-month.jpg" />
      </Helmet>
      <Section className="pt-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Neurodivergence &amp; Business</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">October 2026</span>
          </div>

          <h1 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
            Hands up: who’s got at least 147 tabs open?
          </h1>

          <div className="mb-10 overflow-hidden rounded-2xl shadow-md">
            <img
              src={`${import.meta.env.BASE_URL}images/adhd-awareness-month.jpg`}
              alt="Laptop displaying Elevated Living’s ADHD Awareness Month resource in a bright workspace"
              width="1706"
              height="608"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="prose prose-lg mt-2 max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground">
            <p>
              It's ADHD Awareness Month, so this one is for the solopreneurs who opened this post a minute ago and will probably wander off halfway through to fix a spreadsheet, answer a message that wasn't urgent, or look up something that popped into their head, and then find their way back to it at some point later in the week, which is completely fine by me because I've seen the tabs and I'm not going to say a word.
            </p>
            <p>
              I work with a lot of neurodivergent business owners, and the same patterns come up so often that I could nearly set my watch by them.
            </p>
            <p>
              There's the <strong>hyperfocus</strong>, where nothing happens for three days and then you spend eleven hours on a logo nobody asked for, forget to eat, and come out the other side blinking like you've been in a very dark room (probably because it was light when you started and now the sun has disappeared and you’ve lost the whole day), but you’ve designed a brilliant logo and never mind that the invoices still haven't been sent.
            </p>
            <figure className="mx-auto mb-8 max-w-xs overflow-hidden rounded-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/adhd-invoice-reminder.jpg`}
                alt="Phone showing repeated AI assistant reminders to send an invoice"
                width="1408"
                height="768"
                className="h-auto w-full"
              />
            </figure>
            <p>
              There's the <strong>starting</strong> problem, where you know exactly what needs doing and could describe it in detail, but you can't begin, and the longer you can't begin the bigger it gets, until it has turned into a ‘Whole Thing’ that you now have feelings about.
            </p>
            <p>
              There's the <strong>deadline</strong> engine, where a task with no date on it might as well not exist but one that's due in an hour gets done with startling brilliance (make it make sense).
            </p>
            <p>
              And there's the 2am idea, which turns up in the shower or in the middle of a client call or just as you've finally got going on something else; sometimes it’s genuinely brilliant and sometimes it needs to be left well alone. There’s a real skill being able to tell the difference.
            </p>
            <p>
              <strong>And by the way, I do all of the above so I can completely relate to what you're going through!</strong>
            </p>
            <p>
              What doesn't get said enough is how all of this feels when you're self-employed, because in a job somebody else supplies the structure, whether that's a manager, a deadline or a colleague who asks how the report is going, whereas when you work for yourself <strong>you are the structure</strong> and you're also the person who can't always use it.
            </p>
            <p>
              So a lot of people quietly decide they're <strong>lazy, or disorganised, or just not cut out for this</strong>, when what's really happening is that they're running a business with no scaffolding and a mind that works differently, and they've got this far on willpower and coffee.
            </p>
            <p>
              It's also worth saying that plenty of people, women and people from global majority communities in particular, are diagnosed late or missed altogether, and many spend years running a business before anyone gives them a word for any of it.
            </p>
            <p>
              Whether you have a diagnosis or not, if this sounds like your Monday then you're very welcome here.
            </p>

            <h2>There's no one right way to do a session</h2>
            <p>
              I learned a long time ago that the worst thing I can do is turn up with one fixed method and expect everybody's brain to fit it, so my sessions bend to suit the person, and there are three shapes they tend to take.
            </p>
            <p>
              The first is the <strong>brain dump</strong>, where you arrive with everything in your head at once, the client, the website, the thing you promised in March and the idea you had in the car, and I listen and ask the odd question while we get it all out where we can both see it, and you'd be amazed how much room opens up once it's no longer being held in there, which means you can finally get on with the tasks because your head has the space to do it.
            </p>
            <p>
              The second is the <strong>structured session</strong>, which suits the people who don't want any surprises at all, and I completely understand that. You get the plan beforehand, so you know what we'll cover, in what order, how long it will take and what I'll need from you, and because nothing is going to catch you out you can spend your energy on the work instead of bracing yourself for what might come next.
            </p>
            <p>
              The third is <strong>body doubling</strong>, where very few words are spoken and you simply sit in the same room as me and get on with your own work while I get on with mine, and for a surprising number of people that is exactly what turns a morning of drifting into one where everything gets done, because I'm not coaching you or checking up on you, I'm just there, quietly and usefully present.
            </p>
            <p>
              Plenty of people want a bit of each at different times, and that's absolutely fine, so tell me how your brain works and we'll build the session around it.
            </p>
            <p>
              If you've been meaning to book something for a while, why not{" "}
              <Link href="/book" className="text-primary underline underline-offset-4">
                book your free consultation
              </Link>{" "}
              and we can discuss what you need and how I can work with you.
            </p>
            <p>
              And, <strong>you're not behind</strong>, you're just working without a map, and I happen to be quite good at making them.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
