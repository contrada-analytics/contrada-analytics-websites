import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Foundation Build | DataArk Labs",
  description: "Unified data models, governance frameworks, automated quality checks, data lineage, semantic layers, and access controls. Turn fragmented data into a governed, reliable asset.",
  keywords: ["data governance", "data quality", "unified data model", "data lineage", "semantic layer", "data catalog", "CPG data management"],
  openGraph: {
    title: "Data Foundation Build | DataArk Labs",
    description: "Making your data governed, trustworthy, and ready for anything. Unified models, governance, and quality frameworks.",
    type: "website",
  },
}

export default function DataFoundationBuildPage() {
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
            <span className="text-6xl font-bold text-white/20">03</span>
            <h1 className="text-4xl md:text-5xl font-bold">Data Foundation Build</h1>
          </div>
          <p className="text-xl italic text-[#87CEEB] mb-4">Making your data governed, trustworthy, and ready for anything</p>
          <p className="text-xl opacity-95 max-w-3xl">
            Unified data models, governance frameworks, automated quality checks, data lineage, semantic layers, and access controls. Turn fragmented data into a governed, reliable asset.
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
                <span><strong>What:</strong> Unified data model + governance framework + automated quality + lineage + semantic layer + access controls</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Data your organization can actually trust—governed, consistent, and ready for analytics or AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 10-20 weeks depending on data complexity and number of sources</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#0F1B2D]">Infrastructure Isn't Enough</h2>
              <p className="text-gray-600 mb-4">
                You can have the best cloud infrastructure in the world and still have a data mess. Pipelines running, data flowing, and nobody trusting any of it because there's no governance, no quality checks, and no common understanding of what anything means.
              </p>
              <p className="text-gray-600 mb-4">
                This is where we turn raw data into a governed asset. Unified data models that create a single source of truth. Governance frameworks that define who owns what. Quality checks that catch problems before they reach dashboards. Semantic layers that ensure everyone's speaking the same language.
              </p>
              <p className="text-gray-600">
                The result: data your organization can actually trust. Data that's ready for analytics, AI, and whatever comes next.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F1B2D]">Key Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Unified data model (conformed dimensions, fact tables)",
                  "Data governance framework (ownership, stewardship, policies)",
                  "Automated data quality checks and monitoring",
                  "Data lineage and impact analysis",
                  "Data catalog implementation",
                  "Semantic/metrics layer for consistent definitions",
                  "Access control policies and implementation",
                  "Retailer data harmonization playbook (for CPG)",
                  "APIs for downstream systems"
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

      {/* What We Build */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Unified Data Model",
                description: "A single source of truth that reconciles data from across your organization. Conformed dimensions, standardized hierarchies, and fact tables that support your analytics needs.",
                benefits: ["One version of truth", "Consistent hierarchies", "Analysis-ready structures"]
              },
              {
                title: "Governance Framework",
                description: "Clear ownership, documented policies, and operational processes that keep your data trustworthy over time. Not bureaucracy—practical governance that people actually follow.",
                benefits: ["Clear data ownership", "Documented policies", "Change management process"]
              },
              {
                title: "Data Quality",
                description: "Automated checks that catch problems at the source, not when they show up in executive dashboards. Monitoring, alerting, and remediation workflows.",
                benefits: ["Automated validation", "Proactive alerting", "Quality scorecards"]
              },
              {
                title: "Semantic Layer",
                description: "A common language for your metrics and dimensions. Everyone from finance to marketing to ops agrees on what 'revenue' means and how it's calculated.",
                benefits: ["Consistent definitions", "Self-service enabled", "Reduced confusion"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#0F1B2D]">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPG/Retail Specific */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">CPG & Retail Specific</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Retailer Data Harmonization</h3>
              <p className="text-gray-200 mb-6">
                CPG companies deal with data from dozens of retailers, each with their own formats, hierarchies, and definitions. We've built the playbooks and patterns to harmonize this data into a unified view.
              </p>
              <ul className="space-y-2">
                {[
                  "Standardized product hierarchies across retailers",
                  "Normalized promotional and trade spend data",
                  "Unified store and geography mappings",
                  "Harmonized time periods and fiscal calendars",
                  "Cross-retailer performance comparisons"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Week 1-3", title: "Discovery", description: "Source analysis, business requirements, model design" },
                { phase: "Week 4-10", title: "Build", description: "Data modeling, governance setup, quality framework" },
                { phase: "Week 11-16", title: "Integration", description: "Source integration, semantic layer, access controls" },
                { phase: "Week 17-20", title: "Operationalize", description: "Documentation, training, support transition" }
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
          <h2 className="text-3xl font-bold mb-4">Ready to Build a Data Foundation You Can Trust?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how to turn your fragmented data into a governed, reliable asset.
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
