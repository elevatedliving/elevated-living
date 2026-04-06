import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function BlogPostCorporateJargon() {
  return (
    <Layout>
      <Section className="pt-20">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">For VCSEs</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">February 2026</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Stop Using Corporate Jargon in Your Impact Reports. Seriously.
          </h1>

          <p className="text-sm text-muted-foreground mb-10">By Elevated Living</p>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary pl-6">
            Funders want to see human stories backed by solid data. Here's why plain English always wins over consultant-speak — and why your impact report might be accidentally hiding the very thing that makes your organisation worth funding.
          </p>

          <div className="rounded-2xl overflow-hidden mb-10 h-48 bg-gradient-to-br from-primary/20 via-accent to-primary/10"></div>
        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground mt-2">

          <p>
            Picture the scene.
          </p>
          <p>
            A funder — let's call her Sarah — is sitting at her desk on a Tuesday afternoon with a stack of impact reports to get through before her 4pm call. She's got a lukewarm cup of tea, a growing sense of mild despair, and seventeen documents all telling her, in various fonts and degrees of confidence, that their respective organisations have "leveraged synergistic stakeholder engagement to catalyse transformative outcomes across a holistic ecosystem of need."
          </p>
          <p>
            Sarah does not feel inspired. Sarah feels tired.
          </p>
          <p>
            Sarah puts your report down, picks up the next one, and moves on.
          </p>
          <p>
            Sound dramatic? It isn't. This is happening every single day in funding panels, grant assessment rooms, and commissioning meetings across the UK. And the organisations losing out aren't necessarily doing bad work — they're doing <em>brilliant</em> work. They're just wrapping it in so much consultant-speak that the humans on the other side of the table can't actually see it.
          </p>
          <p>
            So let's talk about why plain English isn't just nicer to read — it's a strategic advantage.
          </p>

          <h2>First, Let's Name the Jargon</h2>
          <p>
            You know the words. You've probably used them. Some of them might even be living in a report you're currently writing. This is a safe space. Let's get them out in the open:
          </p>
          <p>
            <em>Leverage. Synergies. Holistic. Ecosystem. Stakeholder engagement. Co-production. Lived experience (when it's doing no actual work in the sentence). Catalyse. Transformative. Impactful. Capacity building. Sustainability. Scalable. Embed. Wraparound. Systems change. Moving the dial.</em>
          </p>
          <p>
            None of these words are inherently evil. Some of them — used precisely and sparingly — have legitimate meaning. But the moment they become wallpaper, the moment they're assembled into sentences that could apply to literally any organisation doing literally anything, they stop communicating and start obscuring.
          </p>
          <p>
            And here's the uncomfortable truth: jargon is often what we reach for when we're not quite sure what we're trying to say. It sounds authoritative. It sounds like we know the language of the sector. It fills space without committing to anything specific.
          </p>
          <p>
            Funders have read thousands of reports. They can smell vagueness from three paragraphs away.
          </p>

          <h2>What Funders Actually Want to Know</h2>
          <p>
            Let's strip it all back, because at its core, an impact report needs to answer four questions. Not fourteen. Four.
          </p>
          <p>
            What did you do? Who did it reach? What changed as a result? How do you know?
          </p>
          <p>
            That's it. Everything else — the methodology section that reads like an academic paper, the seven-page theory of change appendix, the glossary of outcome indicators — exists to support those four answers. Not to replace them.
          </p>
          <p>
            The funder reading your report is asking: <em>did this work? Did it matter to real people? Can I trust the organisation telling me this?</em> They are not sitting there hoping to encounter the phrase "multi-agency collaborative framework."
          </p>
          <p>
            What they <em>are</em> hoping to encounter is something like this:
          </p>
          <blockquote>
            <p>"Maria came to us in January having not left her flat in four months. By March, she'd completed our confidence programme, secured a part-time job, and last week she sent us a voice note saying she felt like herself again for the first time in two years. Maria is one of 34 people we supported this quarter, 28 of whom reported significant improvements in wellbeing and social connection — generating an estimated £127,000 in social value."</p>
          </blockquote>
          <p>
            Read that back. It's got the story. It's got the data. It's got the human being at the centre of it. And it took fewer words than most organisations use to introduce their theory of change.
          </p>
          <p>
            That's what plain English does. It gets out of the way and lets the work speak.
          </p>

          <h2>The Story and the Stats: You Need Both</h2>
          <p>
            Here's where some organisations overcorrect.
          </p>
          <p>
            They read something like this blog post, decide jargon is the enemy, and swing hard in the other direction — producing a report that is essentially a collection of touching anecdotes with no data to back them up. Lovely to read. Impossible to fund with confidence.
          </p>
          <p>
            Because here's the thing: funders aren't just humans — they're accountable humans. They have trustees, boards, monitoring frameworks, and their own reporting obligations. They need to be able to justify where the money went. A beautiful story without numbers is moving, but it doesn't give a funder the ammunition they need to say yes at the panel meeting.
          </p>
          <p>
            The sweet spot — and this is what separates a genuinely strong impact report from both the jargon soup and the anecdote collection — is human stories <em>backed by solid data</em>. The two work together. The story makes the data mean something. The data gives the story credibility.
          </p>
          <p>
            Think of it like this: the numbers tell the scale, the stories tell the truth. You need both to tell the whole picture.
          </p>
          <p>
            So yes, tell us about Maria. And then tell us there are 34 Marias. And then tell us that collectively, their improved wellbeing, their reduced isolation, their steps back into employment represent £127,000 in social value to this community. Now you've got something that moves a person <em>and</em> satisfies a panel.
          </p>

          <h2>The Myth That Jargon Sounds Professional</h2>
          <p>
            Let's address this one directly, because it's the reason most of the jargon exists in the first place.
          </p>
          <p>
            Somewhere along the line — and the charity and public sector are particularly prone to this — the idea took hold that technical language signals expertise. That if you can deploy the right terminology, you'll be taken more seriously. That plain English is somehow simplistic. Unsophisticated. Not quite grown-up enough for the room.
          </p>
          <p>
            This is completely backwards.
          </p>
          <p>
            The organisations doing the most rigorous, credible, genuinely impactful work write with remarkable precision. Not because they're dumbing it down. Because they understand their work well enough to explain it simply. There's a reason the best researchers, the most respected consultants, the most effective communicators across every field write in clear, direct language: because vagueness is easy and precision is hard.
          </p>
          <p>
            Directness signals confidence. Jargon signals uncertainty dressed up in a good coat.
          </p>
          <p>
            If you can't explain what your project does in two sentences that a reasonably informed twelve-year-old could follow, it's worth asking whether you've truly worked it out yourself — or whether the language has become a way of avoiding that question.
          </p>

          <h2>The Accessibility Argument Nobody's Making Loudly Enough</h2>
          <p>
            There's another dimension to this that doesn't get nearly enough airtime: jargon isn't just annoying. It's exclusionary.
          </p>
          <p>
            When impact reports and funding applications are written in dense sector-specific language, they create an uneven playing field. Larger organisations with professional bid writers, communications teams, and decades of sector fluency can navigate that language with ease. Smaller grassroots groups — often closer to the communities they serve, often doing some of the most vital work — frequently can't compete on those terms. Not because their work is weaker, but because the game is stacked against them from the start.
          </p>
          <p>
            And when we talk about grassroots organisations in the UK, we're talking about a genuinely diverse landscape. Community groups led by and for Black and minoritised communities. Organisations rooted in faith traditions. Groups serving refugees and asylum seekers. Peer-led mental health collectives. These organisations often have the deepest relationships with their communities and the most authentic evidence of change — and they are disproportionately disadvantaged by a funding culture built around the language of large, established institutions.
          </p>
          <p>
            Plain English in impact reporting isn't just a stylistic preference. It's a more equitable standard. One that lets the quality of the work compete on its own terms, rather than the quality of the consultant hired to write about it.
          </p>

          <h2>A Practical Jargon Audit: Do This Before You Submit</h2>
          <p>
            Before your next report goes anywhere near a funder, try this.
          </p>
          <p>
            Read it out loud. Genuinely — out loud. The phrases that make you stumble, the sentences you'd never say in an actual conversation with a human being, the paragraphs where you lose the thread of your own argument: those are the problem areas. Mark them. Rewrite them as if you're explaining your work to a friend who cares about what you do but isn't in the sector.
          </p>
          <p>
            Then find the humans in your data. For every set of statistics, ask yourself: is there a story behind this number? Can we name — even anonymously — one person whose life looks different because of this work? If yes, put them in. If you can't find a single human story in your entire report, that's a data collection problem, and it starts long before the writing stage.
          </p>
          <p>
            Then ask the killer question: if I removed every piece of sector terminology from this report, would the work still be clearly described? If the answer is no — if the jargon is doing structural work, holding the thing together — you've got rewriting to do.
          </p>

          <h2>The Good News</h2>
          <p>
            Here's what to take away from this, beyond the gently shaming image of Sarah and her lukewarm tea.
          </p>
          <p>
            If you are a small organisation, a community group, a CIC, or a solo-led social enterprise doing genuine work with real people — plain English is your superpower, not your limitation. You don't need to perform sophistication. You have proximity. You have relationships. You have stories that no large consultancy with a polished bid-writing team can replicate, because they weren't there.
          </p>
          <p>
            Your job is to trust that. To write with the same directness and warmth that you bring to your actual work. To let the funder see what you see — the real people, the real change, the real numbers — without a twelve-layer coating of sector-speak obscuring the view.
          </p>
          <p>
            The organisations that write the clearest reports are not the ones that know the least. They're the ones that are most secure in the value of what they do.
          </p>
          <p>
            <strong>Be that organisation.</strong>
          </p>

          <h2>One Last Thing</h2>
          <p>
            If you've read this entire article and thought <em>"this is all well and good, but I genuinely don't know how to measure or evidence my impact in the first place, let alone write about it"</em> — that's a completely valid response, and it's the most common starting point we encounter.
          </p>
          <p>
            Because the jargon problem and the measurement problem are related. When organisations aren't sure what their impact actually is, they reach for impressive-sounding language to fill the gap. The solution isn't better words. It's better systems for capturing what's already happening.
          </p>
          <p>
            That's exactly what we're building at Elevated Living — and it's a conversation worth having.
          </p>

          <hr />

          <p className="text-sm text-muted-foreground">
            <em>Elevated Living helps VCSEs, community organisations, CICs, and purpose-led businesses measure, evidence, and communicate their impact in plain English. No jargon. No fluff. Just your work, clearly told.</em>
          </p>
        </div>
        </div>
      </Section>
    </Layout>
  );
}
