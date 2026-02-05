import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agentic Commerce Readiness | DataArk Labs",
  description: "Future-proof your data for the AI-powered commerce era. Product data audits, machine-readable content frameworks, API strategy, and competitive benchmarking.",
  keywords: ["agentic commerce", "AI commerce", "product data", "machine-readable data", "API strategy", "AI agents", "future-proof data"],
  openGraph: {
    title: "Agentic Commerce Readiness | DataArk Labs",
    description: "Future-proofing your data for the AI-powered commerce era. Prepare for when AI agents make purchasing decisions.",
    type: "website",
  },
}

export default function AgenticCommerceReadinessPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold text-white/20">05</span>
            <h1 className="text-4xl md:text-5xl font-bold">Agentic Commerce Readiness</h1>
          </div>
          <p className="text-xl italic text-[#87CEEB] mb-4">Future-proofing your data for the AI-powered commerce era</p>
          <p className="text-xl opacity-95 max-w-3xl">
            Prepare for the coming shift where AI agents make purchasing decisions. Product data audits, machine-readable content frameworks, API strategy, and competitive benchmarking.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 bg-gray-50 border-l-4 border-[#2E74B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-[#0F1B2D]">TL;DR</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>What:</strong> Agentic commerce assessment + product data audit + machine-readable content framework + API strategy + implementation roadmap</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Your products discoverable and recommendable by AI agents when they start making purchasing decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 6-10 weeks from assessment to implementation roadmap</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0F1B2D]">The Next Commerce Shift Is Coming</h2>
              <p className="text-gray-600 mb-4">
                AI agents are already making purchasing decisions. They're comparing products, evaluating alternatives, and recommending choices to consumers. The brands that show up in those AI-driven moments will win. The ones that don't will become invisible.
              </p>
              <p className="text-gray-600 mb-4">
                Most companies aren't ready. Their product data is structured for human consumption—website copy, marketing descriptions, catalog layouts. AI agents need something different: machine-readable attributes, structured specifications, semantic relationships.
              </p>
              <p className="text-gray-600">
                This service helps you prepare. We assess where you stand, identify the gaps, and build a roadmap to make your products discoverable and recommendable in the agentic commerce era.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F1B2D]">Key Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Agentic commerce readiness assessment",
                  "Product data structure audit",
                  "Machine-readable content framework",
                  "API strategy for external consumption",
                  "Competitive benchmarking",
                  "Implementation roadmap",
                  "Team education workshop"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">Why This Matters Now</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agents Are Here",
                description: "ChatGPT, Claude, Perplexity, and dozens of others are already being asked 'what should I buy?' The answers come from structured, machine-readable data—not marketing copy."
              },
              {
                title: "First Movers Win",
                description: "The brands that optimize for AI discovery now will be the ones that get recommended. Once habits form, catching up becomes exponentially harder."
              },
              {
                title: "Your Competitors Are Moving",
                description: "Leading retailers and brands are already restructuring their product data for AI consumption. The window to gain advantage is closing."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2E74B5]">
                <h3 className="text-xl font-semibold mb-3 text-[#0F1B2D]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Assess */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">What We Assess</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Product Data Structure",
                items: [
                  "Attribute completeness and accuracy",
                  "Schema.org and structured data compliance",
                  "Product taxonomy and categorization",
                  "Specification standardization"
                ]
              },
              {
                title: "Machine Readability",
                items: [
                  "Semantic markup and metadata",
                  "Natural language processing compatibility",
                  "Attribute extraction potential",
                  "Comparison data availability"
                ]
              },
              {
                title: "API & Integration",
                items: [
                  "Current API capabilities",
                  "Data feed structures",
                  "Partner integration potential",
                  "Real-time availability"
                ]
              },
              {
                title: "Competitive Position",
                items: [
                  "Category leader analysis",
                  "AI visibility benchmarking",
                  "Gap identification",
                  "Opportunity mapping"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#0F1B2D]">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">The Machine-Readable Content Framework</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-lg p-8">
              <p className="text-gray-200 mb-6">
                We deliver a comprehensive framework for structuring your product data for AI consumption:
              </p>
              <ul className="space-y-3">
                {[
                  "Attribute taxonomy with standardized definitions",
                  "Schema.org implementation guidelines",
                  "Natural language attribute descriptions",
                  "Comparison-ready specification formats",
                  "API schema for external consumption",
                  "Content governance for AI readiness",
                  "Update and maintenance protocols"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Engagement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Week 1-2", title: "Assessment", description: "Product data audit, competitive analysis, stakeholder interviews" },
                { phase: "Week 3-4", title: "Framework", description: "Content framework design, schema development, API strategy" },
                { phase: "Week 5-7", title: "Roadmap", description: "Implementation planning, prioritization, resource requirements" },
                { phase: "Week 8-10", title: "Enablement", description: "Team workshop, documentation, pilot recommendations" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-[#87CEEB] mb-2">{step.phase}</div>
                  <div className="text-xl font-bold mb-2">{step.title}</div>
                  <div className="text-gray-200 text-sm">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the AI Commerce Era?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how to future-proof your product data for when AI agents make purchasing decisions.
          </p>
          <Button asChild size="lg" className="bg-white text-[#0F1B2D] hover:bg-gray-100 rounded-full text-lg px-8 py-6">
            <Link href="/#contact">Book a 30-Minute Call</Link>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
