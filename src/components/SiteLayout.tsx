import { Link, Outlet } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl leading-none">Wattle House</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+254791968848"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            Reserve
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3 text-sm">
          <div>
            <h3 className="font-serif text-2xl">Wattle House</h3>
            <p className="mt-3 text-muted-foreground">
              A garden restaurant in Rungiri. Dine-in, kerbside pickup &amp; delivery.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg">Visit</h4>
            <p className="mt-3 text-muted-foreground">
              Bethsaida Park, Kikuyu&nbsp;–&nbsp;Nderi Road,<br />Rungiri, Kenya
            </p>
            <p className="mt-2 text-muted-foreground">Open daily · Closes 8 pm</p>
          </div>
          <div>
            <h4 className="font-serif text-lg">Contact</h4>
            <p className="mt-3 text-muted-foreground">
              <a href="tel:+254791968848" className="hover:text-foreground">0791 968 848</a>
            </p>
            <p className="mt-1 text-muted-foreground">Ksh 500–1,000 per person</p>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex justify-between">
            <span>© {new Date().getFullYear()} Wattle House</span>
            <span>Rated 4.6 ★ on Google · 235 reviews</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
