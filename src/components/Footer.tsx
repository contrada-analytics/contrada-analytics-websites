import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DataArk Labs</h3>
            <p className="text-gray-400">
              Turning commercial data into competitive advantage for CPG brands, retailers, and distributors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-agent-development" className="text-gray-400 hover:text-white transition-colors">
                  AI Agent Development
                </Link>
              </li>
              <li>
                <Link href="/services/readiness-assessment" className="text-gray-400 hover:text-white transition-colors">
                  AI/Data Readiness
                </Link>
              </li>
              <li>
                <Link href="/services/ai-governance" className="text-gray-400 hover:text-white transition-colors">
                  AI Governance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-400 hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Ready to turn your commercial data into decisions that stick?
            </p>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors underline">
              Book a 30-minute call
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DataArk Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
