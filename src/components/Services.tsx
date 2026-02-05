import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Server, Database, BarChart3, Bot, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      number: "01",
      icon: Compass,
      title: "Data Foundation Assessment",
      tagline: "Where you are today — and what to do about it",
      link: "/services/data-foundation-assessment",
      duration: "4-6 weeks",
      description: "A comprehensive diagnostic of your data ecosystem that delivers a prioritized 12-month roadmap. We assess maturity across 8 dimensions, audit your infrastructure, and identify the gaps between where you are and where you need to be.",
    },
    {
      number: "02",
      icon: Server,
      title: "Infrastructure & Tooling Build",
      tagline: "The technical foundation everything else depends on",
      link: "/services/infrastructure-tooling-build",
      duration: "8-16 weeks",
      description: "Cloud architecture, data platform implementation, ingestion pipelines, transformation layers, CI/CD, and security frameworks. The technical backbone that makes everything else possible.",
    },
    {
      number: "03",
      icon: Database,
      title: "Data Foundation Build",
      tagline: "Making your data governed, trustworthy, and ready for anything",
      link: "/services/data-foundation-build",
      duration: "10-20 weeks",
      description: "Unified data models, governance frameworks, automated quality checks, data lineage, semantic layers, and access controls. Turn fragmented data into a governed, reliable asset.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Analytics Design & Deployment",
      tagline: "Less is more — tracking only what moves the business forward",
      link: "/services/analytics-design-deployment",
      duration: "6-12 weeks",
      description: "KPI frameworks tied to strategy, dashboard implementation, self-service analytics enablement, and analyst training. Focused metrics that drive decisions, not dashboard sprawl.",
    },
    {
      number: "05",
      icon: Bot,
      title: "Agentic Commerce Readiness",
      tagline: "Future-proofing your data for the AI-powered commerce era",
      link: "/services/agentic-commerce-readiness",
      duration: "6-10 weeks",
      description: "Prepare for the coming shift where AI agents make purchasing decisions. Product data audits, machine-readable content frameworks, API strategy, and competitive benchmarking.",
    },
    {
      number: "06",
      icon: Users,
      title: "Ongoing Advisory & Support",
      tagline: "Fractional data leadership and continuous improvement",
      link: "/services/ongoing-advisory-support",
      duration: "Monthly retainer",
      description: "Fractional CDO services, monthly architecture reviews, on-demand advisory, quarterly maturity re-assessments, data team coaching, and vendor management support.",
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">How We Can Help</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Modular services that build on each other. Start with an assessment, implement what matters most, and sustain the value over time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-gray-200">{service.number}</span>
                    <service.icon className="w-10 h-10 text-[#673DE6]" />
                  </div>
                  <CardTitle className="text-[#08314d]">{service.title}</CardTitle>
                  <CardDescription className="italic text-[#673DE6]">{service.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{service.duration}</span>
                    <Button variant="outline" size="sm">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
