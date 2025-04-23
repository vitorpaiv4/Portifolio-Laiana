"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import AnimatedSectionTitle from "./animated-section-title"

export default function FeaturedAnimation() {
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
    <section id="featured" className="section-padding bg-muted/30">
      <div className="container px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <AnimatedSectionTitle
            title="Destaque"
            subtitle="Conheça Probo, uma animação premiada produzida para a Faculdade de Cinema de Animação da UFPEL."
          />

          <motion.div variants={itemVariants} className="mt-8">
            <Card className="overflow-hidden border-none shadow-lg dark:glow-md">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img src="/imagens/probo01.png" alt="Probo Animation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Probo</h3>
                    <p className="text-white/80 mb-4 max-w-2xl">
                      Uma animação que explora temas de identidade e descoberta através de um personagem misterioso em
                      uma jornada visual única. Produzida como projeto para a Faculdade de Cinema de Animação da UFPEL.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link
                          href="https://wp.ufpel.edu.br/curtas/filmes/probo/#non"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Animação
                        </Link>
                      </Button>
                      <Button variant="outline" className="text-white border-white/50 hover:bg-white/20">
                        <Play className="mr-2 h-4 w-4" />
                        Trailer
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Sobre o Projeto</h4>
                    <p className="text-muted-foreground">
                      Probo é uma animação desenvolvida como projeto acadêmico para a Faculdade de Cinema de Animação da
                      UFPEL (Universidade Federal de Pelotas). O curta explora a jornada de um personagem enigmático em
                      um mundo visualmente rico e simbolicamente complexo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground">Técnica</h5>
                      <p>Animação 2D Digital</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground">Duração</h5>
                      <p>5 minutos</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground">Ano</h5>
                      <p>2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
