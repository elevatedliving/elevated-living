import { Link } from "wouter";
import { Linkedin, Twitter, Mail } from "lucide-react";

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
              UK-based consultancy helping business owners and community organisations find clarity, execute projects, and elevate their impact.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:hello@elevatedliving.co.uk" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors text-background">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-background/90">For Solopreneurs</h4>
            <ul className="space-y-3">
              <li><Link href="/for-business-owners" className="text-background/70 hover:text-primary transition-colors text-sm">Project Clarity</Link></li>
              <li><Link href="/for-business-owners" className="text-background/70 hover:text-primary transition-colors text-sm">Virtual Assistant Support</Link></li>
              <li><Link href="/for-business-owners" className="text-background/70 hover:text-primary transition-colors text-sm">Access to Work (ADHD)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-background/90">For Community Orgs</h4>
            <ul className="space-y-3">
              <li><Link href="/for-community-organisations" className="text-background/70 hover:text-primary transition-colors text-sm">Project Management</Link></li>
              <li><Link href="/impact-report-writing" className="text-background/70 hover:text-primary transition-colors text-sm">Impact Report Writing</Link></li>
              <li><Link href="/for-community-organisations" className="text-background/70 hover:text-primary transition-colors text-sm">Strategy & Operations</Link></li>
            </ul>
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

        <div className="border-t border-background/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Elevated Living. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
