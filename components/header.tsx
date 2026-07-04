"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Phone, MapPin, ShoppingCart } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LogoFull } from "./logo"
import { CartDrawer } from "./cart-drawer"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">Sydney, NSW</span>
              <span className="sm:hidden">NSW</span>
            </span>
            <span className="hidden sm:inline text-primary-foreground/60">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span>ABN: 96 670 984 082</span>
            </span>
          </div>
          <a href="tel:0427716039" className="flex items-center gap-1.5 font-mono text-xs transition-opacity hover:opacity-80">
            <Phone className="h-3 w-3" />
            <span>0427 716 039</span>
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border/50 bg-background/95 backdrop-blur-lg shadow-sm"
            : "bg-background border-b border-border/30",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group flex items-center">
              <LogoFull height={48} className="transition-transform group-hover:scale-105" />
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-secondary"
                aria-label="Open cart"
              >
                <ShoppingCart className="h-[18px] w-[18px]" />
                {cartCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card md:hidden transition-colors hover:bg-secondary"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span
                    className={cn(
                      "h-0.5 bg-foreground transition-all duration-300 origin-center",
                      isMobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5",
                    )}
                  />
                  <span
                    className={cn(
                      "h-0.5 w-3.5 bg-foreground transition-all duration-300",
                      isMobileMenuOpen && "opacity-0 translate-x-2",
                    )}
                  />
                  <span
                    className={cn(
                      "h-0.5 bg-foreground transition-all duration-300 origin-center",
                      isMobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5",
                    )}
                  />
                </div>
              </button>
            </div>
          </nav>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300 md:hidden",
              isMobileMenuOpen ? "max-h-80 opacity-100 pt-4" : "max-h-0 opacity-0",
            )}
          >
            <div className="flex flex-col gap-1 border-t border-border/50 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-3 border-t border-border/50 px-4 pt-4 pb-2 font-mono text-xs text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <a href="tel:0427716039">0427 716 039</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer />
    </>
  )
}
