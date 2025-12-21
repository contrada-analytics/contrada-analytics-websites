import { DollarSign, Zap, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Why Work With Me</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I've spent 17 years inside a global CPG organisation—not advising from the outside, but doing the work.
            I've led platform and data engineering teams, built commercial systems, and sat in sales and marketing
            roles across multiple regions. I've seen where decisions stall, which initiatives actually move the needle,
            and why so many data and AI projects fail to deliver.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4 font-semibold">
            That experience shapes everything I do now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#08314d]">I Know Where the Money Leaks</h3>
              <p className="text-gray-600 text-left mb-3">
                Trade spend optimisation, RGM, promotional analytics—these aren't abstract concepts to me.
                I've built the integrations that connect finance, sales, and supply chain data.
              </p>
              <p className="text-gray-600 text-left mb-3">
                I've seen what happens when those connections don't exist: weeks lost to manual reconciliation,
                decisions made on gut feel instead of evidence, and millions left on the table.
              </p>
              <p className="text-gray-600 text-left font-semibold">
                I build solutions that close those gaps.
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
                I've worked both sides—architecting data platforms and sitting in retailer negotiations.
              </p>
              <p className="text-gray-600 text-left font-semibold">
                That means I design solutions that are technically sound, commercially viable, and actually
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
                I don't deliver strategy decks that sit on shelves. I focus on practical implementations with
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
          <h3 className="text-2xl font-bold mb-8 text-center">Who I Work With</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">Mid-Market CPG Brands</div>
              <div className="text-gray-200 text-sm">
                You're competing against companies with 10x your budget with armies of data engineers and analysts. I level the playing field—giving you the same trade spend optimization, promotional analytics, and market intelligence capabilities that the giants have, so you can protect and grow your marketshare.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">PE-Backed Consumer Brands</div>
              <div className="text-gray-200 text-sm">
                Portfolio companies capturing 200-500 basis points of EBITDA improvement through data-driven trade spend optimization and operational efficiency.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold mb-3">Retailers</div>
              <div className="text-gray-200 text-sm">
                Transform fragmented POS, operations, and supplier data into category wins. I build platforms that identify underperforming SKUs, optimize promotional calendars for maximum lift, and strengthen supplier negotiations with data-backed insights
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
