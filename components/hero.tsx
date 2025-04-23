"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentBackground, setCurrentBackground] = useState(0)
  const backgrounds = ["/imagens/Concept1.png", "/imagens/Concept2.png", "/imagens/concept02.png"]

  useEffect(() => {
    setIsLoaded(true)

    // Set up background image rotation
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${backgrounds[currentBackground]}')`,
          filter: "brightness(0.8)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />

      {/* Animated elements - hide some on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {isLoaded && (
          <>
            <motion.div
              className="absolute top-[20%] left-[15%] w-12 h-12 md:w-24 md:h-24 rounded-full bg-pink-500/20 backdrop-blur-md animate-float-slow hidden sm:block"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-[30%] right-[20%] w-16 h-16 md:w-32 md:h-32 rounded-full bg-purple-500/20 backdrop-blur-md animate-float hidden sm:block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
              className="absolute bottom-[25%] left-[25%] w-10 h-10 md:w-20 md:h-20 rounded-full bg-pink-300/20 backdrop-blur-md animate-float-fast hidden sm:block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 font-heading">
            <span className="gradient-text">Animação & Ilustração</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-foreground/90">
            Transformando ideias em histórias visuais cativantes através da arte da animação
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full text-base md:text-lg px-6 md:px-8"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Portfólio
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </motion.div>
    </section>
  )
}
