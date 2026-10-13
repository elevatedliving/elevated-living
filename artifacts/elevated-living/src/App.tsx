import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import type { HelmetServerState } from "react-helmet-async";
import { publicRoutes } from "@/routes";
import NotFound from "@/pages/not-found";
import { FloatingAssessmentButton } from "@/components/FloatingAssessmentButton";

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
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

interface AppProps {
  ssrPath?: string;
  helmetContext?: { helmet?: HelmetServerState | null };
}

function App({ ssrPath, helmetContext }: AppProps) {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter
            base={import.meta.env.BASE_URL.replace(/\/$/, "")}
            ssrPath={ssrPath}
          >
            <>
              <Router />
              <FloatingAssessmentButton />
            </>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
