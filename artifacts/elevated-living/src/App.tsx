import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

// Pages
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { BusinessOwners } from "@/pages/BusinessOwners";
import { CommunityOrgs } from "@/pages/CommunityOrgs";
import { ImpactReportWriting } from "@/pages/ImpactReportWriting";
import { Contact } from "@/pages/Contact";
import { Blog } from "@/pages/Blog";
import { BlogPostTOMs } from "@/pages/BlogPostTOMs";
import { BlogPostHoodie } from "@/pages/BlogPostHoodie";
import { BlogPostConfidence } from "@/pages/BlogPostConfidence";
import { BlogPostAccessToWork } from "@/pages/BlogPostAccessToWork";
import { BlogPostCorporateJargon } from "@/pages/BlogPostCorporateJargon";
import { Testimonials } from "@/pages/Testimonials";
import { Resources } from "@/pages/Resources";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/for-business-owners" component={BusinessOwners} />
      <Route path="/for-community-organisations" component={CommunityOrgs} />
      <Route path="/impact-report-writing" component={ImpactReportWriting} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/toms-vs-social-value" component={BlogPostTOMs} />
      <Route path="/blog/hoodie-hypothesis" component={BlogPostHoodie} />
      <Route path="/blog/confidence-action" component={BlogPostConfidence} />
      <Route path="/blog/access-to-work" component={BlogPostAccessToWork} />
      <Route path="/blog/corporate-jargon" component={BlogPostCorporateJargon} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/resources" component={Resources} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
