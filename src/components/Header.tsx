"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0F1B2D] to-[#2A3F5F] text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              DataArk Labs
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="hover:opacity-80 transition-opacity">
              Services
            </Link>
            <Link href="#about" className="hover:opacity-80 transition-opacity">
              About
            </Link>
            <Link href="#process" className="hover:opacity-80 transition-opacity">
              How We Work
            </Link>
            <Link href="#vision" className="hover:opacity-80 transition-opacity">
              The Vision
            </Link>
            <Link href="/blog" className="hover:opacity-80 transition-opacity">
              Blog
            </Link>
            <Link href="#contact" className="hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </div>

          <Button 
            asChild
            className="bg-white text-[#0F1B2D] hover:bg-gray-100 rounded-full font-semibold"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
