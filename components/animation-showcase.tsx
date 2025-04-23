"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function AnimationShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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

  return (
    <section id="animations" className="section-padding">
      <div className="container px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Animações
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Confira algumas das minhas animações e projetos em movimento.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0 relative">
                <img src="/imagens/animation.gif" alt="Seres Etéreos" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="rounded-full w-12 h-12 bg-primary/80 hover:bg-primary">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Seres Etéreos</h3>
                  <p className="text-muted-foreground">
                    Animação de seres luminosos em um ambiente noturno estrelado, explorando temas de conexão e
                    harmonia.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="/imagens/probo01.png" alt="Probo Character" className="h-full object-contain" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="rounded-full w-12 h-12 bg-primary/80 hover:bg-primary">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Probo Animation</h3>
                  <p className="text-muted-foreground">
                    Animação do personagem Probo explorando diferentes expressões e movimentos, demonstrando
                    personalidade e fluidez.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Button size="lg" className="rounded-full">
              Ver Mais Animações
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
