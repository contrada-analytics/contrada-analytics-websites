import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "System Integration for CPG & Retail",
  description: "Connect your ERP, CRM, and retailer portals for seamless data flow. Robust integration solutions connecting SAP, Salesforce, Nielsen, and retailer systems for CPG brands.",
  keywords: ["system integration", "ERP integration", "retailer portal integration", "CPG systems", "data integration", "SAP integration", "Salesforce integration"],
  openGraph: {
    title: "System Integration for CPG & Retail",
    description: "Connect your tools and systems for seamless data flow across your organization with robust integration solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Integration for CPG & Retail",
    description: "Connect your tools and systems for seamless data flow across your organization with robust integration solutions.",
  },
}

export default function SystemIntegrationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">System Integration</h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Connect your tools and systems for seamless data flow across your organization 
            with robust integration solutions.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#08314d]">Seamless System Connectivity</h2>
              <p className="text-gray-600 mb-4">
                We specialize in connecting disparate systems and applications to create a unified, 
                efficient technology ecosystem. Our integration solutions eliminate data silos and 
                enable real-time information flow across your organization.
              </p>
              <p className="text-gray-600">
                From CRM and ERP integrations to custom API development, we ensure your systems 
                work together harmoniously to support your business processes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#08314d]">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Eliminate manual data entry",
                  "Ensure data consistency across systems",
                  "Enable real-time data synchronization",
                  "Reduce integration maintenance costs",
                  "Improve system reliability"
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
                title: "CRM & ERP Integration",
                description: "Connect your customer relationship management and enterprise resource planning systems."
              },
              {
                title: "Cloud Platform Connectivity",
                description: "Integrate cloud services like AWS, Azure, Google Cloud with your existing infrastructure."
              },
              {
                title: "Database Synchronization",
                description: "Keep multiple databases in sync with real-time or scheduled data replication."
              },
              {
                title: "Real-time Data Pipelines",
                description: "Build robust data pipelines for continuous data flow between systems."
              },
              {
                title: "Legacy System Modernization",
                description: "Connect legacy systems with modern applications through custom integration layers."
              },
              {
                title: "API Development",
                description: "Design and build custom APIs to enable system-to-system communication."
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
                items: ["CRM to marketing automation", "Lead scoring integration", "Sales pipeline sync", "Customer data unification"]
              },
              {
                title: "E-Commerce",
                items: ["Inventory management sync", "Order processing automation", "Payment gateway integration", "Shipping provider connectivity"]
              },
              {
                title: "Finance & Accounting",
                items: ["ERP to accounting software", "Payment processing integration", "Bank feed automation", "Multi-system reconciliation"]
              },
              {
                title: "Operations",
                items: ["Supply chain integration", "Warehouse management sync", "Project management connectivity", "Time tracking integration"]
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
          <h2 className="text-3xl font-bold mb-4">Ready to Connect Your Systems?</h2>
          <p className="text-xl mb-8 opacity-95">
            Let's discuss how system integration can streamline your operations.
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
