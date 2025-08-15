import { NextRequest, NextResponse } from 'next/server'
import { RateLimiter, securityHeaders, validateCSRFToken } from './security'

// Rate limiters for different endpoints
const apiRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // 100 requests per window
})

const authRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 login attempts per window
})

const contactRateLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 10, // 10 contact submissions per hour
})

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

// Security middleware for API routes
export function withSecurity(
  handler: (request: NextRequest) => Promise<NextResponse>,
  options: {
    rateLimitType?: 'api' | 'auth' | 'contact'
    requireCSRF?: boolean
    allowedMethods?: string[]
  } = {}
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const clientIP = getClientIP(request)
    const method = request.method
    
    // Method validation
    const allowedMethods = options.allowedMethods || ['GET', 'POST', 'PUT', 'DELETE']
    if (!allowedMethods.includes(method)) {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405, headers: securityHeaders }
      )
    }
    
    // Rate limiting
    let rateLimiter = apiRateLimiter
    if (options.rateLimitType === 'auth') {
      rateLimiter = authRateLimiter
    } else if (options.rateLimitType === 'contact') {
      rateLimiter = contactRateLimiter
    }
    
    if (!rateLimiter.isAllowed(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: securityHeaders }
      )
    }
    
    // CSRF protection for state-changing operations
    if (options.requireCSRF && ['POST', 'PUT', 'DELETE'].includes(method)) {
      const csrfToken = request.headers.get('x-csrf-token')
      const sessionToken = request.headers.get('x-session-token')
      
      if (!csrfToken || !sessionToken || !validateCSRFToken(csrfToken, sessionToken)) {
        return NextResponse.json(
          { error: 'Invalid CSRF token' },
          { status: 403, headers: securityHeaders }
        )
      }
    }
    
    try {
      // Call the actual handler
      const response = await handler(request)
      
      // Add security headers to response
      Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      
      return response
    } catch (error) {
      console.error('API Error:', error)
      
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500, headers: securityHeaders }
      )
    }
  }
}

// Input validation middleware
export function withValidation<T>(
  schema: any,
  handler: (request: NextRequest, data: T) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      const body = await request.json()
      const validatedData = schema.parse(body)
      
      return await handler(request, validatedData)
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        return NextResponse.json(
          { 
            error: 'Validation failed',
            details: (error as any).issues.map((issue: any) => ({
              field: issue.path.join('.'),
              message: issue.message
            }))
          },
          { status: 400, headers: securityHeaders }
        )
      }
      
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400, headers: securityHeaders }
      )
    }
  }
}

// Authentication middleware
export function withAuth(
  handler: (request: NextRequest, userId: string) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401, headers: securityHeaders }
      )
    }
    
    const token = authHeader.substring(7)
    
    try {
      // In a real app, validate the JWT token here
      // For now, we'll assume the token contains the user ID
      const userId = 'user_id_from_token'
      
      return await handler(request, userId)
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401, headers: securityHeaders }
      )
    }
  }
}

// Combine multiple middleware
export function withMiddleware(
  handler: (request: NextRequest) => Promise<NextResponse>,
  ...middlewares: Array<(handler: any) => any>
) {
  return middlewares.reduce((wrapped, middleware) => middleware(wrapped), handler)
}
