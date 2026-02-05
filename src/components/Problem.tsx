import { AlertCircle, BarChart3, Database, Layers } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: BarChart3,
      title: "Over-Invested in Dashboards",
      description: "You've built dozens of reports and visualizations, but they're sitting on top of fragmented, inconsistent data. The insights they show can't be trusted, so decisions still get made on gut feel."
    },
    {
      icon: Database,
      title: "Under-Invested in Infrastructure",
      description: "Your data lives in silos—ERP here, retailer portals there, spreadsheets everywhere. No unified view, no single source of truth, and a lot of manual work to connect the dots."
    },
    {
      icon: Layers,
      title: "Missing Governance",
      description: "Nobody knows who owns what data, how it's defined, or whether it can be trusted. Quality issues surface in executive presentations. The same metric means different things to different teams."
    },
    {
      icon: AlertCircle,
      title: "Architecture Built for Yesterday",
      description: "Your current setup can't support what's coming. AI agents, real-time analytics, machine-readable product data—you're not ready, and retrofitting is harder than building right the first time."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#08314d]">The Real Problem with Most Data Initiatives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Companies over-invest in the visible parts of analytics and under-invest in what makes analytics actually work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-[#08314d]">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <p className="text-lg text-gray-700">
            <strong className="text-[#08314d]">The bottom line:</strong> You can't build lasting analytics value on a shaky foundation. The companies winning with data aren't the ones with the most dashboards—they're the ones with infrastructure, governance, and architecture that make their data actually trustworthy and usable.
          </p>
        </div>
      </div>
    </section>
  )
}
