import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ongoing Advisory & Support | DataArk Labs",
  description: "Fractional CDO services, monthly architecture reviews, on-demand advisory, quarterly maturity re-assessments, data team coaching, and vendor management support.",
  keywords: ["fractional CDO", "data advisory", "data leadership", "data team coaching", "data governance support", "CPG data consulting"],
  openGraph: {
    title: "Ongoing Advisory & Support | DataArk Labs",
    description: "Fractional data leadership and continuous improvement. Sustained support to maintain momentum and keep improving.",
    type: "website",
  },
}

export default function OngoingAdvisorySupportPage() {
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
            <span className="text-6xl font-bold text-white/20">06</span>
            <h1 className="text-4xl md:text-5xl font-bold">Ongoing Advisory & Support</h1>
          </div>
          <p className="text-xl italic text-[#a5b4fc] mb-4">Fractional data leadership and continuous improvement</p>
          <p className="text-xl opacity-95 max-w-3xl">
            Fractional CDO services, monthly architecture reviews, on-demand advisory, quarterly maturity re-assessments, data team coaching, and vendor management support.
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
                <span><strong>What:</strong> Monthly retainer for fractional data leadership, advisory, coaching, and continuous improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Sustained data leadership without the cost of a full-time executive—momentum maintained, value compounding</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> Monthly retainer, typically 6+ month commitments</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Momentum Requires Sustained Attention</h2>
              <p className="text-gray-600 mb-4">
                Building a data foundation is just the beginning. The real value comes from sustained attention—continuously improving, adapting to new needs, and ensuring the investments you've made keep delivering returns.
              </p>
              <p className="text-gray-600 mb-4">
                But not every company needs (or can afford) a full-time Chief Data Officer. What they need is access to senior data leadership on an ongoing basis—someone who knows their systems, understands their strategy, and can provide guidance when it matters.
              </p>
              <p className="text-gray-600">
                That's what this service provides. Fractional data leadership tailored to your needs, with the continuity and context that makes advice actually useful.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">Key Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Monthly architecture/governance review",
                  "On-demand advisory (async and sync)",
                  "Quarterly maturity re-assessment",
                  "Data team coaching and mentoring",
                  "Incident support and escalation",
                  "Vendor management support",
                  "Quarterly data health report"
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

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Reviews",
                description: "Scheduled sessions to review architecture decisions, governance issues, and roadmap progress. Proactive identification of issues before they become problems.",
                cadence: "Monthly"
              },
              {
                title: "On-Demand Advisory",
                description: "Async access via Slack/email plus scheduled calls when you need them. Architecture questions, vendor evaluations, hiring decisions—whatever comes up.",
                cadence: "As needed"
              },
              {
                title: "Maturity Tracking",
                description: "Quarterly reassessment against the original baseline. Are you making progress? Where are you stalling? What needs attention?",
                cadence: "Quarterly"
              },
              {
                title: "Team Coaching",
                description: "Direct coaching and mentoring for your data team members. Skill development, career guidance, and technical mentorship.",
                cadence: "Ongoing"
              },
              {
                title: "Incident Support",
                description: "When things go wrong, you have someone to call. Rapid response for data incidents, outages, or urgent decisions.",
                cadence: "As needed"
              },
              {
                title: "Vendor Support",
                description: "Help evaluating vendors, negotiating contracts, and managing relationships. Independent perspective without sales pressure.",
                cadence: "As needed"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[#08314d]">{item.title}</h3>
                  <span className="bg-[#673DE6]/10 text-[#673DE6] px-3 py-1 rounded-full text-sm">
                    {item.cadence}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Engagement Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advisory",
                description: "Light-touch engagement for organizations that need periodic guidance but have internal capacity to execute.",
                includes: [
                  "Monthly review session",
                  "Async advisory access",
                  "Quarterly health report"
                ],
                ideal: "Teams with strong internal data capability"
              },
              {
                title: "Fractional CDO",
                description: "Deeper engagement providing strategic data leadership. Regular involvement in planning, decisions, and team development.",
                includes: [
                  "Weekly touchpoints",
                  "Leadership team participation",
                  "Direct team coaching",
                  "Vendor negotiations"
                ],
                ideal: "Companies without senior data leadership"
              },
              {
                title: "Extended Support",
                description: "For clients who've completed implementation work and want continued hands-on support for optimization and expansion.",
                includes: [
                  "Implementation support",
                  "Architecture evolution",
                  "New capability development",
                  "Training and enablement"
                ],
                ideal: "Post-implementation continuous improvement"
              }
            ].map((model, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#673DE6]">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <ul className="space-y-2 mb-4">
                  {model.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-3 rounded text-sm">
                  <span className="font-semibold text-[#08314d]">Ideal for:</span>
                  <span className="text-gray-600 ml-2">{model.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ongoing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Why Ongoing Engagement Matters</h3>
              <div className="space-y-4">
                <p className="text-gray-200">
                  One-time projects create value, but that value erodes without sustained attention. Governance processes drift. Technical debt accumulates. New needs emerge that the original design didn't anticipate.
                </p>
                <p className="text-gray-200">
                  Ongoing engagement ensures:
                </p>
                <ul className="space-y-2">
                  {[
                    "Continuity of knowledge—no need to re-explain context every engagement",
                    "Proactive improvement—issues caught before they become crises",
                    "Strategic alignment—data capabilities evolving with business needs",
                    "Team development—your people growing more capable over time"
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Ongoing Data Leadership?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss what level of engagement makes sense for where you are and where you're headed.
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
