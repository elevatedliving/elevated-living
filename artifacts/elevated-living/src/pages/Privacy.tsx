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
            <h2>Data Controller</h2>
            <p>
              Elevated Living Enterprise Limited is the data controller for personal information
              collected through elevatedliving.uk and related services. For questions about this
              policy or the handling of personal data, contact Elevated Living at{" "}
              <a href="mailto:contact@elevatedliving.uk">contact@elevatedliving.uk</a>.
            </p>
            <p>
              Company registration number: 14986946
              <br />
              Registered address: Office 1270, 12 Farwig Lane, Bromley BR1 3RB.
              <br />
              ICO registration number: ZB668763
            </p>

            <h2>Information Collected</h2>
            <p>Information collected depends on how you interact with Elevated Living:</p>
            <ul>
              <li>
                <strong>Newsletter / mailing list signup:</strong> name and email address
                (required); phone number, website, and company name (optional, if you choose to
                provide them).
              </li>
              <li>
                <strong>Contact and enquiry forms:</strong> name, email address, and the content
                of your message. Where you get in touch or express interest in Elevated Living's
                services, your details may be stored in its customer relationship management
                (CRM) system to manage and follow up on that contact.
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
                <strong>Session and client work:</strong> where you work with Elevated Living on a
                1:1 or retainer basis, notes, action plans, and related material from your sessions
                may be held to deliver the service.
              </li>
              <li>
                <strong>Payments:</strong> if you pay for a service, payment is processed by
                Stripe. Elevated Living does not store your card details.
              </li>
            </ul>

            <h2>Use of Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Send you newsletter content and updates, where you&apos;ve signed up to receive them</li>
              <li>
                Respond to enquiries and contact form submissions, and manage that relationship
                through our CRM system
              </li>
              <li>Deliver quiz results and related follow-up content</li>
              <li>Manage and confirm bookings and consultations</li>
              <li>
                Deliver services you&apos;ve commissioned from Elevated Living, including keeping session notes
                and action plans
              </li>
              <li>Process payments for services</li>
              <li>Meet legal and accounting obligations (e.g. keeping financial records)</li>
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

            <h2>Data Sharing</h2>
            <p>
              Elevated Living uses the following third-party services (data processors) to operate
              its business.
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
              Elevated Living does not sell, rent, or share your personal information with third parties for their
              own marketing purposes.
            </p>
            <p>
              Some of these providers may process data outside the UK/EU (for example, Stripe).
              Where this happens, Elevated Living relies on the provider&apos;s own compliance mechanisms, such
              as Standard Contractual Clauses, to ensure your data remains protected.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              At the time of writing, this website does not use analytics or tracking cookies (e.g.
              Google Analytics, Meta Pixel). Essential cookies may be used where required for the
              site or booking tools to function correctly. If analytics or tracking tools are
              introduced in future, this policy will be updated and, where required, consent will
              be requested via a cookie banner.
            </p>

            <h2>Data Retention</h2>
            <ul>
              <li>
                <strong>Newsletter subscribers:</strong> for as long as you remain subscribed, or
                  until deletion is requested.
              </li>
              <li>
                <strong>Enquiries and leads (CRM):</strong> kept for a reasonable period to allow
                follow-up, then deleted or archived if no ongoing relationship develops.
              </li>
              <li>
                <strong>Client and session records:</strong> kept for the duration of the client
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
              <li>Access the personal data held by Elevated Living</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
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

            <h2>Children&apos;s Data</h2>
            <p>
              Services provided by Elevated Living are aimed at adults running businesses and
              organisations. Personal data from children is not knowingly collected.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              Elevated Living may update this policy from time to time to reflect changes in its
              practices or legal requirements. The &quot;last updated&quot; date at the top of this
              page shows when it was last revised.
            </p>

            <h2>Contact Elevated Living</h2>
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