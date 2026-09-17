import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";

export function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Elevated Living</title>
        <meta
          name="description"
          content="Terms of Service for Elevated Living Enterprise Limited."
        />
        <meta property="og:title" content="Terms of Service | Elevated Living" />
        <meta property="og:image" content="https://www.elevatedliving.uk/images/og-social.png" />
        <meta
          property="og:description"
          content="Terms of Service for Elevated Living Enterprise Limited."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Section className="pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Elevated Living Enterprise Limited</p>
            <p className="text-sm text-muted-foreground">Last updated: 17th September 2026</p>
          </div>

          <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground max-w-none">
            <h2>1. About us</h2>
            <p>
              Elevated Living Enterprise Limited (&quot;Elevated Living&quot;, &quot;we&quot;,
              &quot;us&quot;) operates the website elevatedliving.uk and provides consultancy
              services to solopreneurs, small business owners, and community-led organisations,
              including The Elevated Edit, Fractional Project Management, AI Services, and
              Impact &amp; Partnerships support.
            </p>
            <p>
              Company registration number: 14986946
              <br />
              Registered address: Office 1270, 12 Farwig Lane, Bromley BR1 3RB.
              <br />
              ICO registration number: ZB668763
            </p>
            <p>
              By using this website or booking any of our services, you agree to these Terms. If
              you don&apos;t agree with them, please don&apos;t use the site or book a service.
            </p>

            <h2>2. Use of this website</h2>
            <p>You may use this website for lawful purposes only. You must not:</p>
            <ul>
              <li>Use the site in any way that could damage, disable, or impair it</li>
              <li>Attempt to gain unauthorised access to any part of the site or its systems</li>
              <li>
                Copy, reproduce, or republish content from the site without our permission (see
                Section 6, Intellectual Property)
              </li>
            </ul>
            <p>We may update, suspend, or withdraw any part of the website at any time without notice.</p>

            <h2>3. Our services</h2>
            <p>
              We offer a range of consultancy services, described on our website, including but
              not limited to 1:1 strategy sessions, The Elevated Edit, fractional project
              management, AI training and done-for-you AI support, and impact/partnership
              consultancy.
            </p>
            <p>
              Service descriptions, pricing, and availability on our website are correct at the
              time of publication but may change. Where a service is quoted as &quot;from £X&quot;
              or &quot;bespoke,&quot; final pricing is confirmed following a scoping conversation.
            </p>
            <p>
              Nothing on this website constitutes legal, financial, medical, or other regulated
              professional advice. Our services are intended to support strategic thinking,
              planning, and delivery — not to replace advice from a qualified professional in a
              regulated field.
            </p>

            <h2>4. Bookings</h2>
            <p>Free consultations and paid sessions are booked through our online booking system.</p>
            <p>
              By booking a session, you agree to attend at the scheduled time or to give
              reasonable notice if you need to reschedule.
            </p>
            <p>
              Cancellation and rescheduling notice periods vary by service. The specific notice
              period, and any charges for late cancellation or rescheduling, are set out in the
              agreement you receive when you book that service.
            </p>
            <p>
              Retainer and ongoing services require a minimum commitment period as set out in the
              relevant service description (typically one month), payable in advance, with notice
              required to end the arrangement (typically 30 days) as specified for that service.
            </p>

            <h2>5. Payments</h2>
            <p>
              Fees for services are as set out on our website or as confirmed in a written
              quote/proposal following a scoping conversation.
            </p>
            <p>Payments are processed securely via Stripe. We do not store your card details.</p>
            <p>Retainer and package fees are payable in advance unless otherwise agreed in writing.</p>
            <p>
              Fees are refundable where you cancel in line with the notice period set out in that
              service&apos;s agreement (see Section 4, Bookings). Where cancellation falls outside
              that notice period, fees may not be refundable, as specified in the agreement for
              that service.
            </p>

            <h2>6. Intellectual property</h2>
            <p>
              All content on this website — including text, graphics, logos, and templates — is
              owned by Elevated Living Enterprise Limited unless otherwise stated, and may not be
              copied or reused without our permission.
            </p>
            <p>
              Action plans, reports, and other materials prepared for you personally following a
              session are specific to you and your circumstances, and are provided for your own
              use. They become your property once any applicable fees have been paid in full.
            </p>
            <p>
              Any frameworks, tools, or methodologies we use in delivering our services (e.g.
              proprietary session structures) remain our intellectual property.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              We treat information shared with us during consultations, sessions, and ongoing
              engagements as confidential, and will not share it with third parties except:
            </p>
            <ul>
              <li>Where necessary to deliver the service (e.g. using tools listed in our Privacy Policy)</li>
              <li>Where required by law</li>
              <li>Where you give us explicit permission (e.g. to use anonymised case studies)</li>
            </ul>

            <h2>8. Limitation of liability</h2>
            <p>
              We provide our services with reasonable skill and care, but we do not guarantee
              specific business outcomes, financial results, or funding success, as these depend on
              factors outside our control.
            </p>
            <p>
              We hold Professional Indemnity insurance (cover of £5,000,000) and Public and
              Products Liability insurance (cover of £1,000,000) with Hiscox.
            </p>
            <p>
              To the fullest extent permitted by law, our total liability to you for any claim
              arising from our services — whether in contract, tort (including negligence), or
              otherwise — will not exceed the greater of (a) the total fees paid by you for the
              specific service giving rise to the claim, or (b) the level of our applicable
              insurance cover for that type of claim.
            </p>
            <p>
              To the fullest extent permitted by law, Elevated Living Enterprise Limited will not
              be liable for any indirect, incidental, or consequential loss arising from your use
              of this website or our services.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability for death or personal injury
              caused by our negligence, fraud, or any other liability that cannot be excluded under
              UK law.
            </p>

            <h2>9. Third-party tools and links</h2>
            <p>
              Our website and services may link to or rely on third-party tools (e.g. booking
              systems, payment processors, email platforms). We are not responsible for the
              content, accuracy, or availability of third-party services, and your use of them is
              subject to their own terms and privacy policies.
            </p>

            <h2>10. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. The &quot;last updated&quot; date at
              the top of this page shows when they were last revised. Continued use of the website
              or our services after changes are posted means you accept the updated Terms.
            </p>

            <h2>11. Governing law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes will be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>12. Contact us</h2>
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