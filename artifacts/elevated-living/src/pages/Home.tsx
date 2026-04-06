import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Briefcase, HeartHandshake, Lightbulb, MessageSquare, Target } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-texture.png`} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
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
            Supporting solopreneurs, small business owners, and community organisations to cut through the chaos, get properly organised, and build ways of working that don't burn them out.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="text-sm font-medium text-muted-foreground mr-2 hidden sm:block">I am a...</div>
            <Link href="/for-business-owners">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Solopreneur / Small Business Owner <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/for-community-organisations">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                Charity / VCSE <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
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
            <h3 className="mb-4">For Business Owners</h3>
            <p className="text-muted-foreground mb-8">
              You're a consultant, creative, or solopreneur drowning in admin and losing sight of why you started. You need focus, structure, and someone who actually follows through. If you're wondering how everyone else seems to manage it — they don't. They just have better support behind them.
            </p>
            <ul className="space-y-3 mb-8 mt-auto">
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Project Focus Sessions</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Virtual Assistant Support</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> ADHD-Friendly Business Support</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Accountability & Action Planning</li>
            </ul>
            <Link href="/for-business-owners">
              <Button variant="outline" className="w-full">Explore Services</Button>
            </Link>
          </div>

          {/* Community Org Card */}
          <div className="notion-card p-8 md:p-10 flex flex-col h-full bg-card">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="mb-4">Small Charities & VCSEs</h3>
            <p className="text-muted-foreground mb-8">
              You started your organisation because you cared deeply about your community. Now you're drowning in admin, chasing funders, writing the same story six different ways, and wondering how everyone else seems to manage it. They don't. They just have the right people in their corner.
            </p>
            <ul className="space-y-3 mb-8 mt-auto">
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Impact Report Writing</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Project Management</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Operational & Admin Support</li>
              <li className="flex items-start gap-2 text-sm"><Target className="w-5 h-5 text-primary shrink-0" /> Partnership & Stakeholder Work</li>
            </ul>
            <Link href="/for-community-organisations">
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
              desc: "We start with a free 30-minute chat. No pressure, no pitch. Just untangling what you need and seeing if we're a fit."
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
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="text-primary font-bold">
            Book a Complimentary Focus Session
          </Button>
        </Link>
      </Section>
    </Layout>
  );
}
