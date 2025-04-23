"use client"

import { Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/imagens/sprite-parada.gif" alt="Sprite Animada" className="w-16 h-16 object-contain" />
            <div>
              <h3 className="text-xl font-bold gradient-text">Laiana Carpenedo</h3>
              <p className="text-muted-foreground">Animação & Ilustração</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/laiana-carpenedo-193a78309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:contato@laianacarpenedo.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} Laiana Carpenedo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
