import { Package, BadgeCheck, Phone } from "lucide-react"

const highlights = [
  {
    icon: Package,
    title: "Wide Product Range",
    description: "Drones, batteries, carrying cases, ND filters, propellers, memory cards, landing pads, and more — everything a recreational pilot or content creator needs.",
  },
  {
    icon: BadgeCheck,
    title: "Authorised AU Stock",
    description: "Every product we sell is sourced from authorised Australian distributors. Genuine stock with full manufacturer warranty — no grey imports.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    description: "You deal directly with Arjun. No call centres or chatbots — just straightforward service, honest advice, and quick responses.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">About</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Your Australian drone retailer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Khadka Drones is owned and operated by Arjun Khadka, an Australian sole trader specialising in consumer drones and drone accessories sold online.
              </p>
              <p>
                We source all stock from authorised Australian distributors and ship directly to customers via Australia Post and courier. Our range covers ready-to-fly drones, spare batteries, chargers, carrying cases, ND filters, propellers, landing pads, gimbal protectors, and memory cards.
              </p>
              <p>
                Our customers are recreational drone users, hobbyist photographers, and content creators looking for genuine products at fair prices with reliable shipping across Australia.
              </p>
            </div>
          </div>

          <div className="space-y-5 animate-fade-in-up stagger-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl border border-border bg-card/50 p-5 sm:p-6 transition-colors hover:bg-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
