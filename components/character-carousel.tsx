"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CharacterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const characters = [
    {
      name: "Probo",
      image: "/imagens/probo01.png",
      description: "Um personagem misterioso com máscara bicolor e capa azul, explorando temas de dualidade.",
      colors: ["#1E40AF", "#F97316", "#FFFFFF", "#000000"],
    },
    {
      name: "Bruxinha",
      image: "/imagens/bruxa.png",
      description: "Uma pequena bruxa colorida com chapéu preto e cabelo roxo, representando magia e criatividade.",
      colors: ["#000000", "#A855F7", "#F97316", "#EF4444"],
    },
    {
      name: "Snow",
      image: "/imagens/snow.png",
      description: "Personagem alegre e energético com casaco azul e gorro vermelho, simbolizando aventura e diversão.",
      colors: ["#1E40AF", "#EF4444", "#000000", "#F97316"],
    },
  ]

  const nextCharacter = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length)
  }

  const prevCharacter = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length)
  }

  return (
    <div className="relative overflow-hidden py-12 bg-muted/30 rounded-lg">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <Button variant="outline" size="icon" onClick={prevCharacter} className="rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <Button variant="outline" size="icon" onClick={nextCharacter} className="rounded-full">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="container px-4 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-background rounded-lg overflow-hidden p-2">
                  <img
                    src={characters[currentIndex].image || "/placeholder.svg"}
                    alt={characters[currentIndex].name}
                    className="w-full h-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold gradient-text">{characters[currentIndex].name}</h3>
              <p className="text-lg">{characters[currentIndex].description}</p>

              <div className="space-y-2">
                <p className="font-medium">Paleta de Cores:</p>
                <div className="flex space-x-2">
                  {characters[currentIndex].colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Badge variant="outline" className="mr-2">
                  Personagem Original
                </Badge>
                <Badge variant="secondary">Design de Personagem</Badge>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8">
          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to character ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
