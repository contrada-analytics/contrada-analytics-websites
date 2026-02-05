import Link from "next/link"

export function Vision() {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">The Vision</h2>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <h3 className="text-2xl font-bold text-gray-900">
            Data Foundation as Competitive Advantage
          </h3>

          <p>
            The companies winning in CPG and retail aren't the ones with the most dashboards. They're the ones with
            data foundations that actually work—governed, trustworthy, and ready to power whatever comes next.
          </p>

          <p>
            That "next" is coming faster than most realize. AI agents are already making purchasing decisions,
            scanning product data, comparing alternatives, and recommending choices to consumers. The brands
            that show up in those AI-driven moments will be the ones whose data is machine-readable, structured,
            and discoverable.
          </p>

          <p>
            This isn't about building the biggest data lake or the fanciest analytics platform. It's about
            building the <span className="font-semibold">right foundation</span>—one that supports today's
            decisions and tomorrow's AI-powered commerce landscape.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h4 className="text-xl font-bold text-[#0F1B2D] mb-4">The Journey</h4>
            <div className="grid md:grid-cols-5 gap-4 text-center text-sm">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-bold text-[#2E74B5]">Diagnose</div>
                <div className="text-gray-500">Know where you stand</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-bold text-[#2E74B5]">Build</div>
                <div className="text-gray-500">Infrastructure + data</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-bold text-[#2E74B5]">Activate</div>
                <div className="text-gray-500">Analytics that drive action</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-bold text-[#2E74B5]">Future-Proof</div>
                <div className="text-gray-500">Agentic commerce ready</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-bold text-[#2E74B5]">Sustain</div>
                <div className="text-gray-500">Ongoing value creation</div>
              </div>
            </div>
          </div>

          <p>
            Every engagement follows this progression—from understanding where you are today, through building
            the technical and data foundations, to activating analytics and preparing for the AI-powered future.
            The goal isn't a one-time project. It's sustained competitive advantage.
          </p>

          <p className="font-semibold text-gray-900">
            If you're ready to stop treating data as a cost center and start treating it as the competitive
            weapon it should be—<Link href="#contact" className="text-[#2E74B5] hover:underline">let's talk</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
