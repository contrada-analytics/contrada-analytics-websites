import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI/Data Maturity Assessment & Strategic Roadmap for CPG",
  description: "Map where you are on the data and AI maturity curve, align AI capabilities to your 1-5 year strategic initiatives, and build a practical roadmap that turns commercial ambitions into executable AI projects.",
  keywords: ["AI maturity assessment", "data maturity model", "AI strategic roadmap", "AI strategy CPG", "data and AI capabilities", "business strategy AI alignment", "AI opportunity mapping"],
  openGraph: {
    title: "AI/Data Maturity Assessment & Strategic Roadmap for CPG",
    description: "Connect AI strategy to business strategy. Maturity assessment + strategic initiative discovery + AI-enabled roadmap for CPG brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI/Data Maturity Assessment & Strategic Roadmap for CPG",
    description: "Connect AI strategy to business strategy. Maturity assessment + strategic initiative discovery + AI-enabled roadmap for CPG brands.",
  },
}

export default function ReadinessAssessmentPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI/Data Maturity Assessment & Strategic Roadmap</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Map where you are on the data and AI maturity curve, understand your strategic initiatives for the next 1-5 years, and build a practical roadmap that shows exactly how AI can accelerate your commercial ambitions.
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
                <span><strong>What:</strong> Maturity assessment + strategic initiative discovery + AI-enabled roadmap that connects technology to business outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Know where you stand, what's possible, and which AI investments will actually move the needle on your 1-5 year goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 3-4 weeks from kickoff to final roadmap presentation with leadership team</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Connect AI Strategy to Business Strategy</h2>
              <p className="text-gray-600 mb-4">
                Most AI assessments evaluate your technology stack and stop there. But technology without a
                clear line to business outcomes is just expensive infrastructure.
              </p>
              <p className="text-gray-600 mb-4">
                This assessment is different. We start by understanding your strategic business initiatives for
                the next 1-5 years—revenue growth targets, margin expansion plans, operational efficiency goals,
                new market entry, etc.
              </p>
              <p className="text-gray-600">
                Then we assess where you are on the data and AI maturity curve, identify the gaps between current
                capabilities and what you need, and build a roadmap that shows exactly which AI investments will
                accelerate your business strategy.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">What You'll Get</h3>
              <ul className="space-y-3">
                {[
                  "Data and AI maturity scorecard across 5 dimensions: data, people, process, technology, governance",
                  "Strategic initiative mapping—what you're trying to achieve in the next 1-5 years",
                  "Gap analysis: capabilities you have vs. what you need",
                  "AI opportunity assessment—where can AI accelerate your strategic initiatives?",
                  "Prioritized roadmap linking AI investments to business outcomes",
                  "Build vs. buy recommendations with ROI rationale"
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

      {/* What We Assess */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">The Assessment Framework</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Strategic Business Initiatives (1-5 Years)",
                description: "We start here—not with technology. What are you trying to achieve? Revenue growth? Margin expansion? Market entry? New capabilities? This frames everything else.",
                questions: [
                  "What are your top 3-5 strategic priorities for the next 1-5 years?",
                  "Where do you need to move faster than you currently can?",
                  "What decisions are you making on incomplete information?",
                  "Where is manual work constraining growth or speed?"
                ]
              },
              {
                title: "Data & AI Maturity Assessment",
                description: "Where are you on the maturity curve? We evaluate across 4 dimensions: people (skills, org structure), process (workflows, decision-making), technology (infrastructure, tools), and governance (policies, risk management).",
                questions: [
                  "Do you have the data infrastructure to support AI use cases?",
                  "What's your current data quality and accessibility?",
                  "Do you have the talent and organizational structure?",
                  "Are there governance frameworks in place?"
                ]
              },
              {
                title: "AI Opportunity Mapping",
                description: "Which of your strategic initiatives can AI accelerate? We map AI capabilities (generative AI, predictive analytics, automation, etc.) to your business goals and identify where the ROI is highest.",
                questions: [
                  "Which initiatives would benefit from better predictions or faster insights?",
                  "Where can automation free up capacity for strategic work?",
                  "What decisions would improve with real-time data?",
                  "Are there quick wins that prove value before larger investments?"
                ]
              },
              {
                title: "Gap Analysis & Roadmap",
                description: "What capabilities do you need vs. what you have? We identify the gaps, prioritize based on business impact and feasibility, and build a sequenced roadmap with clear build/buy/partner recommendations.",
                questions: [
                  "What's missing between current state and what you need?",
                  "Which gaps are blockers vs. nice-to-haves?",
                  "Should you build, buy, or partner for each capability?",
                  "What's the right sequence—quick wins first or foundations first?"
                ]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="border-l-4 border-[#673DE6] pl-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Questions:</p>
                  <ul className="space-y-1">
                    {area.questions.map((question, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-[#673DE6] mr-2">•</span>
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">What You'll Receive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Written Assessment Report",
                description: "Comprehensive findings on your data readiness, current state of AI adoption, identified opportunities, and capability gaps. Clear, jargon-free language."
              },
              {
                title: "Prioritized Roadmap",
                description: "Practical implementation plan that sequences quick wins, medium-term capabilities, and foundational investments. Prioritized by value and effort."
              },
              {
                title: "Stakeholder Readout",
                description: "Presentation and discussion with your leadership team to walk through findings, answer questions, and align on next steps."
              }
            ].map((deliverable, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#673DE6]">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{deliverable.title}</h3>
                <p className="text-gray-600">{deliverable.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Typical Engagement</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">2-4 Weeks</div>
                <div className="text-gray-200">From kickoff to final readout</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">8-12 Hours</div>
                <div className="text-gray-200">Of stakeholder interview time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Actionable</div>
                <div className="text-gray-200">Roadmap you can implement immediately</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Clarity on Your AI Strategy?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss where you are and where you want to go with AI and data capabilities.
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
