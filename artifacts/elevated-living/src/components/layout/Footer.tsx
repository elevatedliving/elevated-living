import { Link } from "wouter";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}images/elevated-living-logo.png`}
              alt="Elevated Living"
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm mb-6 max-w-xs">
              UK-based consultancy helping solopreneurs, small business owners, and community organisations and social enterprises find focus, execute projects, and elevate their impact.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/elevatedlivingenterprise/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/elevatedliving.uk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/ElevatedLivingEnterprise" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Facebook className="w-4 h-4" />
              </a>
              <Link href="/contact" aria-label="Contact" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            <a
              href="https://www.policybee.co.uk/refer/xmxk-419"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex w-28 flex-col items-center text-center"
              aria-label="Get your insurance policy here and receive £20 from PolicyBee"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/policybee-badge.png`}
                alt="Insured through PolicyBee"
                className="h-20 w-20 object-contain transition-transform group-hover:scale-105"
              />
              <span className="mt-2 text-xs leading-snug text-background/70 transition-colors group-hover:text-background">
                Get your insurance policy here and receive £20
              </span>
            </a>
          </div>

          <div>
            <Link href="/for-business-owners" className="font-semibold text-lg mb-4 text-background/90 hover:text-primary transition-colors block">Solopreneur / Small Business Owner</Link>
          </div>

          <div>
            <Link href="/for-community-organisations" className="font-semibold text-lg mb-4 text-background/90 hover:text-primary transition-colors block">Community Org / Social Enterprise</Link>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-background/90">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-background/70 hover:text-primary transition-colors text-sm">About</Link></li>
              <li><Link href="/blog" className="text-background/70 hover:text-primary transition-colors text-sm">Insights & Blog</Link></li>
              <li><Link href="/testimonials" className="text-background/70 hover:text-primary transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-background/20 mt-16 pt-8 text-xs text-background/40 text-center mb-6">
          <p>Some content on this site is drafted with AI assistance and reviewed and edited by Elevated Living before publication. Marketing images are AI-generated.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p>© {new Date().getFullYear()} Elevated Living. All rights reserved.</p>
            <p>ICO Registration No. ZB668763</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
