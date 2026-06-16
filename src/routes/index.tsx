import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import dish from "@/assets/dish.jpg";
import garden from "@/assets/garden.jpg";
import coffee from "@/assets/coffee.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* Magazine hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-end">
          <div className="md:col-span-5">
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">
              Rungiri · Est. under the wattle trees
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95]">
              A long, slow lunch under the wattle trees.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Wattle House is a garden restaurant in Bethsaida Park, Kikuyu —
              huge windows, generous portions, and a kids&apos; play area
              tucked beside the lawn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
              >
                See the menu
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm hover:bg-card transition"
              >
                Plan a visit
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Rating</dt>
                <dd className="mt-1 font-serif text-2xl">4.6 ★</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Per person</dt>
                <dd className="mt-1 font-serif text-2xl">Ksh 500–1k</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Closes</dt>
                <dd className="mt-1 font-serif text-2xl">8 pm</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-md">
              <img
                src={hero}
                alt="Sun-filled Wattle House dining room with floor-to-ceiling windows looking onto the garden"
                width={1600}
                height={1100}
                className="w-full h-[60vh] md:h-[78vh] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <section className="mt-20 border-y border-border/60 bg-card/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Dine-in</span>
          <span>Kerbside Pickup</span>
          <span>Delivery</span>
          <span>Event Space</span>
          <span>Kids&apos; Play Area</span>
          <span>Outdoor Seating</span>
        </div>
      </section>

      {/* Featured story — zigzag magazine block */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <img
              src={garden}
              alt="Outdoor garden seating under wattle trees at golden hour"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">
              The Garden
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Outdoor seating, string lights, slow afternoons.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pull up a chair on the lawn. The garden seats families, couples
              and small celebrations equally well — and there&apos;s room for
              the kids to run.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center text-sm underline underline-offset-4 hover:text-primary"
            >
              About the house →
            </Link>
          </div>
        </div>
      </section>

      {/* Two-up: dish + coffee */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <article className="group">
            <div className="overflow-hidden rounded-md">
              <img
                src={dish}
                alt="Pork chops with roasted seasonal vegetables"
                loading="lazy"
                width={1200}
                height={1400}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <p className="mt-5 uppercase tracking-[0.2em] text-xs text-muted-foreground">
              House favourite
            </p>
            <h3 className="mt-2 font-serif text-3xl">Pork chops, the long way.</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              One of the dishes guests keep coming back for. Generous,
              well-seasoned, plated simply.
            </p>
          </article>

          <article className="group md:mt-24">
            <div className="overflow-hidden rounded-md">
              <img
                src={coffee}
                alt="Americano coffee being poured into a small ceramic cup"
                loading="lazy"
                width={1000}
                height={1200}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <p className="mt-5 uppercase tracking-[0.2em] text-xs text-muted-foreground">
              From the bar
            </p>
            <h3 className="mt-2 font-serif text-3xl">Coffee &amp; Americano.</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Stay a while after the meal. Espresso, americano and a short list
              of post-lunch favourites.
            </p>
          </article>
        </div>
      </section>

      {/* Reviews band */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">
                What guests say
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                4.6 ★ · 235 reviews
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <figure key={r.name} className="border-t border-border pt-6">
                <blockquote className="font-serif text-xl leading-snug">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="text-foreground">{r.name}</span> · {r.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
          Come for lunch. Stay until the light goes.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+254791968848"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            Call 0791 968 848
          </a>
          <Link
            to="/visit"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm hover:bg-card transition"
          >
            Directions
          </Link>
        </div>
      </section>
    </>
  );
}

const reviews = [
  {
    name: "Wanjiru Kinuthia",
    meta: "2 months ago",
    quote:
      "Wattle House is such a beautiful location. The space itself — the ambience, the huge windows — is wonderful.",
  },
  {
    name: "Carol Gichohi",
    meta: "Local Guide · 4 months ago",
    quote:
      "Cool ambiance, the food is delicious and the portions are filling. They even host events. Highly recommend.",
  },
  {
    name: "Molly Maribe",
    meta: "Local Guide · 3 months ago",
    quote:
      "Best suited for families because of the kids' play area. Food was good with filling portions.",
  },
];
