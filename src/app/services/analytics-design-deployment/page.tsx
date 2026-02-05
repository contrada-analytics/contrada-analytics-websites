import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics Design & Deployment | DataArk Labs",
  description: "KPI frameworks tied to strategy, dashboard implementation, self-service analytics enablement, and analyst training. Focused metrics that drive decisions, not dashboard sprawl.",
  keywords: ["analytics design", "KPI framework", "dashboard implementation", "self-service analytics", "business intelligence", "CPG analytics"],
  openGraph: {
    title: "Analytics Design & Deployment | DataArk Labs",
    description: "Less is more — tracking only what moves the business forward. KPI frameworks and analytics that drive decisions.",
    type: "website",
  },
}

export default function AnalyticsDesignDeploymentPage() {
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
            <span className="text-6xl font-bold text-white/20">04</span>
            <h1 className="text-4xl md:text-5xl font-bold">Analytics Design & Deployment</h1>
          </div>
          <p className="text-xl italic text-[#87CEEB] mb-4">Less is more — tracking only what moves the business forward</p>
          <p className="text-xl opacity-95 max-w-3xl">
            KPI frameworks tied to strategy, dashboard implementation, self-service analytics enablement, and analyst training. Focused metrics that drive decisions, not dashboard sprawl.
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
                <span><strong>What:</strong> KPI framework + dashboard implementation + self-service enablement + analyst training</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Analytics that drive decisions instead of gathering dust—focused, actionable, and adopted</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2E74B5] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 6-12 weeks depending on scope and number of dashboards</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#0F1B2D]">Stop Building Dashboards Nobody Uses</h2>
              <p className="text-gray-600 mb-4">
                Most organizations have too many dashboards. Hundreds of reports, dozens of KPIs, and nobody can tell you which ones actually matter. Teams spend hours building visualizations that get looked at once and forgotten.
              </p>
              <p className="text-gray-600 mb-4">
                We take a different approach. Start with strategy, not tools. Identify the decisions that matter most, the metrics that inform those decisions, and build analytics that drive action—not just awareness.
              </p>
              <p className="text-gray-600">
                The result: fewer dashboards that get more use. Metrics tied to outcomes. Self-service capabilities that actually get adopted. Analytics that earn their place in your organization.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F1B2D]">Key Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "KPI framework tied to business strategy",
                  "Dashboard implementation (tool-agnostic)",
                  "Self-service analytics enablement",
                  "Dashboard usage tracking and optimization",
                  "Analyst training and certification",
                  "Executive reporting cadence design"
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

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy First",
                description: "We start with your business objectives and work backward to metrics. What decisions need to be made? What information drives those decisions? What actions should result?",
                principle: "No metrics without a decision"
              },
              {
                title: "Less is More",
                description: "We actively fight dashboard sprawl. Every visualization needs to earn its place. If it doesn't drive a decision or action, it doesn't get built.",
                principle: "Fewer dashboards, more impact"
              },
              {
                title: "Adoption by Design",
                description: "Analytics that don't get used are worthless. We design for adoption from the start—intuitive interfaces, clear training, and ongoing optimization based on usage data.",
                principle: "Built to be used"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#0F1B2D]">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-[#2E74B5]/10 text-[#2E74B5] px-4 py-2 rounded font-medium text-sm">
                  {item.principle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Agnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">Tool Agnostic</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-8">
              We work with whatever BI tools you have or choose. The principles of good analytics design are universal—the tool is just the delivery mechanism.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Tableau", "Power BI", "Looker", "Sigma", "Mode", "ThoughtSpot", "Metabase"].map((tool, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1B2D]">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "KPI Framework",
                items: [
                  "Strategy-aligned metric hierarchy",
                  "Clear ownership and accountability",
                  "Target-setting methodology",
                  "Metric definitions and calculations"
                ]
              },
              {
                title: "Dashboards & Reports",
                items: [
                  "Executive summaries",
                  "Operational dashboards",
                  "Deep-dive analytical views",
                  "Automated alerting"
                ]
              },
              {
                title: "Self-Service Capabilities",
                items: [
                  "Curated data sets for exploration",
                  "Guided analysis paths",
                  "Template dashboards",
                  "Ad-hoc query capabilities"
                ]
              },
              {
                title: "Training & Adoption",
                items: [
                  "Role-based training programs",
                  "Best practice documentation",
                  "Office hours and support",
                  "Usage monitoring and optimization"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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

      {/* Typical Engagement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Week 1-2", title: "Discovery", description: "Strategy alignment, stakeholder interviews, current state audit" },
                { phase: "Week 3-5", title: "Design", description: "KPI framework, dashboard wireframes, data requirements" },
                { phase: "Week 6-9", title: "Build", description: "Dashboard development, self-service setup, testing" },
                { phase: "Week 10-12", title: "Launch", description: "Training, rollout, adoption monitoring, optimization" }
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
          <h2 className="text-3xl font-bold mb-4">Ready for Analytics That Drive Decisions?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how to build analytics that earn their place in your organization.
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
