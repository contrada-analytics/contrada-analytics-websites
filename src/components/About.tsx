import { DollarSign, Zap, TrendingUp, Target, Layers, Settings, ArrowRight, Award } from "lucide-react"

export function About() {
  const principles = [
    {
      icon: Target,
      title: "Right-sized, not oversized",
      description: "We build what you need, not what looks impressive on a slide deck. Every component earns its place by solving a real problem."
    },
    {
      icon: Layers,
      title: "Foundation first, flashy later",
      description: "Dashboards on shaky data are worse than no dashboards at all. We get the foundation right before we build anything visible."
    },
    {
      icon: Settings,
      title: "Opinionated but flexible",
      description: "We have strong views on what works, but we adapt to your context. Best practices are a starting point, not a straitjacket."
    },
    {
      icon: ArrowRight,
      title: "Transfer, don't trap",
      description: "We build capabilities you can own and operate. No vendor lock-in, no mysterious black boxes, no dependency on us to keep things running."
    },
    {
      icon: Award,
      title: "Prove value early",
      description: "Long projects without visible progress kill momentum. We structure engagements to deliver tangible value at each stage."
    }
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Why Work With Us</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            My name is Jason Weir. I'm a Data & AI Transformation Leader, based in Australia, with more than two decades of experience working globally across
            the CPG and retail industry—not as an external advisor, but as a practitioner. I've led
            platform and data engineering teams, developed commercial systems, and held sales and marketing
            roles spanning multiple regions. This breadth of experience has given me a clear view of where
            decisions stall, which initiatives genuinely drive results, and why so many data and AI projects
            fall short of their promise.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4 font-semibold">
            That experience shapes everything we do now.
          </p>
        </div>

        {/* Principles Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#08314d]">Our Principles</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-[#08314d]">{principle.title}</h4>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#08314d]">We Know Where the Money Leaks</h3>
              <p className="text-gray-600 text-left mb-3">
                Trade spend optimisation, RGM, promotional analytics—these aren't abstract concepts to us.
                We've built the integrations that connect finance, sales, and supply chain data.
              </p>
              <p className="text-gray-600 text-left mb-3">
                We've seen what happens when those connections don't exist: weeks lost to manual reconciliation,
                decisions made on gut feel instead of evidence, and millions left on the table.
              </p>
              <p className="text-gray-600 text-left font-semibold">
                We build solutions that close those gaps.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#08314d]">Technical Depth, Commercial Instinct</h3>
              <p className="text-gray-600 text-left mb-3">
                Most technical consultants don't understand commercial reality. Most commercial advisors can't
                evaluate technical feasibility.
              </p>
              <p className="text-gray-600 text-left mb-3">
                We've worked both sides—architecting data platforms and sitting in retailer negotiations.
              </p>
              <p className="text-gray-600 text-left font-semibold">
                That means we design solutions that are technically sound, commercially viable, and actually
                get adopted by the teams who need them.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#08314d]">Results in Weeks, Not Quarters</h3>
              <p className="text-gray-600 text-left mb-3">
                We don't deliver strategy decks that sit on shelves. We focus on practical implementations with
                measurable outcomes.
              </p>
              <p className="text-gray-600 text-left mb-3">
                This means automating a process that's consuming your team's time, surfacing insights
                that were previously invisible, or building a proof of concept that demonstrates value before
                you commit to a larger investment.
              </p>
              <p className="text-gray-600 text-left font-semibold">
                You'll see progress quickly.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#08314d] to-[#1a4a6b] text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Who We Work With</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">Mid-Market CPG Brands</div>
              <div className="text-gray-200 text-sm">
                You're competing against companies with 10x your budget with armies of data engineers and analysts. We level the playing field—giving you the same trade spend optimization, promotional analytics, and market intelligence capabilities that the giants have.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">PE-Backed Consumer Brands</div>
              <div className="text-gray-200 text-sm">
                Portfolio companies capturing efficiency gains through data-driven trade spend optimization and operational improvements. Data foundations that support both current operations and exit readiness.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">Retailers</div>
              <div className="text-gray-200 text-sm">
                Transform fragmented POS, operations, and supplier data into category wins. Platforms that identify underperforming SKUs, optimize promotional calendars, and strengthen supplier negotiations with data-backed insights.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">Distributors</div>
              <div className="text-gray-200 text-sm">
                Transform data from both sides of the supply chain into actionable insights that optimize inventory, forecast demand, and prove value to partners.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
