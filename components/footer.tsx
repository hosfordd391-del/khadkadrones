import { Phone, Mail, MapPin } from "lucide-react"
import { LogoFull } from "./logo"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/30 bg-secondary/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-3">
          <div className="space-y-4">
            <LogoFull height={48} className="-ml-1" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Australian online retailer of consumer drones and drone accessories from DJI, Autel, and more. Shipped Australia-wide.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Products", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:0427716039"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                0427 716 039
              </a>
              <a
                href="mailto:arjun@khadkadrones.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                arjun@khadkadrones.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>Sydney, NSW, Australia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Arjun Khadka. ABN 96 670 984 082.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Consumer drones and accessories shipped across Australia.
          </p>
        </div>
      </div>
    </footer>
  )
}
