"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      console.log('Submitting form data:', data)
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      let result
      try {
        result = await response.json()
        console.log('Response data:', result)
      } catch (parseError) {
        console.error('Failed to parse response:', parseError)
        throw new Error('Invalid response from server')
      }

      if (response.ok) {
        setMessage({ type: 'success', text: result.message || "Thank you! We'll be in touch within 24 hours." })
        // Reset form
        formRef.current?.reset()
      } else {
        // Show the actual error message from the server
        const errorMessage = result.error || 'Something went wrong. Please try again.'
        setMessage({ type: 'error', text: errorMessage })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-[#08314d] to-[#1a4a6b]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Let's Talk About Your Commercial Data Challenges</CardTitle>
            <CardDescription className="text-lg">
              Book a 30-minute call to discuss how AI can help your CPG team work smarter
            </CardDescription>
          </CardHeader>
          <CardContent>
            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message.text}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" required />
              </div>

              <div>
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" name="company" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" />
              </div>

              <div>
                <Label htmlFor="companyType">Company Type *</Label>
                <select
                  id="companyType"
                  name="companyType"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select company type</option>
                  <option value="cpg-manufacturer">CPG Manufacturer / Brand</option>
                  <option value="retailer">Retailer</option>
                  <option value="distributor">Distributor / Wholesaler</option>
                  <option value="private-equity">Private Equity Firm</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="service">Primary Interest *</Label>
                <select
                  id="service"
                  name="service"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="ai-agent-development">Custom AI Agent Development (Trade Promo, Sales Planning, etc.)</option>
                  <option value="readiness-assessment">AI/Data Readiness Assessment</option>
                  <option value="ai-governance">AI Governance Framework</option>
                  <option value="general-inquiry">General Inquiry / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <Label htmlFor="companySize">Company Size</Label>
                <select
                  id="companySize"
                  name="companySize"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Tell me about your challenges *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="E.g., 'Trade promotion analysis takes our team 3 weeks' or 'We have data in 10+ systems but no unified view'"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#08314d] to-[#1a4a6b] hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Book a 30-Minute Call'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
