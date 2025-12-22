export function StatsBar() {
  const stats = [
    {
      number: "20 Years",
      label: "CPG/Retail Experience"
    },
    {
      number: "14 Countries",
      label: "Across 3 Continents"
    },
    {
      number: "18%+",
      label: "Avg Trade Spend ROI Lift"
    },
    {
      number: "240+ Hours",
      label: "Saved Per Month (Avg)"
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="border-l-2 border-white/30 first:border-l-0">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
