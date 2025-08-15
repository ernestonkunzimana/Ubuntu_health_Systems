import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['GENERAL', 'PARTNERSHIP', 'SUPPORT', 'MEDIA', 'RESEARCH', 'VOLUNTEER', 'FUNDING']),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        type: validatedData.type,
        subject: validatedData.subject,
        message: validatedData.message,
        status: 'UNREAD',
      },
    })

    // TODO: Send notification email to admin
    // TODO: Send confirmation email to user
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact message received successfully',
        id: contactMessage.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
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
    { message: 'Contact API endpoint' },
    { status: 200 }
  )
}
