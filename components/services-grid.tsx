"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { services, categories, type Category } from "@/lib/services"
import { ShoppingBag, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"

function formatAUD(amount: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", minimumFractionDigits: 0 }).format(amount)
}

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Products")
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set())
  const { addToCart } = useCart()

  const filteredServices =
    activeCategory === "All Products" ? services : services.filter((s) => s.category === activeCategory)

  const handleAddToCart = useCallback((product: typeof services[0]) => {
    addToCart(product)
    setAddedIds((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
    }, 1200)
  }, [addToCart])

  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">What We Sell</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
            <p className="max-w-md text-muted-foreground">
              Consumer drones and accessories from DJI, Autel, and more — shipped Australia-wide from authorised distributors.
            </p>
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-hide animate-fade-in-up stagger-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 rounded-lg border px-4 py-2.5 text-xs font-medium transition-all active:scale-[0.98]",
                activeCategory === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground hover:bg-secondary/50",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => {
            const justAdded = addedIds.has(service.id)
            return (
              <article
                key={service.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover-lift animate-fade-in-up",
                )}
                style={{ animationDelay: `${(index % 8) * 80 + 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {service.featured && (
                    <div className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {service.category}
                  </p>
                  <h3 className="mb-2 text-sm font-semibold leading-snug tracking-tight sm:text-base">
                    {service.name}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-foreground">{formatAUD(service.price)}</span>
                    <button
                      onClick={() => handleAddToCart(service)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-all active:scale-[0.97]",
                        justAdded
                          ? "bg-success text-success-foreground"
                          : "bg-primary text-primary-foreground hover:opacity-90",
                      )}
                    >
                      {justAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Added!
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No products in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
