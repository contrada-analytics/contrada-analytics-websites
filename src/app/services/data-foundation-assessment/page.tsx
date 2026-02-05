import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Foundation Assessment | DataArk Labs",
  description: "A comprehensive diagnostic of your data ecosystem with a prioritized 12-month roadmap. Assess maturity across 8 dimensions and identify gaps between where you are and where you need to be.",
  keywords: ["data foundation assessment", "data maturity assessment", "data audit", "data roadmap", "CPG data strategy", "retail data assessment"],
  openGraph: {
    title: "Data Foundation Assessment | DataArk Labs",
    description: "Where you are today — and what to do about it. Comprehensive data ecosystem diagnostic with prioritized roadmap.",
    type: "website",
  },
}

export default function DataFoundationAssessmentPage() {
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
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold text-white/20">01</span>
            <h1 className="text-4xl md:text-5xl font-bold">Data Foundation Assessment</h1>
          </div>
          <p className="text-xl italic text-[#a5b4fc] mb-4">Where you are today — and what to do about it</p>
          <p className="text-xl opacity-95 max-w-3xl">
            A comprehensive diagnostic of your data ecosystem that delivers a prioritized 12-month roadmap. We assess maturity across 8 dimensions, audit your infrastructure, and identify the gaps between where you are and where you need to be.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 bg-gray-50 border-l-4 border-[#673DE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-[#08314d]">TL;DR</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>What:</strong> 8-dimension maturity assessment + infrastructure audit + governance review + prioritized 12-month roadmap</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Clear understanding of current state, identified gaps, and a sequenced plan to close them</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 4-6 weeks from kickoff to final roadmap presentation</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Know Where You Stand Before You Invest</h2>
              <p className="text-gray-600 mb-4">
                Most companies have a vague sense that their data situation isn't great. They know there are problems—silos, quality issues, governance gaps—but they don't have a clear picture of what's actually wrong or what to fix first.
              </p>
              <p className="text-gray-600 mb-4">
                This assessment gives you that clarity. We evaluate your data ecosystem across 8 dimensions, from technical infrastructure to organizational readiness, and deliver a prioritized roadmap that shows exactly what to do and in what order.
              </p>
              <p className="text-gray-600">
                No generic recommendations. No boilerplate findings. A practical plan based on where you actually are and where you need to go.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">Key Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Data Maturity Scorecard (8 dimensions)",
                  "Infrastructure & tooling audit with gap analysis",
                  "Data source inventory and integration map",
                  "Governance and security posture review",
                  "Analytics usage audit",
                  "Prioritized 12-month roadmap",
                  "Executive summary presentation"
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

      {/* What We Assess */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">The 8-Dimension Assessment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Architecture", description: "How your data is structured, stored, and flows between systems" },
              { title: "Infrastructure & Tooling", description: "Cloud platforms, data warehouses, pipelines, and technical stack" },
              { title: "Data Quality", description: "Accuracy, completeness, consistency, and timeliness of your data" },
              { title: "Data Governance", description: "Policies, ownership, stewardship, and data management practices" },
              { title: "Security & Compliance", description: "Access controls, encryption, privacy, and regulatory compliance" },
              { title: "Analytics Maturity", description: "BI capabilities, self-service, and decision-making processes" },
              { title: "Organizational Readiness", description: "Skills, culture, roles, and data literacy across teams" },
              { title: "Integration & Interoperability", description: "How well systems connect and share data" }
            ].map((dimension, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-[#08314d]">{dimension.title}</h3>
                <p className="text-gray-600 text-sm">{dimension.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">What You'll Walk Away With</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clear Current State",
                description: "No more guessing about where you stand. You'll have a scored assessment across all 8 dimensions with specific findings and evidence."
              },
              {
                title: "Prioritized Roadmap",
                description: "A sequenced 12-month plan that shows what to tackle first, what can wait, and how each initiative builds on the others."
              },
              {
                title: "Business Case Foundation",
                description: "The data and analysis you need to build internal support for data foundation investments—whether that's with us or another partner."
              }
            ].map((outcome, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#673DE6]">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Engagement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Week 1-2", title: "Discovery", description: "Stakeholder interviews, documentation review, system access" },
                { phase: "Week 2-3", title: "Assessment", description: "Technical audits, data profiling, governance review" },
                { phase: "Week 3-4", title: "Analysis", description: "Gap identification, prioritization, roadmap development" },
                { phase: "Week 4-6", title: "Delivery", description: "Executive presentation, detailed report, Q&A sessions" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-[#a5b4fc] mb-2">{step.phase}</div>
                  <div className="text-xl font-bold mb-2">{step.title}</div>
                  <div className="text-gray-200 text-sm">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Know Where You Stand?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss your data challenges and whether an assessment makes sense for where you are today.
          </p>
          <Button asChild size="lg" className="bg-white text-[#08314d] hover:bg-gray-100 rounded-full text-lg px-8 py-6">
            <Link href="/#contact">Book a 30-Minute Call</Link>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
