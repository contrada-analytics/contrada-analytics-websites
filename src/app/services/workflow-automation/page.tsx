import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workflow Automation for CPG & Retail Operations",
  description: "Eliminate manual tasks and boost productivity with intelligent workflow automation. Streamline sales operations, inventory forecasting, and reporting workflows for CPG brands.",
  keywords: ["workflow automation", "business process automation", "CPG automation", "sales operations automation", "inventory automation", "reporting automation"],
  openGraph: {
    title: "Workflow Automation for CPG & Retail Operations",
    description: "Eliminate manual tasks and boost productivity with intelligent workflow automation tailored to CPG business needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation for CPG & Retail Operations",
    description: "Eliminate manual tasks and boost productivity with intelligent workflow automation tailored to CPG business needs.",
  },
}

export default function WorkflowAutomationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workflow Automation</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Eliminate manual tasks and boost productivity with intelligent automation solutions 
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Transform Your Operations</h2>
              <p className="text-gray-600 mb-4">
                Our workflow automation solutions help businesses reduce manual work, minimize errors, 
                and free up valuable time for strategic initiatives. We design and implement custom 
                automation workflows that integrate seamlessly with your existing systems.
              </p>
              <p className="text-gray-600">
                From simple task automation to complex multi-system integrations, we deliver solutions 
                that drive real business value and measurable ROI.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Save 20-40 hours per week on manual tasks",
                  "Reduce errors by up to 95%",
                  "Improve process consistency",
                  "Scale operations without adding headcount",
                  "Real-time visibility into workflows"
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
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "End-to-End Process Mapping & Automation Design",
                description: "We don't just automate what you have—we optimize it first. Our team conducts comprehensive process mapping sessions to understand your workflows, identify bottlenecks, and design automation solutions tailored to your specific business needs. Every solution is custom-built to fit your unique operations, not forced into a one-size-fits-all template."
              },
              {
                title: "Seamless System Integration",
                description: "Connect all your internal and external data sources, tools, and systems into a unified automation ecosystem. Whether it's your CRM, ERP, databases, APIs, or third-party services, we ensure seamless data flow across your entire technology stack. No more manual data entry or switching between multiple platforms."
              },
              {
                title: "Flexible Deployment Options",
                description: "Choose how and where your automation runs. Deploy custom-built solutions in your own environment for maximum control and security, or leverage our secure cloud infrastructure for hassle-free hosting and maintenance. We adapt to your security requirements and infrastructure preferences."
              },
              {
                title: "Platform Optimization & Migration",
                description: "Already using N8N, Zapier, or Make.com? We optimize and scale your existing workflows for better performance and reliability. Need to migrate? We help you eliminate vendor lock-in by moving to open-source or custom solutions that give you full control and reduce long-term costs."
              },
              {
                title: "AI-Powered Decision Automation",
                description: "Deploy AI agents to handle low-risk judgment calls and routine decisions automatically, while maintaining human oversight for high-stakes decisions. Our intelligent automation learns from your business rules and adapts over time, combining the efficiency of AI with the wisdom of human expertise."
              },
              {
                title: "Ongoing Support & Optimization",
                description: "Automation isn't set-it-and-forget-it. We provide continuous monitoring, maintenance, and optimization to ensure your workflows evolve with your business. As your needs change, we adapt your automation to maintain peak performance and ROI."
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#08314d]">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sales & Marketing",
                items: ["Lead routing and assignment", "Email campaign automation", "CRM data entry", "Follow-up sequences"]
              },
              {
                title: "Finance & Accounting",
                items: ["Invoice processing", "Expense approvals", "Payment reconciliation", "Financial reporting"]
              },
              {
                title: "HR & Operations",
                items: ["Employee onboarding", "Time tracking", "Leave management", "Document workflows"]
              },
              {
                title: "Customer Service",
                items: ["Ticket routing", "Response automation", "Feedback collection", "SLA monitoring"]
              }
            ].map((useCase, index) => (
              <div key={index} className="border-l-4 border-[#673DE6] pl-6">
                <h3 className="text-xl font-semibold mb-4 text-[#08314d]">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, idx) => (
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how workflow automation can transform your business operations.
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
