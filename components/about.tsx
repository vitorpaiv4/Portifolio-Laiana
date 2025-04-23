"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Sparkles, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const features = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Estilo Único",
      description: "Desenvolvimento de personagens e cenários com estética única e reconhecível.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Animação Fluida",
      description: "Movimentos naturais e expressivos que dão vida aos personagens.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Criatividade",
      description: "Soluções visuais inovadoras para contar histórias de forma memorável.",
    },
  ]

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Sobre a Artista
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Sou uma artista especializada em animação 2D, ilustração e design gráfico com mais de uma década de
            experiência criativa.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-background rounded-lg overflow-hidden">
                  <img src="/imagens/logo.png" alt="Laiana Carpenedo" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4">
              <p className="text-lg">
                Minha jornada artística é marcada pela exploração de cores vibrantes e pela criação de personagens
                únicos que contam histórias cativantes.
              </p>
              <p className="text-lg">
                Cada projeto é uma oportunidade de transformar conceitos em experiências visuais memoráveis, seja
                através de animações fluidas, ilustrações detalhadas ou designs gráficos impactantes.
              </p>
              <p className="text-lg">
                Meu processo criativo combina técnicas tradicionais com ferramentas digitais, resultando em um estilo
                visual distintivo que se adapta às necessidades de cada cliente.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
