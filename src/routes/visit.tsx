import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Wattle House" },
      { name: "description", content: "Find Wattle House in Bethsaida Park, Kikuyu–Nderi Road, Rungiri. Hours, contact and directions." },
    ],
  }),
  component: VisitPage,
});

const hours = [
  ["Monday", "8 am – 8 pm"],
  ["Tuesday", "8 am – 8 pm"],
  ["Wednesday", "8 am – 8 pm"],
  ["Thursday", "8 am – 8 pm"],
  ["Friday", "8 am – 8 pm"],
  ["Saturday", "8 am – 8 pm"],
  ["Sunday", "8 am – 8 pm"],
] as const;

function VisitPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Visit</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[0.95]">
          Find us in Rungiri.
        </h1>

        <div className="mt-10 space-y-8 text-base">
          <div>
            <h2 className="font-serif text-2xl">Address</h2>
            <p className="mt-2 text-muted-foreground">
              Bethsaida Park,<br />
              Kikuyu – Nderi Road,<br />
              Rungiri, Kenya
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Plus code: QM76+JP Rungiri</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl">Contact</h2>
            <p className="mt-2">
              <a href="tel:+254791968848" className="underline underline-offset-4 hover:text-primary">
                0791 968 848
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl">Hours</h2>
            <dl className="mt-3 divide-y divide-border">
              {hours.map(([d, t]) => (
                <div key={d} className="py-2 flex justify-between text-sm">
                  <dt className="text-muted-foreground">{d}</dt>
                  <dd>{t}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Wattle+House+Rungiri"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
            >
              Get directions
            </a>
            <a
              href="tel:+254791968848"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm hover:bg-card transition"
            >
              Call to reserve
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="overflow-hidden rounded-md border border-border h-[70vh] bg-card">
          <iframe
            title="Map to Wattle House"
            src="https://www.google.com/maps?q=Wattle+House+Rungiri&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
