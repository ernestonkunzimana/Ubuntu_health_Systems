import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const healthWorkerApplicationSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  location: z.string().min(2).max(100),
  education: z.string().min(2).max(200),
  experience: z.string().min(10).max(2000),
  motivation: z.string().min(50).max(2000),
  availability: z.string().min(5).max(50),
  languages: z.string().min(2).max(100),
  hasInternet: z.enum(['yes', 'no']),
  hasSmartphone: z.enum(['yes', 'no']),
  communityRole: z.string().optional(),
  references: z.string().optional(),
  type: z.literal('HEALTH_WORKER'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = healthWorkerApplicationSchema.parse(body)
    
    // Check if user already has an application
    const existingApplication = await prisma.application.findFirst({
      where: {
        email: validatedData.email,
        type: 'HEALTH_WORKER',
        status: {
          in: ['PENDING', 'UNDER_REVIEW', 'APPROVED']
        }
      }
    })

    if (existingApplication) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'You already have an active application. Please wait for review or contact support.' 
        },
        { status: 400 }
      )
    }
    
    // Save application to database
    const application = await prisma.application.create({
      data: {
        type: 'HEALTH_WORKER',
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        location: validatedData.location,
        experience: validatedData.experience,
        motivation: validatedData.motivation,
        skills: [validatedData.education, validatedData.languages, validatedData.availability],
        portfolio: validatedData.references,
        expertise: `Internet: ${validatedData.hasInternet}, Smartphone: ${validatedData.hasSmartphone}`,
        organization: validatedData.communityRole,
        status: 'PENDING',
      },
    })

    // TODO: Send notification email to admin
    // TODO: Send confirmation email to applicant
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Health worker application submitted successfully',
        applicationId: application.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Health worker application error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid application data',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Health Worker Application API endpoint' },
    { status: 200 }
  )
}
