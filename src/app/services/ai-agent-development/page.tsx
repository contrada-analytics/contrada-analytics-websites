import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom AI Agent Development for CPG & Retail",
  description: "Automate trade promotion analysis, sales planning, and cross-functional reporting with custom AI agents. Turn weeks of analytical work into hours with intelligent automation for CPG brands.",
  keywords: ["AI agents", "trade promotion analysis", "sales planning automation", "CPG analytics automation", "retailer collaboration", "promotional ROI analysis"],
  openGraph: {
    title: "Custom AI Agent Development for CPG & Retail",
    description: "Automate trade promotion analysis, sales planning, and cross-functional reporting with custom AI agents built for CPG brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Agent Development for CPG & Retail",
    description: "Automate trade promotion analysis, sales planning, and cross-functional reporting with custom AI agents built for CPG brands.",
  },
}

export default function AIAgentDevelopmentPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom AI Agent Development</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Stop drowning in spreadsheets. Automate the analytical work that's eating your team's time—from
            trade promotion analysis to sales planning and cross-functional reporting.
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
                <span><strong>What:</strong> AI agents that automate repetitive analytical work—trade promo analysis, sales planning, reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Turn weeks of manual work into hours; free your team to focus on strategy, not spreadsheets</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> Start with one use case, prove value, then expand—see results in weeks, not quarters</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Turn Weeks Into Hours</h2>
              <p className="text-gray-600 mb-4">
                Your commercial teams spend more time wrangling data than making decisions. Trade promotion
                analysis that should take hours stretches into weeks. Sales planning requires coordinating
                feeds from finance, supply chain, and syndicated data sources.
              </p>
              <p className="text-gray-600">
                I build AI agents that automate this analytical work—pulling data from your systems,
                performing the analysis, and surfacing insights so your team can focus on strategy, not spreadsheets.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">What You Get</h3>
              <ul className="space-y-3">
                {[
                  "Trade promotion ROI analysis in hours, not weeks",
                  "Automated risk and opportunity identification",
                  "Cross-functional reporting without manual data pulls",
                  "Retailer collaboration workflows that actually stick",
                  "Deployed in your environment or integrated with existing tools"
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

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Trade Promotion Analysis",
                description: "Automated post-event ROI calculations that currently take your team 2-3 weeks. Pull data from retailer portals, POS systems, and your TPM tool, calculate true incrementality, and generate reports automatically.",
                examples: ["Post-promotion ROI analysis", "Baseline sales calculation", "Retailer-specific performance tracking", "Category and SKU-level insights"]
              },
              {
                title: "Sales Planning & Forecasting",
                description: "Agents that aggregate signals across finance, sales, supply chain, and syndicated data to surface risks and opportunities. Your team spends time on solutions, not building spreadsheets.",
                examples: ["Weekly/monthly sales variance analysis", "Risk identification from multiple data sources", "Opportunity sizing and prioritization", "Automated forecast updates"]
              },
              {
                title: "Cross-Functional Reporting",
                description: "Unified views that pull from disparate systems—no more manual data reconciliation. Finance, marketing, sales, and supply chain data in one place, updated automatically.",
                examples: ["Executive dashboards", "Category performance reports", "Customer/retailer scorecards", "Supply-demand mismatch alerts"]
              },
              {
                title: "Retailer Collaboration",
                description: "Automated workflows for joint business planning preparation, data request responses, and promotional calendar management. Spend less time on admin, more time on strategy.",
                examples: ["JBP deck preparation", "Retailer-specific data packages", "Promotional calendar coordination", "Custom analysis for key accounts"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="border-l-4 border-[#673DE6] pl-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-[#673DE6] mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Identify the Use Case",
                description: "We start with one specific problem—trade promo analysis, sales planning, or reporting. Quick discovery to understand your data sources and current process."
              },
              {
                step: "2",
                title: "Build & Deploy",
                description: "I build the agent to pull from your systems, perform the analysis, and output results in the format you need. Deployed in your environment or integrated with your existing tools."
              },
              {
                step: "3",
                title: "Iterate & Expand",
                description: "Start with one agent, prove the value, then expand to other use cases. Build a network of agents that talk to each other and compound in value."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#08314d]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Wrangling Spreadsheets?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's talk about which analytical work is eating your team's time and how to automate it.
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
