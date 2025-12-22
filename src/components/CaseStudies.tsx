import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function CaseStudies() {
  const cases = [
    {
      title: "Large Consumer Brands Manufacturer",
      subtitle: "Promotional Analytics Automation",
      description: "Standardised and automated ingestion of retailer promotional grids for 8 customer teams in the UK and 6 Customer Teams in Australia to allow for real-time monitoring of promotional laydown based on feature space, catalogue activity, price and mechanic to help optimise against current and future trade spend, as well as avoid costly 'promotional clashes' between retailers.",
      metrics: [
        { label: "Time Saved", value: "120 hrs/month" },
        { label: "Trade Spend ROI", value: "+18%" },
        { label: "Decision Speed", value: "10x faster" }
      ]
    },
    {
      title: "Mid-Cap Pharmacy Retailer",
      subtitle: "AI Agents for Workflow Automation",
      description: "Deployed AI agents to automate repetitive workflows across sales operations, inventory forecasting, and retailer reporting. Agents handle data extraction, reconciliation, and insight generation autonomously.",
      metrics: [
        { label: "Workflows Automated", value: "12+" },
        { label: "Error Reduction", value: "94%" },
        { label: "Cost Savings", value: "$180K/year" }
      ]
    },
    {
      title: "Global CPG Manufacturer",
      subtitle: "Integrated Analytics Platform for RGM",
      description: "Built unified data platform connecting ERP, warehouse systems, and retailer portals to provide real-time tracking of RGM metrics, as well as visibility into inventory, demand patterns, and supplier performance.",
      metrics: [
        { label: "Data Sources", value: "18 datasets in 3 systems across 15 countries" },
        { label: "ASP Growth", value: "+35%" },
        { label: "Stock-outs", value: "-62%" }
      ]
    }
  ]

  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Proven Results for CPG/Retail Brands</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Real outcomes from companies that chose to automate instead of reconcile
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
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
                      <span className="text-[#08314d] font-bold text-lg">{metric.value}</span>
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
