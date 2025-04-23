import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import AnimationShowcase from "@/components/animation-showcase"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import FeaturedAnimation from "@/components/featured-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <FeaturedAnimation />
      <Services />
      <Portfolio />
      <AnimationShowcase />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
