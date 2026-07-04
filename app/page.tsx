import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "DJI & Autel Drones, Accessories & Parts — Khadka Drones",
  description:
    "Khadka Drones is an Australian online retailer of consumer drones and accessories from DJI, Autel, and more. Batteries, cases, ND filters, propellers, and parts shipped Australia-wide.",
  openGraph: {
    title: "Consumer Drones & Accessories — Khadka Drones",
    description:
      "Australian online retailer of consumer drones and accessories from DJI, Autel, and more. Shipped Australia-wide from authorised distributors.",
    url: "https://khadkadrones.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer Drones & Accessories — Khadka Drones",
    description:
      "Australian online retailer of consumer drones and accessories from DJI, Autel, and more. Shipped Australia-wide from authorised distributors.",
  },
  alternates: {
    canonical: "https://khadkadrones.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
