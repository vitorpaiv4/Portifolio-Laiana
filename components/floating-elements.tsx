"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      rotation: number
      image: string
      delay: number
    }>
  >([])
  const [isMobile, setIsMobile] = useState(true) // Default to true to prevent flash on mobile

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only create elements if not mobile
    if (!isMobile) {
      // Create random floating elements
      const images = ["/imagens/bruxa.png", "/imagens/probo01.png", "/imagens/snow.png"]

      const newElements = []
      const count = Math.min(5, Math.floor(window.innerWidth / 300))

      for (let i = 0; i < count; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 80 + 10, // 10-90% of screen width
          y: Math.random() * 70 + 15, // 15-85% of screen height
          size: Math.random() * 30 + 40, // 40-70px
          rotation: Math.random() * 20 - 10, // -10 to 10 degrees
          image: images[Math.floor(Math.random() * images.length)],
          delay: i * 0.8,
        })
      }

      setElements(newElements)
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.2,
            scale: 1,
            rotate: element.rotation,
            y: [0, -20, 0],
          }}
          transition={{
            delay: element.delay,
            y: {
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
        >
          <img
            src={element.image || "/placeholder.svg"}
            alt="Floating element"
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  )
}
