import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Wattle House" },
      { name: "description", content: "A short, seasonal menu at Wattle House: house favourites, sharing plates, drinks and coffee." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };
type Section = { title: string; note?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "House favourites",
    note: "What guests order again and again.",
    items: [
      { name: "Pork chops", desc: "Slow-cooked, roasted seasonal vegetables", price: "950" },
      { name: "Grilled chicken", desc: "Herb marinade, rosemary potatoes", price: "850" },
      { name: "Beef stew & ugali", desc: "Tender beef, rich tomato gravy", price: "700" },
    ],
  },
  {
    title: "From the garden",
    items: [
      { name: "House salad", desc: "Greens, avocado, vinaigrette", price: "550" },
      { name: "Roasted vegetables", desc: "Seasonal, olive oil, sea salt", price: "500" },
      { name: "Soup of the day", price: "450" },
    ],
  },
  {
    title: "Small plates & sides",
    items: [
      { name: "Samosas (3 pc)", price: "300" },
      { name: "Fries", price: "300" },
      { name: "Chapati", price: "100" },
    ],
  },
  {
    title: "Coffee & drinks",
    note: "Espresso bar open all day.",
    items: [
      { name: "Americano", price: "200" },
      { name: "Espresso", price: "180" },
      { name: "Cappuccino", price: "250" },
      { name: "Fresh juice", price: "300" },
    ],
  },
];

function MenuPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <header className="border-b border-border pb-10 mb-12">
        <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground">The Menu</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95]">
          A short, seasonal list.
        </h1>
        <p className="mt-5 text-muted-foreground max-w-xl">
          Prices in Kenyan shillings. Most guests spend Ksh 500–1,000 per person.
          Menu changes with the season — call ahead for specials.
        </p>
      </header>

      <div className="space-y-16">
        {sections.map((s) => (
          <div key={s.title}>
            <div className="flex items-baseline justify-between border-b border-border pb-3 mb-6">
              <h2 className="font-serif text-3xl">{s.title}</h2>
              {s.note && (
                <p className="text-sm text-muted-foreground hidden sm:block">{s.note}</p>
              )}
            </div>
            <ul className="divide-y divide-border">
              {s.items.map((it) => (
                <li key={it.name} className="py-5 flex items-baseline gap-6">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl">{it.name}</h3>
                    {it.desc && (
                      <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                    )}
                  </div>
                  <div className="font-serif text-xl tabular-nums">
                    <span className="text-xs text-muted-foreground mr-1">Ksh</span>
                    {it.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
