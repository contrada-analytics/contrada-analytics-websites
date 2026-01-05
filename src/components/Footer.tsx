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
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/dataarklabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="ml-2">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DataArk Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
