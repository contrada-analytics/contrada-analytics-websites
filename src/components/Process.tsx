import { Search, Hammer, Zap, Shield, RefreshCw } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Diagnose",
      icon: Search,
      services: "Service 01",
      description: "Understand where you are today with a comprehensive data foundation assessment and prioritized roadmap"
    },
    {
      number: "2",
      title: "Build",
      icon: Hammer,
      services: "Services 02 + 03",
      description: "Construct the infrastructure and data foundation—the technical backbone and governed data assets everything else depends on"
    },
    {
      number: "3",
      title: "Activate",
      icon: Zap,
      services: "Service 04",
      description: "Deploy analytics that drive decisions—focused KPIs, dashboards, and self-service capabilities tied to business outcomes"
    },
    {
      number: "4",
      title: "Future-Proof",
      icon: Shield,
      services: "Service 05",
      description: "Prepare for the AI-powered commerce era with agentic commerce readiness—machine-readable data and API strategies"
    },
    {
      number: "5",
      title: "Sustain",
      icon: RefreshCw,
      services: "Service 06",
      description: "Maintain momentum with ongoing advisory, fractional CDO support, and continuous improvement"
    }
  ]

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">The Engagement Path</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A proven progression from assessment through implementation to sustained value. Start anywhere, but the sequence matters.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F]" />
              )}
              <div className="w-16 h-16 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-[#2E74B5] font-medium mb-2">{step.services}</p>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto">
          <p className="text-center text-gray-700">
            <span className="font-semibold text-[#0F1B2D]">Not sure where to start?</span> Most clients begin with a
            <span className="text-[#2E74B5] font-medium"> Data Foundation Assessment</span> to get clarity on their current state and a prioritized roadmap before committing to implementation work.
          </p>
        </div>
      </div>
    </section>
  )
}
