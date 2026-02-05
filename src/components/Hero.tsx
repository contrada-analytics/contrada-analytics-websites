import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          Your Data Foundation Is Your
          Competitive Advantage
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          Most companies over-invest in dashboards and under-invest in the infrastructure, governance, and architecture that makes data actually useful.
          We help CPG and retail brands build data foundations that drive decisions—not just reports.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#08314d] hover:bg-gray-100 rounded-full text-lg px-8 py-6"
          >
            <Link href="#contact">Book a 30-Minute Call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#08314d] hover:bg-gray-100 rounded-full text-lg px-8 py-6"
          >
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
