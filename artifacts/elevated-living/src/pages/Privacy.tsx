import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

export function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Elevated Living</title>
        <meta
          name="description"
          content="Privacy Policy for Elevated Living Enterprise Limited."
        />
        <meta property="og:title" content="Privacy Policy | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta
          property="og:description"
          content="Privacy Policy for Elevated Living Enterprise Limited."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Elevated Living Enterprise Limited</p>
            <p className="text-sm text-muted-foreground">Last updated: 17th September 2026</p>
          </div>

          <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground max-w-none">
            <h2>Who we are</h2>
            <p>
              Elevated Living Enterprise Limited (&quot;Elevated Living&quot;, &quot;we&quot;,
              &quot;us&quot;) is the data controller for the personal information collected
              through elevatedliving.uk and our related services. If you have any questions about
              this policy or how we handle your data, contact us at{" "}
              <a href="mailto:contact@elevatedliving.uk">contact@elevatedliving.uk</a>.
            </p>
            <p>
              Company registration number: 14986946
              <br />
              Registered address: Office 1270, 12 Farwig Lane, Bromley BR1 3RB.
              <br />
              ICO registration number: ZB668763
            </p>

            <h2>What information we collect</h2>
            <p>We collect different information depending on how you interact with us:</p>
            <ul>
              <li>
                <strong>Newsletter / mailing list signup:</strong> name and email address
                (required); phone number, website, and company name (optional, if you choose to
                provide them).
              </li>
              <li>
                <strong>Contact and enquiry forms:</strong> name, email address, and the content
                of your message. Where you get in touch or express interest in our services, your
                details may be stored in our customer relationship management (CRM) system so we
                can manage and follow up on that contact.
              </li>
              <li>
                <strong>Quiz / lead magnets:</strong> email address (required to receive your
                result) and your quiz responses.
              </li>
              <li>
                <strong>Bookings and consultations:</strong> name, email address, and any details
                you provide when booking a free consultation or paid session.
              </li>
              <li>
                <strong>Session and client work:</strong> where you work with us on a 1:1 or
                retainer basis, we may hold notes, action plans, and related material from your
                sessions in order to deliver the service.
              </li>
              <li>
                <strong>Payments:</strong> if you pay for a service, payment is processed by
                Stripe. We do not store your card details ourselves.
              </li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Send you newsletter content and updates, where you&apos;ve signed up to receive them</li>
              <li>
                Respond to enquiries and contact form submissions, and manage that relationship
                through our CRM system
              </li>
              <li>Deliver quiz results and related follow-up content</li>
              <li>Manage and confirm bookings and consultations</li>
              <li>
                Deliver the services you&apos;ve engaged us for, including keeping session notes
                and action plans
              </li>
              <li>Process payments for services</li>
              <li>Meet our legal and accounting obligations (e.g. keeping financial records)</li>
            </ul>

            <h2>Legal basis for processing</h2>
            <ul>
              <li>
                <strong>Consent</strong> — for newsletter emails and marketing communications. You
                can withdraw this at any time.
              </li>
              <li>
                <strong>Contract</strong> — for delivering a service you&apos;ve booked or paid
                for, including session notes and payment processing.
              </li>
              <li>
                <strong>Legitimate interests</strong> — for responding to general enquiries and
                understanding how people find and use our services.
              </li>
              <li>
                <strong>Legal obligation</strong> — for retaining financial records as required by
                UK law.
              </li>
            </ul>

            <h2>Who we share your information with</h2>
            <p>
              We use the following third-party services (data processors) to run our business.
              Each only receives the data needed for its specific purpose:
            </p>
            <div className="not-prose my-8 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">Service</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 text-foreground">Zoho Mail</td><td className="px-4 py-3 text-muted-foreground">Email hosting (EU data residency)</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">Zoho CRM</td><td className="px-4 py-3 text-muted-foreground">Storing and managing lead and enquiry information</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">MailerLite</td><td className="px-4 py-3 text-muted-foreground">Newsletter and email marketing</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">Tally</td><td className="px-4 py-3 text-muted-foreground">Form collection (enquiries, quiz)</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">Cal.com / cal.eu</td><td className="px-4 py-3 text-muted-foreground">Booking and scheduling</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">Stripe</td><td className="px-4 py-3 text-muted-foreground">Payment processing</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">Notion</td><td className="px-4 py-3 text-muted-foreground">Secure storage of session notes for clients</td></tr>
                  <tr><td className="px-4 py-3 text-foreground">Make.com</td><td className="px-4 py-3 text-muted-foreground">Automation that passes quiz data to MailerLite</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              We do not sell, rent, or share your personal information with third parties for their
              own marketing purposes.
            </p>
            <p>
              Some of these providers may process data outside the UK/EU (for example, Stripe).
              Where this happens, we rely on the provider&apos;s own compliance mechanisms, such
              as Standard Contractual Clauses, to ensure your data remains protected.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              At the time of writing, this website does not use analytics or tracking cookies (e.g.
              Google Analytics, Meta Pixel). We may use essential cookies required for the site or
              booking tools to function correctly. If we introduce analytics or tracking tools in
              future, we will update this policy and, where required, ask for your consent via a
              cookie banner.
            </p>

            <h2>How long we keep your information</h2>
            <ul>
              <li>
                <strong>Newsletter subscribers:</strong> for as long as you remain subscribed, or
                until you ask us to delete your details.
              </li>
              <li>
                <strong>Enquiries and leads (CRM):</strong> kept for a reasonable period to allow
                us to follow up, then deleted or archived if no ongoing relationship develops.
              </li>
              <li>
                <strong>Client and session records:</strong> kept for the duration of our working
                relationship and for a reasonable period afterwards, in line with professional
                good practice.
              </li>
              <li>
                <strong>Financial and payment records:</strong> retained for at least 6 years, as
                required by UK tax law.
              </li>
            </ul>

            <h2>Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Ask us to correct inaccurate data</li>
              <li>Ask us to delete your data (&quot;right to be forgotten&quot;)</li>
              <li>Restrict or object to certain processing</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw consent at any time (e.g. by unsubscribing from emails)</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:contact@elevatedliving.uk">contact@elevatedliving.uk</a>. You also
              have the right to complain to the UK&apos;s data protection regulator, the
              Information Commissioner&apos;s Office (ICO), at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              .
            </p>

            <h2>Children&apos;s data</h2>
            <p>
              Our services are aimed at adults running businesses and organisations. We do not
              knowingly collect personal data from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices or
              legal requirements. The &quot;last updated&quot; date at the top of this page will
              show when it was last revised.
            </p>

            <h2>Contact us</h2>
            <p>
              Elevated Living Enterprise Limited
              <br />
              Email: <a href="mailto:contact@elevatedliving.uk">contact@elevatedliving.uk</a>
              <br />
              Website: <a href="https://www.elevatedliving.uk">www.elevatedliving.uk</a>
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}