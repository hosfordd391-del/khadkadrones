"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lock, Landmark, CreditCard } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { LogoFull } from "@/components/logo"

function formatAUD(amount: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", minimumFractionDigits: 2 }).format(amount)
}

const AU_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"] as const

export default function CheckoutPage() {
  const { items, cartTotal } = useCart()
  const [shipping, setShipping] = useState<"standard" | "express">("standard")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("bank")
  const [submitted, setSubmitted] = useState(false)

  const shippingCost = shipping === "express" ? 19.95 : 9.95
  const total = cartTotal + shippingCost

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Checkout</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your cart is empty</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Add some products to your cart before checking out.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-4">
          <Lock className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Order Confirmed</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Thank you for your order. You will receive a confirmation email shortly.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Checkout header */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="group flex items-center">
            <LogoFull height={36} className="transition-transform group-hover:scale-105" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to shop
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Left column — form */}
            <div className="space-y-8">
              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold">Contact</h2>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
              </section>

              {/* Shipping address */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold">Shipping Address</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm text-muted-foreground">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm text-muted-foreground">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="mb-1.5 block text-sm text-muted-foreground">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div>
                  <label htmlFor="apartment" className="mb-1.5 block text-sm text-muted-foreground">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    id="apartment"
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="city" className="mb-1.5 block text-sm text-muted-foreground">
                      City / Suburb
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="mb-1.5 block text-sm text-muted-foreground">
                      State
                    </label>
                    <select
                      id="state"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    >
                      <option value="">Select...</option>
                      {AU_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="postcode" className="mb-1.5 block text-sm text-muted-foreground">
                      Postcode
                    </label>
                    <input
                      id="postcode"
                      type="text"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{4}"
                      maxLength={4}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-muted-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                </div>
              </section>

              {/* Shipping method */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold">Shipping Method</h2>
                <div className="space-y-2">
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                      shipping === "standard" ? "border-primary bg-primary/5" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shipping === "standard"}
                        onChange={() => setShipping("standard")}
                        className="h-4 w-4 accent-primary"
                      />
                      <div>
                        <p className="text-sm font-medium">Standard Shipping</p>
                        <p className="text-xs text-muted-foreground">5-10 business days</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">$9.95</span>
                  </label>
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                      shipping === "express" ? "border-primary bg-primary/5" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shipping === "express"}
                        onChange={() => setShipping("express")}
                        className="h-4 w-4 accent-primary"
                      />
                      <div>
                        <p className="text-sm font-medium">Express Shipping</p>
                        <p className="text-xs text-muted-foreground">1-3 business days</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">$19.95</span>
                  </label>
                </div>
              </section>

              {/* Payment */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold">Payment</h2>
                <div className="space-y-2">
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                      paymentMethod === "bank" ? "border-primary bg-primary/5" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={() => setPaymentMethod("bank")}
                        className="h-4 w-4 accent-primary"
                      />
                      <div className="flex items-center gap-2">
                        <Landmark className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Bank Transfer</span>
                      </div>
                    </div>
                  </label>
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                      paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="h-4 w-4 accent-primary"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Credit / Debit Card</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <img src="/icons/visa.svg" alt="Visa" className="h-7 w-auto" />
                      <img src="/icons/mastercard.svg" alt="Mastercard" className="h-7 w-auto" />
                      <img src="/icons/amex.svg" alt="American Express" className="h-7 w-auto" />
                    </div>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="rounded-lg border border-border p-4 sm:p-5 space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="mb-1.5 block text-sm text-muted-foreground">
                        Card number
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        inputMode="numeric"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardName" className="mb-1.5 block text-sm text-muted-foreground">
                        Name on card
                      </label>
                      <input
                        id="cardName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="expiry" className="mb-1.5 block text-sm text-muted-foreground">
                          Expiry date
                        </label>
                        <input
                          id="expiry"
                          type="text"
                          placeholder="MM / YY"
                          maxLength={7}
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="mb-1.5 block text-sm text-muted-foreground">
                          CVC
                        </label>
                        <input
                          id="cvc"
                          type="text"
                          inputMode="numeric"
                          placeholder="123"
                          maxLength={4}
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "bank" && (
                  <div className="rounded-lg border border-border bg-secondary/30 p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div className="space-y-1.5">
                        <p className="text-sm font-medium">Bank transfer selected</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          After placing your order, our bank details will be sent to your email address. Your order will be confirmed once payment has been received.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Submit — visible on mobile above order summary */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:hidden"
              >
                <Lock className="h-4 w-4" />
                Place Order — {formatAUD(total)}
              </button>
            </div>

            {/* Right column — order summary */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

                <div className="space-y-3 border-b border-border pb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary/30">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground text-[10px] font-bold text-background">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight truncate">{item.product.name}</p>
                      </div>
                      <p className="text-sm font-medium shrink-0">
                        {formatAUD(item.product.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-b border-border py-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatAUD(cartTotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{formatAUD(shippingCost)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-lg font-bold">{formatAUD(total)}</span>
                </div>

                <button
                  type="submit"
                  className="mt-5 hidden w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:flex"
                >
                  <Lock className="h-4 w-4" />
                  Place Order
                </button>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
