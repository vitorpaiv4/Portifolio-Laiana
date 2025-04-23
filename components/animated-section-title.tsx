"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedSectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function AnimatedSectionTitle({ title, subtitle, className = "" }: AnimatedSectionTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Split title into characters for animation
  const titleChars = title.split("")

  return (
    <div ref={ref} className={className}>
      <h2 className="section-title overflow-hidden">
        <div className="flex justify-center">
          {titleChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.05 * index,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </h2>

      {subtitle && (
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
