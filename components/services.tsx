"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brush, Film, Layers, Lightbulb, Palette, PenTool } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSectionTitle from "@/components/animated-section-title"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const services = [
    {
      icon: <Film className="h-10 w-10 text-primary" />,
      title: "Animação 2D",
      description:
        "Criação de animações fluidas e expressivas para personagens, elementos de interface e motion graphics.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Ilustração",
      description: "Desenvolvimento de ilustrações detalhadas para livros, produtos, publicidade e conteúdo digital.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Design Gráfico",
      description:
        "Criação de identidades visuais, materiais impressos e digitais com foco em estética e funcionalidade.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Concept Art",
      description:
        "Desenvolvimento visual de personagens, cenários e props para jogos, animações e produções audiovisuais.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Model Sheets",
      description:
        "Criação de guias detalhados para personagens, garantindo consistência visual em diferentes produções.",
    },
    {
      icon: <Brush className="h-10 w-10 text-primary" />,
      title: "Storyboard",
      description:
        "Planejamento visual de narrativas para animações, vídeos e publicidade, definindo enquadramentos e movimentos.",
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container px-4" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <AnimatedSectionTitle
            title="Serviços"
            subtitle="Ofereço uma ampla variedade de serviços criativos para transformar suas ideias em realidade visual."
          />

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 dark:glow-sm dark:hover:glow-md overflow-hidden gradient-border">
                  <CardHeader className="pb-2">
                    <motion.div
                      className="mb-2"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
