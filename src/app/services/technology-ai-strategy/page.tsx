import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology & AI Strategy for CPG Companies",
  description: "Navigate complex technology decisions from AI adoption to infrastructure modernization. Expert strategic guidance on technology and AI strategy for CPG brands and retailers.",
  keywords: ["AI strategy", "technology strategy CPG", "digital transformation", "AI adoption", "infrastructure modernization", "technology consulting CPG"],
  openGraph: {
    title: "Technology & AI Strategy for CPG Companies",
    description: "Navigate complex technology decisions from AI adoption to infrastructure modernization with expert strategic guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & AI Strategy for CPG Companies",
    description: "Navigate complex technology decisions from AI adoption to infrastructure modernization with expert strategic guidance.",
  },
}

export default function TechnologyAIStrategyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology & AI Strategy</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Navigate complex technology decisions from AI adoption to infrastructure modernization 
            with expert strategic guidance.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Strategic Technology Leadership</h2>
              <p className="text-gray-600 mb-4">
                We provide strategic guidance to help you navigate the rapidly evolving technology landscape, 
                from AI adoption to full-stack architecture decisions. Our fractional CTO services bring 
                enterprise-level expertise to startups and growing businesses.
              </p>
              <p className="text-gray-600">
                Whether you're building from scratch, modernizing legacy systems, or integrating AI into 
                your operations, we provide the strategic direction and hands-on expertise to ensure success.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Access to CTO-level expertise without full-time costs",
                  "Strategic AI roadmap and implementation",
                  "Avoid costly technology mistakes",
                  "Accelerate time-to-market",
                  "Build scalable, future-proof systems"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Readiness Assessment",
                description: "Evaluate your organization's readiness for AI adoption and create a strategic implementation roadmap."
              },
              {
                title: "Full-Stack Greenfield Consulting",
                description: "Architecture and technology stack decisions for startups and new ventures building from scratch."
              },
              {
                title: "LLM Integration & AI Agents",
                description: "Deploy large language models and AI agents to automate business processes and decision-making."
              },
              {
                title: "Tech Stack Migration",
                description: "Plan and execute migrations from legacy systems to modern, scalable architectures."
              },
              {
                title: "Fractional CTO Services",
                description: "Part-time CTO expertise with AI/ML specialization for strategic technology leadership."
              },
              {
                title: "Infrastructure Modernization",
                description: "Modernize your infrastructure with cloud-native, scalable, and cost-effective solutions."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Technology Focus Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Strategic Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI & Machine Learning Strategy",
                items: [
                  "AI readiness assessment and gap analysis",
                  "LLM selection and integration strategy",
                  "AI agent deployment for business processes",
                  "ML model design and implementation planning",
                  "Ethical AI and governance frameworks"
                ]
              },
              {
                title: "Technology Architecture",
                items: [
                  "Full-stack architecture design",
                  "Cloud infrastructure strategy (AWS, Azure, GCP)",
                  "Microservices vs monolith decisions",
                  "Database selection and design",
                  "API strategy and design"
                ]
              },
              {
                title: "Digital Transformation",
                items: [
                  "Legacy system modernization roadmap",
                  "Tech stack migration planning",
                  "Process automation strategy",
                  "Data strategy and governance",
                  "Change management and adoption"
                ]
              },
              {
                title: "Startup & Scale-up Support",
                items: [
                  "MVP architecture and tech stack selection",
                  "Build vs buy decisions",
                  "Team structure and hiring strategy",
                  "Technical due diligence for investors",
                  "Scaling strategy and infrastructure planning"
                ]
              }
            ].map((area, index) => (
              <div key={index} className="border-l-4 border-[#673DE6] pl-6">
                <h3 className="text-xl font-semibold mb-4 text-[#08314d]">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#673DE6] mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fractional CTO Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#08314d]">Fractional CTO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get enterprise-level technology leadership without the full-time cost
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Planning",
                description: "Technology roadmap, architecture decisions, and long-term planning aligned with business goals."
              },
              {
                title: "Team Leadership",
                description: "Guide and mentor your technical team, establish best practices, and build a strong engineering culture."
              },
              {
                title: "Vendor Management",
                description: "Evaluate and manage technology vendors, negotiate contracts, and ensure quality delivery."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Technology Strategy?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how strategic technology guidance can accelerate your business growth.
          </p>
          <Button asChild size="lg" className="bg-white text-[#08314d] hover:bg-gray-100 rounded-full text-lg px-8 py-6">
            <Link href="/#contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
