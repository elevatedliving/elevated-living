import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function BlogPostAccessToWork() {
  return (
    <Layout>
      <Section className="pt-20 pb-0">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">For Business Owners</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">March 2026</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Why Access to Work Is a Game Changer for Neurodivergent Solopreneurs (And Why You Need to Apply Now)
          </h1>

          <p className="text-sm text-muted-foreground mb-10">By Elevated Living</p>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary pl-6">
            If you are a neurodivergent solopreneur, there is a government grant with your name on it. It won't sort itself out. Nobody from the DWP is going to knock on your door. You have to go and get it yourself. But it exists, it's real, and for many neurodivergent founders, it is the single most impactful thing they access in their entire business journey.
          </p>

          <div className="rounded-2xl overflow-hidden mb-0 shadow-md">
            <img
              src={`${import.meta.env.BASE_URL}images/access-to-work.png`}
              alt="Solopreneur working calmly at home with notes and laptop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground">

          <p>
            Let's start with something that doesn't get said nearly enough. If you're running your own business with ADHD, autism, dyslexia, dyspraxia, or any other condition that makes the administrative, organisational, or communicative side of work significantly harder — there is a government grant with your name on it. It's called <strong>Access to Work</strong>. And if you haven't heard of it, that's not an accident. It's one of the most under-promoted, underused support schemes in the UK. Let's fix that.
          </p>

          <h2>So What Actually Is It?</h2>
          <p>
            Access to Work (AtW) is a publicly funded grant scheme run by the Department for Work and Pensions. It exists to help disabled and neurodivergent people remove the practical barriers that make work harder than it needs to be — and critically, it applies to self-employed people, not just those in traditional employment.
          </p>
          <p>
            It is not means-tested. Your savings, your partner's income, your business bank balance — none of it affects your eligibility. The only question that matters is whether your condition creates a practical disadvantage at work. Unlike many benefits, it doesn't matter how much you have in savings — it only matters that your condition impacts your ability to do your job (according to <a href="https://www.curiouslydivergent.co.uk/blog/access-to-work-for-self-employed/" target="_blank" rel="noopener noreferrer" className="text-primary">Curiously Divergent</a>).
          </p>
          <p>
            And crucially: it's a grant, not a loan. As long as you are honestly working on your business, they aren't going to come knocking for the money back just because you had a slow month (according to <a href="https://www.curiouslydivergent.co.uk/blog/access-to-work-for-self-employed/" target="_blank" rel="noopener noreferrer" className="text-primary">Curiously Divergent</a>).
          </p>

          <h2>Do I Need a Diagnosis?</h2>
          <p>
            This is the question that stops so many people before they've even started. Access to Work is open to anyone in the UK who has a disability, health condition, or neurodivergent profile that makes some part of work harder than it should be. You do not need a formal diagnosis, but it helps to have evidence that you are affected in a way that meets the Equality Act definition of disability — that is, a condition that has a substantial and long-term impact on your ability to carry out normal daily activities (according to <a href="https://adhdaptive.org/access-to-work-uk-guide/" target="_blank" rel="noopener noreferrer" className="text-primary">ADHDaptive</a>).
          </p>
          <p>
            In plain terms: if your ADHD means you lose three hours a day to executive dysfunction; if your autism means the admin and communication load of running a business is genuinely exhausting in ways that affect your output; if your dyslexia means every proposal, email, and report takes you significantly longer than it should — you likely meet the threshold. You don't need to perform severity or prove you're struggling enough. You deserve a level playing field, full stop.
          </p>

          <h2>What Can It Actually Fund?</h2>
          <p>
            This is where it gets interesting — and where a lot of neurodivergent solopreneurs underestimate the scope. Access to Work can fund support that helps you do your job in a way that works with your brain, not against it. For neurodivergent founders, that might include:
          </p>
          <ul>
            <li>A <strong>virtual assistant or support worker</strong> to manage the admin that your executive function simply cannot sustain. The stuff that piles up — the inbox, the invoicing, the scheduling — that you're not avoiding out of laziness but because your brain genuinely processes it differently and at significant cost.</li>
            <li><strong>Specialist ADHD or executive function coaching</strong> to help you build systems, manage workflow, and actually implement the ideas your brain generates at 11pm on a Tuesday.</li>
            <li><strong>Assistive technology</strong> — software like Dragon NaturallySpeaking, Read&Write, or specialist time management and planning tools — that removes friction from the parts of work that slow you down most.</li>
          </ul>
          <p>
            For neurodivergent people, that often means support that helps with planning, communication, sensory load, reading and writing tasks, organisation, focus, transitions, or understanding workplace expectations (according to <a href="https://www.divergentthinking.uk/post/access-to-work-for-neurodivergent-people-what-it-is-what-it-can-fund-and-how-to-apply" target="_blank" rel="noopener noreferrer" className="text-primary">Divergent Thinking</a>).
          </p>
          <p>
            As a self-employed applicant, you also benefit from something employed people don't: cost-sharing does not apply (according to <a href="https://carescribe.io/resources/access-to-work-guide/" target="_blank" rel="noopener noreferrer" className="text-primary">CareScribe</a>). If you're employed and apply after six weeks in a role, your employer picks up part of the tab. When you're the employer and the employee? The full approved cost is covered.
          </p>

          <h2>To Be Eligible as a Self-Employed Person, You Need to Know This</h2>
          <p>
            Paid work includes self-employment above the lower earnings limit, which is £559 per month (£6,708 per year) for 2026/2027 (according to <a href="https://www.scope.org.uk/advice-and-support/access-to-work-grant-scheme" target="_blank" rel="noopener noreferrer" className="text-primary">Scope UK</a>). You'll need to demonstrate you're actively trading — invoices, business records, evidence of work. If you're self-employed, describe your work clearly and show that you're actively earning or trading (according to <a href="https://adhdaptive.org/access-to-work-uk-guide/" target="_blank" rel="noopener noreferrer" className="text-primary">ADHDaptive</a>).
          </p>
          <p>
            You must be based in England, Scotland, or Wales (Northern Ireland has a separate scheme). You must be 16 or over. And you must have a condition that creates a genuine work-related barrier. That's it.
          </p>

          <h2>The Honest Part: The System Is Not Easy</h2>
          <p>
            I'd be doing you a disservice if I made this sound straightforward, because navigating the DWP is its own full-time job — and the current state of the Access to Work scheme requires some frank acknowledgement.
          </p>
          <p>
            Delays are at an all-time high. Over 60,000 applicants were waiting for a decision in early 2025, with standard waits ranging from 16 to 24 weeks (according to <a href="https://theexecoffice.com/access-to-work-eligibility-2025-2/" target="_blank" rel="noopener noreferrer" className="text-primary">The Exec Office</a>). That's four to six months of waiting before you see a penny. For a solopreneur running on stretched capacity, that is not nothing.
          </p>
          <p>
            There are also reports of awards being significantly reduced with little explanation, and the government is consulting on reforms that may change how Access to Work is delivered in the future — including platform-based or employer-led models, possibly from late 2025 or 2026 (according to <a href="https://www.anitasndconsultancy.com/blog/access-to-work-2025-benefits-changes" target="_blank" rel="noopener noreferrer" className="text-primary">Anita's ND Consultancy</a>). The landscape is shifting. The scheme is under pressure. And neurodivergent people — who arguably benefit most from it — are among those most affected by the uncertainty.
          </p>
          <p>So why are we still telling you to apply?</p>
          <p>
            Because the alternative is continuing without any support at all. Because even an imperfect award can change the game. Because the scheme, despite its flaws, remains one of the most flexible, individualised forms of support available — especially for freelancers, part-time workers, and those working from home (according to <a href="https://www.anitasndconsultancy.com/blog/access-to-work-2025-benefits-changes" target="_blank" rel="noopener noreferrer" className="text-primary">Anita's ND Consultancy</a>). And because — here's the quietly brilliant bit — once the grant is in place, you can use part of your VA's time to help you manage the ongoing claims administration too, including the paperwork that comes with the grant itself.
          </p>
          <p>
            Apply. Apply now, before further reforms narrow the door further.
          </p>

          <h2>What the Application Process Actually Looks Like</h2>
          <p>
            You can apply online at <a href="https://www.gov.uk/access-to-work/apply" target="_blank" rel="noopener noreferrer" className="text-primary">gov.uk/access-to-work/apply</a> or by phone on <strong>0800 121 7479</strong>, with BSL support available. You'll need your UTR number if you're self-employed, details about your condition and how it affects your work, and information about what support you think you need.
          </p>
          <p>
            An assessor will then get in touch to discuss your needs — and this is where your preparation matters. Be specific. Don't generalise. Don't minimise. Document the daily impact of your condition on your work: the tasks that take you disproportionately long, the things you avoid because they're overwhelming, the hours you lose to dysregulation or recovery after a difficult working period. Be concrete, be honest, and be as detailed as possible.
          </p>
          <p>
            If your award comes back lower than expected — which, given the current climate, is a real possibility — you have the right to request a reconsideration within one month of your award letter. Use it.
          </p>

          <h2>Why This Matters Beyond the Individual</h2>
          <p>
            There's a bigger picture here worth naming. Neurodivergent people are disproportionately represented among the self-employed. Partly because traditional employment structures are often genuinely incompatible with how neurodivergent brains work. Partly because solopreneurship offers flexibility, autonomy, and the ability to design a working environment that actually fits. And partly because entrepreneurship rewards exactly the kind of divergent thinking, pattern recognition, and hyperfocus that neurodivergence can bring.
          </p>
          <p>
            But the business of being in business — the admin, the compliance, the communication overhead, the relentless task-switching — is often precisely where neurodivergent founders struggle most. Not because they lack capability or ambition. Because the infrastructure of running a business is built for a neurotypical brain, and nobody budgeted for the extra cognitive load of doing it any other way.
          </p>
          <p>
            Access to Work exists to level that playing field. It won't fix everything. The DWP won't be winning any awards for user experience any time soon. But with the right support in place, the difference between a neurodivergent solopreneur who is constantly drowning in their own backlog — and one who is genuinely thriving — can be exactly this: someone funded to take the weight of what doesn't work for your brain, so you can focus on everything that does.
          </p>
          <p><strong>That's not a small thing. That's the whole thing.</strong></p>

          <h2>Where to Start</h2>
          <ul>
            <li>Apply at: <a href="https://www.gov.uk/access-to-work/apply" target="_blank" rel="noopener noreferrer" className="text-primary">gov.uk/access-to-work/apply</a></li>
            <li>Phone: <strong>0800 121 7479</strong> (BSL support available)</li>
          </ul>
          <p>
            And if you want support navigating the process, framing your application, or understanding what you're entitled to — that's exactly the kind of work we do at Elevated Living. <Link href="/contact" className="text-primary">Get in touch.</Link>
          </p>

          <div className="border-t border-border mt-12 pt-8 not-prose">
            <p className="text-sm text-muted-foreground mb-4">
              Elevated Living supports neurodivergent solopreneurs and small business leaders to cut through the overwhelm, build systems that work for their brains, and access the support they're entitled to.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Book a Complimentary Focus Session →
            </Link>
          </div>

        </div>
      </Section>
    </Layout>
  );
}
