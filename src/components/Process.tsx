export function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "30-minute conversation to understand your specific challenges and identify quick wins"
    },
    {
      number: "2",
      title: "Scoped Engagement",
      description: "Clear proposal with defined deliverables, timeline, and pricing—no lengthy procurement processes"
    },
    {
      number: "3",
      title: "Rapid Implementation",
      description: "Build and deploy solutions in weeks, not months, with regular check-ins and visibility"
    },
    {
      number: "4",
      title: "Measurable Results",
      description: "Deliver outcomes you can quantify—time saved, insights surfaced, decisions accelerated"
    }
  ]

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">How We Work Together</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Fast, transparent engagements focused on delivering value without the typical consulting overhead
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
