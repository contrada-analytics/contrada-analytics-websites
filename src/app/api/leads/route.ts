import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'
import { sendLeadNotification } from '@/lib/email'

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().optional(),
  companyType: z.string().optional(),
  service: z.string().optional(),
  companySize: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Verify Turnstile token
    const turnstileToken = body.turnstileToken
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Security verification required' },
        { status: 400 }
      )
    }

    // Verify the token with Cloudflare
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    )

    const turnstileResult = await turnstileResponse.json()

    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      )
    }

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
        companyType: validatedData.companyType || null,
        serviceInterest: validatedData.service || null,
        companySize: validatedData.companySize || null,
        message: validatedData.message,
        ipAddress: ipAddress,
        userAgent: userAgent,
      }
    })

    // Send email notification
    try {
      await sendLeadNotification({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        companyType: validatedData.companyType,
        service: validatedData.service,
        companySize: validatedData.companySize,
        message: validatedData.message,
      })
    } catch (emailError) {
      // Log error but don't fail the request
      console.error('Failed to send email notification:', emailError)
      // Lead was still created successfully
    }
    
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
