export function generateWebsiteStructuredData(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Khadka Drones",
    description:
      "Australian online retailer of consumer drones and drone accessories from DJI, Autel, and more. Batteries, cases, ND filters, propellers, and parts shipped Australia-wide.",
    url: url,
    telephone: "+61427716039",
    email: "arjun@khadkadrones.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
  }
}
