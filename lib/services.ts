export interface Service {
  id: number
  name: string
  description: string
  image: string
  category: string
  price: number
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 1,
    name: "Consumer Drones",
    description:
      "Ready-to-fly consumer drones from DJI, Autel, and other leading brands. From compact mini drones to advanced camera platforms for hobbyist photographers and content creators.",
    image: "/images/products/consumer-drones.png",
    category: "Drones",
    price: 799,
    featured: true,
  },
  {
    id: 2,
    name: "DJI Mini 4 Pro",
    description:
      "Ultra-lightweight sub-249g drone with 4K/60fps HDR video, omnidirectional obstacle sensing, and up to 34 minutes flight time. Perfect for travel and everyday flying.",
    image: "/images/products/dji-mini-4-pro.png",
    category: "Drones",
    price: 1149,
    featured: true,
  },
  {
    id: 3,
    name: "DJI Air 3",
    description:
      "Dual-camera drone with wide-angle and 3x medium telephoto lenses, 4K/60fps HDR, 46-minute max flight time, and omnidirectional obstacle sensing.",
    image: "/images/products/dji-air-3.png",
    category: "Drones",
    price: 1649,
    featured: true,
  },
  {
    id: 4,
    name: "DJI Mavic 3 Classic",
    description:
      "Hasselblad camera with a 4/3 CMOS sensor for stunning 5.1K video. 46-minute flight time, omnidirectional obstacle sensing, and advanced return-to-home.",
    image: "/images/products/dji-mavic-3-classic.png",
    category: "Drones",
    price: 2349,
    featured: true,
  },
  {
    id: 5,
    name: "Autel EVO Nano+",
    description:
      "Compact sub-249g drone with 1/1.28-inch CMOS sensor, 4K/30fps video, 28-minute flight time, and three-way obstacle avoidance. Vibrant colour options.",
    image: "/images/products/autel-evo-nano.png",
    category: "Drones",
    price: 1099,
  },
  {
    id: 6,
    name: "DJI Avata 2",
    description:
      "Immersive FPV cinewhoop drone with 4K/60fps ultra-wide video, one-tap acrobatics, built-in propeller guards, and easy motion controller flying.",
    image: "/images/products/dji-avata-2.png",
    category: "Drones",
    price: 899,
  },
  {
    id: 7,
    name: "Batteries & Chargers",
    description:
      "Genuine replacement batteries and multi-bay charging hubs for all major drone models. Keep flying longer with spare intelligent flight batteries and fast chargers.",
    image: "/images/products/batteries-chargers.png",
    category: "Power",
    price: 149,
    featured: true,
  },
  {
    id: 8,
    name: "Carrying Cases",
    description:
      "Hard-shell and soft cases, backpacks, and shoulder bags designed to protect your drone and accessories during transport. Options for every major drone model.",
    image: "/images/products/carrying-cases.png",
    category: "Accessories",
    price: 89,
  },
  {
    id: 9,
    name: "ND Filters",
    description:
      "Neutral density and polariser filter sets for drone cameras. Achieve cinematic motion blur and balanced exposures in bright conditions.",
    image: "/images/products/nd-filters.png",
    category: "Camera",
    price: 79,
  },
  {
    id: 10,
    name: "Propellers & Parts",
    description:
      "Genuine and compatible spare propellers, propeller guards, landing gear, and replacement parts to keep your drone airworthy.",
    image: "/images/products/propellers-parts.png",
    category: "Accessories",
    price: 39,
  },
  {
    id: 11,
    name: "Landing Pads",
    description:
      "Portable, foldable landing pads for safe take-off and landing on any surface. Protects your drone from dirt, grass, and debris.",
    image: "/images/products/landing-pads.png",
    category: "Accessories",
    price: 35,
  },
  {
    id: 12,
    name: "Memory Cards",
    description:
      "High-speed microSD cards rated for 4K and high-bitrate video recording. Reliable storage from trusted brands, tested for drone use.",
    image: "/images/products/memory-cards.png",
    category: "Camera",
    price: 49,
  },
  {
    id: 13,
    name: "Gimbal Protectors",
    description:
      "Transparent gimbal covers and camera lens protectors for DJI and Autel drones. Shields the gimbal during transport and storage without removing the camera.",
    image: "/images/products/gimbal-protectors.png",
    category: "Accessories",
    price: 29,
  },
]

export const categories = [
  "All Products",
  "Drones",
  "Power",
  "Accessories",
  "Camera",
] as const

export type Category = (typeof categories)[number]
