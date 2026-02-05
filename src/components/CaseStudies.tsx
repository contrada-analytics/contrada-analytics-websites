import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function CaseStudies() {
  const cases = [
    {
      title: "Mid-Market CPG Brand",
      subtitle: "Data Foundation Assessment & Roadmap",
      description: "Conducted comprehensive 8-dimension maturity assessment for a $200M CPG brand struggling with fragmented data across 6 systems. Delivered prioritized 12-month roadmap that identified $2M in potential efficiency gains and a clear path from reactive reporting to proactive decision-making.",
      metrics: [
        { label: "Data Sources Mapped", value: "47 datasets" },
        { label: "Efficiency Opportunity", value: "$2M identified" },
        { label: "Time to Roadmap", value: "5 weeks" }
      ]
    },
    {
      title: "PE-Backed Consumer Brand",
      subtitle: "Infrastructure + Data Foundation Build",
      description: "Built cloud data platform and governance framework for portfolio company preparing for exit. Migrated from spreadsheet-driven operations to unified data model with automated quality checks, enabling real-time trade spend visibility and compliant data practices.",
      metrics: [
        { label: "Manual Processes Eliminated", value: "12 workflows" },
        { label: "Data Quality Score", value: "94% (from 62%)" },
        { label: "Decision Cycle", value: "Weekly vs. Monthly" }
      ]
    },
    {
      title: "Regional Retailer",
      subtitle: "Analytics + Agentic Commerce Readiness",
      description: "Deployed KPI framework and self-service analytics for category management team, then prepared product data infrastructure for AI-powered commerce. Machine-readable product attributes now power both internal analytics and external AI agent discovery.",
      metrics: [
        { label: "KPIs Consolidated", value: "200+ to 28 key metrics" },
        { label: "Self-Service Adoption", value: "85% of analysts" },
        { label: "AI-Ready Products", value: "15,000 SKUs" }
      ]
    }
  ]

  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Data Foundation Results</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Real outcomes from companies that invested in their data foundation
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white">
                <CardTitle>{caseStudy.title}</CardTitle>
                <CardDescription className="text-gray-200">
                  {caseStudy.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                <div className="space-y-3">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-600">{metric.label}</span>
                      <span className="text-[#0F1B2D] font-bold text-lg">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
