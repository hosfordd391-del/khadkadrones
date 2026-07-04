import { DollarSign, Truck, ShieldCheck, RotateCcw } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "We keep retail margins fair and transparent. No inflated RRPs — just honest pricing on genuine products from authorised distributors.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Orders dispatched promptly via Australia Post or courier. We ship to every state and territory across Australia.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description: "All stock sourced from authorised Australian distributors. Every product comes with full manufacturer warranty — no grey imports.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Straightforward returns process if something isn't right. We stand behind every product we sell and make it easy to resolve issues.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-2 sm:mb-14 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Why Us</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Shop With Khadka Drones</h2>
          <p className="max-w-lg text-muted-foreground">
            Genuine drone products from authorised Australian distributors, shipped fast with straightforward service.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up stagger-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card/50 p-5 sm:p-6 transition-colors hover:bg-card hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
