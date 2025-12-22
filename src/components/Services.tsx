import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Compass, ShieldCheck, Network } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: Network,
      icon2: Bot,
      title: "Custom Data Pipeline/ AI Agent Development",
      link: "/services/ai-agent-development",
      description: "Automate the low-value, administrative work that's eating your team's time—allowing them to focus on more growth-driven activities.",
      features: [
        "Real-time data collection and reporting that surfaces opportunities and risks automatically",
        "Dynamic response by exception vs. monthly/quarterly business reviews",
        "End-to-end promotional planning and execution with human-in-the-loop monitoring",
        "Automated customer POS data ingestion, transformation, and analytics reporting",
        "RGM agents that enforce guidelines and identify revenue-positive initiatives",
        "Manufacturer-retailer collaboration for JBP preparation and data requests",
        "Deploy in your environment or DataArk's secure platform"
      ]
    },
    {
      icon: Compass,
      title: "AI/Data Maturity Assessment & Strategic Roadmap",
      link: "/services/readiness-assessment",
      description: "Map where you are on the data and AI maturity curve, align AI capabilities to your 1-5 year strategic initiatives, and build a practical roadmap that turns commercial ambitions into executable AI projects.",
      features: [
        "Data and AI maturity assessment across people, process, technology, and governance",
        "Discovery of strategic business initiatives planned over the next 1-5 years",
        "Gap analysis: capabilities you have vs. what you need to execute your strategy",
        "AI opportunity mapping—where can AI accelerate revenue growth, margin expansion, or efficiency?",
        "Prioritized roadmap linking AI investments directly to business outcomes",
        "Build vs. buy recommendations with clear ROI rationale"
      ]
    },
    {
      icon: ShieldCheck,
      title: "AI Governance Framework",
      link: "/services/ai-governance",
      description: "As global AI regulations take shape, organizations need governance that protects without constraining. Develop clear policies and operating models for responsible AI adoption that balance innovation velocity with regulatory compliance and industry standards",
      features: [
        "Assessment of current AI usage across your organization",
        "Risk framework tailored to CPG concerns (trade secrets, retailer data, consumer-facing AI)",
        "Policy development for acceptable use, model selection, and vendor evaluation aligned with emerging AI regulations",
        "Data privacy and security controls that meet GDPR, CCPA, and industry-specific requirements",
        "Operating model design—who owns AI decisions and how they get made",
        "Implementation roadmap prioritized by risk, compliance obligations, and business impact"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">How I Can Help</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Focused services for CPG brands, retailers, and distributors who want to turn commercial data into competitive advantage—built with security, compliance, and responsible AI practices at the foundation
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex gap-3 mb-4">
                    <service.icon className="w-12 h-12 text-[#673DE6]" />
                    {service.icon2 && <service.icon2 className="w-12 h-12 text-[#673DE6]" />}
                  </div>
                  <CardTitle className="text-[#08314d]">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#08314d] font-bold mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
