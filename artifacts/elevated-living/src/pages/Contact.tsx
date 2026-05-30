import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

type ContactFormData = {
  name: string;
  email: string;
  organization?: string;
  message: string;
  referral: string;
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! We'll be in touch soon.",
    });
    reset();
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Elevated Living</title>
        <meta name="description" content="Get in touch with Elevated Living. Book a complimentary focus session, ask about impact report writing, or find out how we can support your organisation or business." />
        <meta property="og:title" content="Contact | Elevated Living" />
        <meta property="og:description" content="Get in touch with Elevated Living. Book a complimentary focus session, ask about impact report writing, or find out how we can support your organisation or business." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Section className="pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-4">Let's Talk</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need project focus, admin support, or an impact report, the best way to start is with a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Calendly Column */}
            <div>
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" /> Book a Call
              </h2>
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden border border-border shadow-sm"
                data-url="https://calendly.com/contact-elevatedliving/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>

            {/* Form Column */}
            <div>
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" /> Send a Message
              </h2>
              
              {submitted ? (
                <div className="bg-accent/30 border border-primary/20 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl mb-2">Message Received!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 48 hours.</p>
                  <Button variant="outline" className="mt-8 mx-auto" onClick={() => setSubmitted(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-card p-8 rounded-xl shadow-sm border border-border">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5 col-span-2 sm:col-span-1">
                      <label className="text-sm font-medium">Name <span className="text-destructive">*</span></label>
                      <input 
                        {...register("name", { required: true })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-1.5 col-span-2 sm:col-span-1">
                      <label className="text-sm font-medium">Email <span className="text-destructive">*</span></label>
                      <input 
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Organisation (Optional)</label>
                    <input 
                      {...register("organization")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Your Company or CIC"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Message <span className="text-destructive">*</span></label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">How did you hear about us?</label>
                    <select 
                      {...register("referral")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="">Select an option...</option>
                      <option value="search">Google / Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Word of Mouth</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
