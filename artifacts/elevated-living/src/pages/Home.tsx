import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, HeartHandshake, Lightbulb, MapPin, MessageSquare, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { HeroWordCloud } from "@/components/ui/HeroWordCloud";
import { EventbriteWidget } from "@/components/ui/EventbriteWidget";

export function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Elevated Living | Operational Support for Solopreneurs &amp; Community Orgs</title>
        <meta name="description" content="Elevated Living helps solopreneurs, small business owners, and community organisations and social enterprises cut through the operational overwhelm and build structures that actually work." />
        <meta property="og:title" content="Elevated Living | Operational Support for Solopreneurs &amp; Community Orgs" />
        <meta property="og:description" content="Elevated Living helps solopreneurs, small business owners, and voluntary sector organisations cut through the operational overwhelm and build structures that actually work." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      {/* Hero Section — raw <section> so HeroWordCloud fills the true full width */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-background text-foreground">
        {/* Word cloud layer: absolute, fills the full section edge-to-edge */}
        <HeroWordCloud />
        {/* Content layer: centred inside the normal container, above the word cloud */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              You started this because you had something to give. Now you're buried under everything else. <span className="text-primary">Let's change that.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Supporting solopreneurs, small business owners, and community organisations to get organised and build ways of working without the overwhelm.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  See how Elevated Living can help you <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Training & Events */}
      <Section>
        <div className="text-center mb-10">
          <h2>Upcoming Training &amp; Events</h2>
        </div>

        {/* Event card */}
        <div className="max-w-4xl mx-auto">

          {/* Hero image */}
          <img
            src={`${import.meta.env.BASE_URL}images/elevated-edit-sept.jpg`}
            alt="The September Elevated Edit"
            className="w-full rounded-2xl object-cover max-h-80 mb-8 shadow-md"
          />

          {/* Event title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Your Business Unstuck in Two Hours — The September Elevated Edit
          </h3>

          {/* Summary */}
          <p className="text-lg text-primary font-medium mb-3">
            Two hours to work out where you're at, where you're heading, and what's next. For entrepreneurs who are done with the overwhelm!
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-red-500 shrink-0" />
            <span>Santander Workcafe, Cheapside, EC2V 6AZ</span>
          </div>

          {/* Description — two-column on md+, single on mobile */}
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-sm text-muted-foreground leading-relaxed mb-10">

            {/* Left column */}
            <div className="space-y-4">
              <p>
                Most people running a business, a project or a community organisation on their own aren't stuck because they lack ideas or expertise. They're stuck because they haven't found the time or mental space to actually sit down and really look at what's going on.
              </p>
              <p>
                If you're a busy, overwhelmed, under-resourced entrepreneur carrying everything by yourself and just about getting by, then this is your sign to stop, take a breath and acknowledge that something needs to change.
              </p>

              <div>
                <p className="font-semibold text-foreground mb-2">Who it's for</p>
                <p>
                  Solopreneurs, small business owners, and community leads who are managing multiple tasks on their own and quietly feeling themselves going under. If you're doing too much and want to stop going around in circles, then you'll be in the right room!
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              <p className="font-semibold text-foreground mb-3">The September Elevated Edit</p>
              <p className="mb-3">You won't be bored by slides, and you won't be handed a worksheet you'll never look at again, but you will:</p>
              <ul className="space-y-2">
                {[
                  "Be part of a small group of entrepreneurs and business owners (maximum 6 people)",
                  "Have the opportunity to share your current business challenges and where you're at vs where you'd like to be",
                  "Be guided on your next steps that could close the gap between the present situation and your ideal outcome",
                  "Leave with a named priority and the start of a proper action plan",
                  "Receive a 30-minute call to follow up on that priority and keep you accountable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Eventbrite checkout */}
          <EventbriteWidget />
        </div>
      </Section>

      {/* Audience Split Cards */}
      <Section bg="muted">
        <div className="text-center mb-16">
          <h2 className="mb-4">Who We Help</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tailored infrastructure and strategic support, adapted for your specific world.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Solopreneur Card */}
          <div className="notion-card p-8 md:p-10 flex flex-col h-full bg-card">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="mb-4">Solopreneur / Small Business Owner</h3>
            <p className="text-muted-foreground mb-8">
              You're a consultant, creative, or solopreneur drowning in admin or delivery and losing sight of why you started. You need focus, structure, and someone who actually follows through. If you're wondering how everyone else seems to manage it — they don't. They just have better support behind them.
            </p>
            <ul className="space-y-3 mb-8 mt-auto">
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Project Focus Sessions</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Virtual Assistant Support</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> ADHD-Friendly Business Support</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Accountability & Action Planning</li>
            </ul>
            <Link href="/services">
              <Button variant="outline" className="w-full">Explore Services</Button>
            </Link>
          </div>

          {/* Community Org Card */}
          <div className="notion-card p-8 md:p-10 flex flex-col h-full bg-card">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="mb-4">Community Org / Social Enterprise</h3>
            <p className="text-muted-foreground mb-8">
              You started your organisation because you cared deeply about your community. Now you're managing multiple activities with different funding streams, writing the same impact story in six different ways, and wondering how everyone else seems to manage it. They don't. They just have the right people in their corner.
            </p>
            <ul className="space-y-3 mb-8 mt-auto">
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Impact Report Writing</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Project Management</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Operational Support</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Partnership & Stakeholder Work</li>
            </ul>
            <Link href="/services">
              <Button variant="outline" className="w-full">Explore Services</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 3 Step Process */}
      <Section>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-4">How We Work Together</h2>
          <p className="text-muted-foreground">A simple, transparent process to get you from overwhelmed to moving forward with confidence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border z-0"></div>
          
          {[
            {
              icon: MessageSquare,
              title: "1. The Focus Session",
              desc: "We start with a free 20-minute chat. No pressure, no pitch. Just untangling what you need and seeing if we're a fit."
            },
            {
              icon: Lightbulb,
              title: "2. The Plan",
              desc: "Elevated Living will map out exactly how to tackle your roadblocks. You'll get a clear proposal outlining scope, timelines, and costs."
            },
            {
              icon: Target,
              title: "3. The Execution",
              desc: "Elevated Living steps in with project management, virtual assistant support, or accountability check-ins — so you can focus on leading your organisation."
            }
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-background border-4 border-accent rounded-full flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="primary" className="text-center">
        <h2 className="text-primary-foreground mb-6">Ready to find some focus?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
          Stop staring at the to-do list. Let's get on a call and figure out the very next step.
        </p>
        <Link href="/book">
          <Button size="lg" variant="secondary" className="text-primary font-bold">
            Book a Complimentary Focus Session
          </Button>
        </Link>
      </Section>

      {/* Square AI Academy Partnership */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">In Partnership</p>
          <h2 className="mb-4">Introducing Square AI Academy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Elevated Living have partnered with <span className="font-semibold text-foreground">Academy of Success</span> to form Square AI Academy — all your in-person AI training for absolute beginners, of all ages and all backgrounds.
          </p>
          <a href="https://www.squareaiacademy.uk" target="_blank" rel="noopener noreferrer">
            <img
              src={`${import.meta.env.BASE_URL}images/square-ai-academy.png`}
              alt="Square AI Academy — South-East London's First AI Training Hub"
              className="mx-auto w-full max-w-xs hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </Section>
    </Layout>
  );
}
