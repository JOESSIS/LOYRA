import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { CurrencyProvider } from "@/lib/currency";
import { Header, Footer, CartDrawer, PageFade } from "@/components/site/Layout";
import { RouteProgressBar, AppLoadingScreen } from "@/components/site/PageLoader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "L'OYRA Cosmétique" },
      { name: "description", content: "Soins de la peau premium L'OYRA Cosmétique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="loyra-initial-preloader">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: 68, height: 68, borderRadius: "50%", border: "1px solid rgba(217,119,6,0.35)", background: "#281C15", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "0 0 24px rgba(217,119,6,0.2)" }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M2 14 L6 6 L12 11 L18 6 L22 14 Z" opacity="0.9" />
                <circle cx="12" cy="18" r="2" />
              </svg>
            </div>
            <div style={{ fontSize: 32, letterSpacing: "0.22em", color: "#FAF5EE", fontWeight: 300 }}>L'OYRÂ</div>
            <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(251,191,36,0.85)", marginTop: 6, textTransform: "uppercase" }}>Haute Cosmétique · Abidjan</div>
            <div style={{ marginTop: 26, width: 130, height: 2, background: "rgba(255,255,255,0.12)", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, #F59E0B, transparent)", animation: "loyraShimmer 1.4s infinite ease-in-out" }} />
            </div>
          </div>
        </div>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <CartProvider>
          <RouteProgressBar />
          <AppLoadingScreen />
          <Header />
          <PageFade>
            <Outlet />
          </PageFade>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </CurrencyProvider>
    </QueryClientProvider>
  );
}
