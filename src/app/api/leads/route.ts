import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().optional(),
  service: z.string().optional(),
  companySize: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = leadSchema.parse(body)
    
    // Get IP address
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    
    // Get user agent
    const userAgent = request.headers.get('user-agent') || ''
    
    // Check rate limiting (max 5 submissions per IP per hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
    const recentSubmissions = await prisma.lead.count({
      where: {
        ipAddress: ipAddress,
        submittedAt: {
          gte: oneHourAgo
        }
      }
    })
    
    if (recentSubmissions >= 5) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Create lead
    const lead = await prisma.lead.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone || null,
        serviceInterest: validatedData.service || null,
        companySize: validatedData.companySize || null,
        message: validatedData.message,
        ipAddress: ipAddress,
        userAgent: userAgent,
      }
    })
    
    // TODO: Send email notification here if needed
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! We'll be in touch within 24 hours.",
        leadId: lead.id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
