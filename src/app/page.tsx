import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { StatsBar } from "@/components/StatsBar"
import { CaseStudies } from "@/components/CaseStudies"
import { Problem } from "@/components/Problem"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Process } from "@/components/Process"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"
import { StructuredData } from "@/components/StructuredData"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <StatsBar />
      <CaseStudies />
      <Problem />
      <Services />
      <About />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  )
}
