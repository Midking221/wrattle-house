import { createFileRoute } from "@tanstack/react-router";
import garden from "@/assets/garden.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Wattle House" },
      { name: "description", content: "A garden restaurant in Bethsaida Park, Rungiri. Family-friendly, with an event space and a kids' play area." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">About</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95]">
          A house in the garden, made for long lunches.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
          Tucked inside Bethsaida Park on Kikuyu–Nderi Road, Wattle House is a
          family-run restaurant with big windows, a generous kitchen and a
          garden built for slow afternoons. We&apos;re known for our pork
          chops, our event space, and the lawn where children can play while
          you finish your coffee.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <img
          src={hero}
          alt="Wattle House dining room"
          loading="lazy"
          width={1600}
          height={1100}
          className="w-full rounded-md object-cover h-[70vh]"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl">The space</h2>
          <p className="mt-4 text-muted-foreground">
            Floor-to-ceiling windows wrap the dining room and pour light onto
            wooden tables. Outside, the garden seats families, friends and small
            celebrations under the wattle trees.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Events</h2>
          <p className="mt-4 text-muted-foreground">
            Birthdays, baby showers, corporate lunches and small weddings — we
            host them all. Get in touch to plan your event and tour the space.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">For families</h2>
          <p className="mt-4 text-muted-foreground">
            There&apos;s a dedicated kids&apos; play area on the lawn so younger
            guests can run, while the rest of the table lingers over the menu.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">How we serve</h2>
          <p className="mt-4 text-muted-foreground">
            Dine-in, kerbside pickup and delivery. Open daily, kitchen closes
            at 8 pm. Reservations recommended on weekends.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <img
          src={garden}
          alt="Outdoor seating in the garden"
          loading="lazy"
          width={1400}
          height={1000}
          className="w-full rounded-md object-cover h-[60vh]"
        />
      </section>
    </>
  );
}
