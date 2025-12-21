import { AlertCircle, Clock, DollarSign, TrendingDown } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Weeks Lost to Spreadsheet Wrangling",
      description: "Your commercial teams spend more time reconciling data than making decisions. Post-promotion analysis that should take hours stretches into weeks."
    },
    {
      icon: DollarSign,
      title: "Millions Left on the Table",
      description: "Without real-time visibility into promotional performance and trade spend ROI, you're making decisions on gut feel instead of evidence—and leaving money on the table."
    },
    {
      icon: TrendingDown,
      title: "Promotional Clashes Cost You Revenue",
      description: "Lack of coordination across customer teams leads to costly promotional overlaps, conflicting mechanics, and missed opportunities to optimize feature space."
    },
    {
      icon: AlertCircle,
      title: "Data Silos Block Strategic Decisions",
      description: "Critical insights are trapped across SAP, retailer portals, Nielsen, and countless spreadsheets. Your team can't see the full picture when it matters."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#08314d]">The Hidden Cost of Manual Commercial Analytics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While your competitors automate, your team is stuck in spreadsheets—and it's costing you more than time
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
            <strong className="text-[#08314d]">The bottom line:</strong> Every week spent on manual analysis is a week you're not optimizing trade spend, responding to market shifts, or getting ahead of promotional conflicts. Your competitors with automated systems are moving faster—and winning.
          </p>
        </div>
      </div>
    </section>
  )
}
