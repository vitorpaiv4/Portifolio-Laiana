"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSectionTitle from "@/components/animated-section-title"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Personagem Probo",
      img: "/imagens/probo01.png",
      category: "animacao",
      categoryLabel: "Animação",
      description:
        "Model sheet detalhado do personagem Probo, mostrando diferentes poses, expressões e detalhes para animação.",
    },
    {
      id: 2,
      title: "Personagem Snow",
      img: "/imagens/snow.png",
      category: "concept",
      categoryLabel: "Concept Art",
      description:
        "Desenvolvimento do personagem Snow, explorando design, paleta de cores e elementos visuais característicos.",
    },
    {
      id: 3,
      title: "Fonte Mística",
      img: "/imagens/fonte.png",
      category: "ilustracao",
      categoryLabel: "Ilustração",
      description: "Ilustração conceitual de uma fonte mística com elementos simbólicos e atmosfera etérea.",
    },
    {
      id: 4,
      title: "Teste de Cor - Patins",
      img: "/imagens/teste-de-cor-patins.png",
      category: "ilustracao",
      categoryLabel: "Ilustração",
      description:
        "Estudo de cores para ilustração de personagem com patins, explorando diferentes paletas e efeitos visuais.",
    },
    {
      id: 5,
      title: "Personagem Zen",
      img: "/imagens/zen.png",
      category: "ilustracao",
      categoryLabel: "Ilustração",
      description: "Ilustração detalhada do personagem Zen, com foco em expressividade e estilo visual único.",
    },
    {
      id: 6,
      title: "Iguro Obanai",
      img: "/imagens/obana34.png",
      category: "fanart",
      categoryLabel: "Fan Art",
      description: "Fan art do personagem Iguro Obanai com variações de design e expressões.",
    },
    {
      id: 7,
      title: "Adesivos Probo",
      img: "/imagens/adesivo.png",
      category: "design",
      categoryLabel: "Design Gráfico",
      description: "Coleção de adesivos do personagem Probo com diferentes expressões e elementos decorativos.",
    },
    {
      id: 8,
      title: "Caderno Wish",
      img: "/imagens/caderno-wish.png",
      category: "design",
      categoryLabel: "Design Gráfico",
      description: "Design de capa para caderno com personagem colorida em fundo estrelado.",
    },
    {
      id: 9,
      title: "Probo na Montanha",
      img: "/imagens/Concept2.png",
      category: "concept",
      categoryLabel: "Concept Art",
      description: "Concept art do personagem Probo contemplando o horizonte em um cenário gradiente.",
    },
    {
      id: 10,
      title: "Bruxinha",
      img: "/imagens/bruxa.png",
      category: "ilustracao",
      categoryLabel: "Ilustração",
      description: "Ilustração de personagem bruxa com chapéu preto e cabelo roxo em estilo minimalista.",
    },
    {
      id: 11,
      title: "Ecobag Bruxa",
      img: "/imagens/ecobag.png",
      category: "design",
      categoryLabel: "Design de Produto",
      description: "Design para ecobag com ilustração da personagem bruxa, unindo arte e funcionalidade.",
    },
    {
      id: 12,
      title: "Broches Coloridos",
      img: "/imagens/broches.png",
      category: "design",
      categoryLabel: "Design de Produto",
      description: "Coleção de broches com a personagem bruxa em diferentes variações de cores.",
    },
    {
      id: 13,
      title: "Probo - Concept Art",
      img: "/imagens/Concept1.png",
      category: "concept",
      categoryLabel: "Concept Art",
      description: "Arte conceitual do personagem Probo em um cenário de montanha com céu gradiente.",
    },
    {
      id: 14,
      title: "Probo na Floresta",
      img: "/imagens/concept02.png",
      category: "concept",
      categoryLabel: "Concept Art",
      description: "Concept art do personagem Probo em uma floresta mística com cristais e pilares vermelhos.",
    },
    {
      id: 15,
      title: "Caderno Rosa",
      img: "/imagens/caderno-rosa.png",
      category: "design",
      categoryLabel: "Design Gráfico",
      description: "Design de caderno rosa com ilustração de personagem de patins e detalhe de coração.",
    },
    {
      id: 16,
      title: "Seres Etéreos",
      img: "/imagens/animation.gif",
      category: "animacao",
      categoryLabel: "Animação",
      description: "Animação de seres etéreos brilhantes contra um céu estrelado em tons de roxo e rosa.",
      isAnimation: true,
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

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

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container px-4" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <AnimatedSectionTitle
            title="Portfólio"
            subtitle="Conheça alguns dos meus trabalhos em animação, ilustração e design gráfico."
          />

          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <Tabs
              defaultValue="all"
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full max-w-3xl"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="animacao">Animação</TabsTrigger>
                <TabsTrigger value="ilustracao">Ilustração</TabsTrigger>
                <TabsTrigger value="concept">Concept</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="fanart">Fan Art</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 dark:hover:glow-md"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="aspect-square overflow-hidden">
                  {project.isAnimation ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.img || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        GIF
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <Badge variant="outline" className="w-fit mt-2 text-white border-white/50">
                      {project.categoryLabel}
                    </Badge>
                    <Button
                      variant="ghost"
                      className="mt-4 text-white hover:text-white hover:bg-white/20 w-fit"
                      onClick={() => {
                        setSelectedProject(project)
                        setIsDialogOpen(true)
                      }}
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-base opacity-90 mt-2">
                {selectedProject.categoryLabel}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={selectedProject.img || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Sobre este projeto</h4>
                  <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{selectedProject.categoryLabel}</Badge>
                  <Badge variant="outline">Portfolio</Badge>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
