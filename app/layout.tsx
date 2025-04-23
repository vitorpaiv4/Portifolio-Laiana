import type React from "react"
import type { Metadata } from "next/types"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedBackground from "@/components/animated-background"
import AnimatedCursor from "@/components/animated-cursor"
import AnimatedCharacter from "@/components/animated-character"
import FloatingElements from "@/components/floating-elements"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Laiana Carpenedo | Animator & Illustrator",
  description:
    "Professional portfolio of Laiana Carpenedo, specializing in 2D animation, illustration and graphic design.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey="laiana-theme">
          <AnimatedBackground />
          <AnimatedCursor />
          <AnimatedCharacter />
          <FloatingElements />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
