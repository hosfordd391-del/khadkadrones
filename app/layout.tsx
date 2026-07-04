import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://khadkadrones.com"),
  title: {
    default: "Consumer Drones & Accessories — Khadka Drones",
    template: "%s | Khadka Drones",
  },
  description:
    "Australian online retailer of consumer drones and drone accessories from DJI, Autel, and more. Batteries, cases, ND filters, propellers, and parts shipped Australia-wide.",
  keywords: [
    "consumer drones Australia",
    "DJI drones Australia",
    "Autel drones",
    "drone accessories",
    "drone batteries",
    "drone carrying cases",
    "ND filters drone",
    "drone propellers",
    "drone parts Australia",
    "buy drones online Australia",
  ],
  authors: [{ name: "Khadka Drones" }],
  creator: "Khadka Drones",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    title: "Consumer Drones & Accessories — Khadka Drones",
    description:
      "Australian online retailer of consumer drones and drone accessories from DJI, Autel, and more. Batteries, cases, ND filters, propellers, and parts shipped Australia-wide.",
    siteName: "Khadka Drones",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="khadka-drones-theme">
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
