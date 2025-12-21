import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Governance Framework for CPG & Retail",
  description: "Manage AI risk without slowing innovation. Develop clear policies and operating models for responsible AI adoption that meet GDPR, CCPA, and EU AI Act requirements for CPG companies.",
  keywords: ["AI governance", "AI compliance", "EU AI Act", "GDPR AI", "AI risk management", "responsible AI", "AI policy framework CPG"],
  openGraph: {
    title: "AI Governance Framework for CPG & Retail",
    description: "Enable innovation while managing AI risk. Build governance frameworks tailored to CPG concerns—trade secrets, retailer data, and regulatory compliance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Governance Framework for CPG & Retail",
    description: "Enable innovation while managing AI risk. Build governance frameworks tailored to CPG concerns—trade secrets, retailer data, and regulatory compliance.",
  },
}

export default function AIGovernancePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Governance Framework</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Manage AI risk without slowing innovation. Develop clear policies and operating models for
            responsible AI adoption tailored to CPG concerns.
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
                <span><strong>What:</strong> Risk framework and policies for responsible AI—tailored to CPG concerns (trade secrets, retailer data, EU AI Act)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Impact:</strong> Enable innovation on low-risk use cases while protecting what matters; clear decision rights and approval workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#673DE6] font-bold mr-3">→</span>
                <span><strong>Timeline:</strong> 6-12 weeks to build governance framework with stakeholder input</span>
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
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Enable Innovation, Manage Risk</h2>
              <p className="text-gray-600 mb-4">
                Your board is asking about AI risk. The EU AI Act is now in force. Teams are experimenting
                with ChatGPT for everything from customer insights to supplier negotiations, and you don't
                have a handle on what's being shared or how decisions are being made.
              </p>
              <p className="text-gray-600">
                You need governance—but not the kind that creates bureaucracy and kills innovation. I help
                you build frameworks that protect what matters (trade secrets, retailer data, consumer trust)
                while enabling teams to move fast on low-risk use cases.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">What You'll Get</h3>
              <ul className="space-y-3">
                {[
                  "Assessment of current AI usage across your organization",
                  "Risk framework tailored to CPG (trade secrets, retailer data, consumer AI)",
                  "Clear policies for acceptable use and vendor evaluation",
                  "Operating model—who owns decisions and how they're made",
                  "Implementation roadmap prioritized by risk and impact"
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

      {/* Framework Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Framework Components</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Usage Assessment",
                description: "You can't govern what you don't see. We map current AI usage across your organization—often revealing more activity than leadership realizes.",
                deliverables: [
                  "Inventory of AI tools and use cases across departments",
                  "Classification by risk level (high, medium, low)",
                  "Identification of shadow AI and ungoverned experiments",
                  "Assessment of vendor relationships and data sharing"
                ]
              },
              {
                title: "Risk Framework for CPG",
                description: "Generic AI risk frameworks don't address CPG-specific concerns. We tailor the framework to what actually matters in your industry.",
                deliverables: [
                  "Trade secret and pricing data protection requirements",
                  "Retailer data obligations and contractual constraints",
                  "Consumer-facing AI considerations (labeling, transparency)",
                  "Regulatory compliance (EU AI Act, sector-specific rules)"
                ]
              },
              {
                title: "Policies & Guidelines",
                description: "Clear, actionable policies that tell teams what they can and can't do—not vague principles that leave everyone guessing.",
                deliverables: [
                  "Acceptable use policy for generative AI tools",
                  "Data handling requirements by classification level",
                  "Vendor evaluation criteria and approval process",
                  "Model selection guidance (when to use external vs. internal)"
                ]
              },
              {
                title: "Operating Model",
                description: "Who makes decisions? Who reviews use cases? How do approvals work? A governance framework is useless without clarity on who does what.",
                deliverables: [
                  "Roles and responsibilities (who owns AI governance)",
                  "Decision rights by risk level (low-risk auto-approved, high-risk requires review)",
                  "Review and approval workflows",
                  "Escalation paths for edge cases"
                ]
              }
            ].map((component, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="border-l-4 border-[#673DE6] pl-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Deliverables:</p>
                  <ul className="space-y-1">
                    {component.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-[#673DE6] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Why AI Governance Matters for CPG</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Pressure",
                description: "The EU AI Act is now in force, with steep penalties for non-compliance. Boards and audit committees are asking questions you need to be able to answer."
              },
              {
                title: "Competitive Risk",
                description: "If pricing strategies, trade promotion tactics, or supplier negotiations leak through poorly governed AI use, the commercial damage could be massive."
              },
              {
                title: "Retailer Expectations",
                description: "Your retail partners expect you to handle their data responsibly. Governance failures can damage critical relationships and violate contractual obligations."
              },
              {
                title: "Consumer Trust",
                description: "Consumer-facing AI (chatbots, product recommendations, personalization) requires transparency and care. Missteps can damage brand reputation."
              },
              {
                title: "Enable, Don't Block",
                description: "Good governance isn't about saying no to everything. It's about creating clear rails so teams can move fast on low-risk use cases without constant approvals."
              },
              {
                title: "Vendor Proliferation",
                description: "Without governance, every department buys their own AI tools, creating integration nightmares, redundant spend, and security gaps."
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#673DE6]">
                <h3 className="text-xl font-semibold mb-3 text-[#08314d]">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">How We Work Together</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "Interviews with stakeholders to understand current AI use, appetite for risk, and organizational structure"
              },
              {
                step: "2",
                title: "Framework Design",
                description: "Draft governance framework tailored to your risk tolerance and CPG-specific concerns"
              },
              {
                step: "3",
                title: "Socialization",
                description: "Review with key stakeholders, incorporate feedback, ensure buy-in from those who need to live with it"
              },
              {
                step: "4",
                title: "Implementation",
                description: "Roadmap for rollout, training materials, communication plan, and ongoing ownership model"
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

          <div className="mt-12 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Typical Engagement</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">6-12 Weeks</div>
                <div className="text-gray-200">From discovery to implementation roadmap</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Stakeholder-Led</div>
                <div className="text-gray-200">Built with input from legal, IT, compliance, and business units</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Practical</div>
                <div className="text-gray-200">Framework teams will actually use, not shelf-ware policy docs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build AI Governance That Enables, Not Blocks?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss your current AI usage and how to manage risk without killing innovation.
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
