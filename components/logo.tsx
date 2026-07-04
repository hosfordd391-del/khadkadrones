import Image from "next/image"

interface LogoFullProps {
  className?: string
  height?: number
}

const INTRINSIC_W = 882
const INTRINSIC_H = 232

export function LogoFull({ className, height = 36 }: LogoFullProps) {
  const width = Math.round((height * INTRINSIC_W) / INTRINSIC_H)

  return (
    <Image
      src="/logo1.png"
      alt="Khadka Drones"
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      className={className}
      style={{ height, width, objectFit: "contain" }}
      priority
    />
  )
}
