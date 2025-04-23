"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedCharacter() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(true) // Default to true to prevent flash on mobile

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only proceed with animation setup if not mobile
    if (!isMobile) {
      // Show character after a delay
      const timer = setTimeout(() => {
        setIsVisible(true)

        // Set initial position at bottom right
        setPosition({
          x: window.innerWidth - 150,
          y: window.innerHeight - 150,
        })
      }, 3000)

      // Move character to a new position every 10 seconds
      const moveInterval = setInterval(() => {
        if (isVisible) {
          // Calculate new position within viewport bounds
          const newX = Math.random() * (window.innerWidth - 150)
          const newY = Math.max(
            window.innerHeight - 150,
            Math.random() * window.innerHeight * 0.3 + window.innerHeight * 0.7,
          )

          setPosition({ x: newX, y: newY })
        }
      }, 10000)

      return () => {
        clearTimeout(timer)
        clearInterval(moveInterval)
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile, isVisible])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-40 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: position.x,
            y: position.y,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <motion.img
            src="/imagens/sprite-parada.gif"
            alt="Animated Character"
            className="w-24 h-24 object-contain"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
