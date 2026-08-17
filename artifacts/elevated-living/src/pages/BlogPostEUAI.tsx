import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function BlogPostEUAI() {
  return (
    <Layout>
      <Helmet>
        <title>The EU just made AI show its working | Elevated Living</title>
        <meta name="description" content="Since the 2nd of August, if an AI system is talking to you, changing what you see, or reading your face, it now legally has to say so. Here's what that actually means." />
        <meta property="og:title" content="The EU just made AI show its working | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta property="og:description" content="Since the 2nd of August, if an AI system is talking to you, changing what you see, or reading your face, it now legally has to say so. Here's what that actually means." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">AI & Technology</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">August 2026</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            The EU just made AI show its working. Here's what that actually means.
          </h1>

          <p className="text-sm text-muted-foreground mb-10">By Kay at Elevated Living (assisted by AI)</p>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary pl-6">
            Since the 2nd of August, if an AI system is talking to you, changing what you see, or reading your face, it now legally has to say so. That's the headline. Everything else is detail.
          </p>

          <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground mt-2">

            <p>
              The EU brought in new transparency rules under something called the AI Act — specifically a bit of it called Article 50. And before you switch off at the word 'Act,' here's the plain-English version: it's not about banning AI, or slowing anyone down. It's about making sure AI stops pretending to be something it isn't. A chatbot has to tell you it's a chatbot. A fake video has to say it's fake. Simple as that.
            </p>
            <p>
              The bit that catches most people out — this doesn't just apply to companies based in the EU. If your content, your chatbot, or your AI tool touches anyone in the EU market, the rules apply to you too. Based in Woolwich and never sold a thing to Europe? You're probably fine. Running a business, a platform, or content that EU customers can see or use? Read on.
            </p>

            <h2>The four rules, no waffle</h2>

            <p>
              <strong>1. If it talks, it has to say what it is.</strong><br />
              Chatbots, voice assistants, anything built to have a "conversation" with a real person — has to make it obvious you're talking to a machine. No pretending to be a human on the other end.
            </p>
            <p>
              <strong>2. If it's made or altered by AI, it has to be marked.</strong><br />
              Images, video, audio, text — if AI generated it or changed it, there needs to be a mark baked in that machines (and eventually humans) can detect. Think of it as an invisible label sewn into the seam, not a watermark plastered across the front.
            </p>
            <p>
              <strong>3. If it's reading your emotions or your face, it has to tell you.</strong><br />
              Emotion recognition, biometric categorisation — anything sizing you up based on how you look or sound — the person doing it has to say so before it happens.
            </p>
            <p>
              <strong>4. If it's a deepfake, or AI text on something that matters, it has to be flagged.</strong><br />
              Deepfakes of real people, and AI-generated text on matters of public interest — news, current affairs, that kind of thing — need a clear disclosure that it's AI-made.
            </p>

            <h2>Who this actually lands on</h2>
            <p>
              Not just Big Tech. The guidance is deliberately broad — companies, charities, media outlets, ad agencies, sole traders, and yes, individuals too. If you're an entrepreneur using AI to write marketing copy, an educator building content with AI tools, or a business owner running a chatbot on your website, this is on your radar now, not someday.
            </p>

            <h2>How to stay out of trouble</h2>
            <p>
              Nobody's coming for you because you used AI. They're coming for you if you hid it. So:
            </p>
            <ul>
              <li>Say when something's AI-generated. A line at the bottom of a blog post, a note under an image, a disclosure in your chatbot's welcome message — that's usually enough.</li>
              <li>If a real person checks and edits the AI's work before it goes out, you're in stronger territory than if you copy, paste, and publish.</li>
              <li>Keep it simple and visible. A buried disclosure in the terms and conditions won't cut it — it needs to be something a normal person would actually notice.</li>
            </ul>
            <p>
              The fines are real — up to €15 million or 3% of global turnover for companies, with some leniency built in for smaller businesses. But the honest truth is most people won't get fined for using AI. They'll get caught out for hiding it.
            </p>
            <p>
              So here's the actual takeaway: use the tools, use them well, just don't pretend a human wrote it when one didn't. Transparency was always going to catch up with AI eventually. Turns out it's landed a bit sooner than most people expected.
            </p>

            <div className="border-t border-border mt-12 pt-8 not-prose">
              <p className="text-sm text-muted-foreground mb-4">
                Elevated Living supports solopreneurs, small business owners, and community organisation leaders to manage the overwhelm, create focus, and build businesses that actually work for them — not the other way around.
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Book a Complimentary Focus Session →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
