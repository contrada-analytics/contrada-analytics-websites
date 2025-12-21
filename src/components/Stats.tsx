export function Stats() {
  const stats = [
    { value: "40%", label: "Average Time Saved" },
    { value: "$500K+", label: "Annual Cost Reduction" },
    { value: "50+", label: "Successful Projects" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-[#08314d] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
