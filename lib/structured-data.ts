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
      streetAddress: "Unit 43, 106-116 Elizabeth St",
      addressLocality: "Ashfield",
      addressRegion: "NSW",
      postalCode: "2131",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
  }
}
