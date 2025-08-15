/**
 * Security utilities for Ubuntu Intelligence Platform
 * Implements OWASP security best practices
 */

import { z } from 'zod'
import crypto from 'crypto'

// Input validation schemas
export const securitySchemas = {
  // Email validation with stricter rules
  email: z.string()
    .email('Invalid email format')
    .min(3, 'Email too short')
    .max(254, 'Email too long')
    .refine((email) => {
      // Additional security checks
      const parts = email.split('@')
      if (parts.length !== 2) return false
      const [local, domain] = parts
      return local.length <= 64 && domain.length <= 253
    }, 'Invalid email structure'),

  // Phone number validation
  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .min(10, 'Phone number too short')
    .max(15, 'Phone number too long'),

  // Name validation (prevents code injection)
  name: z.string()
    .min(2, 'Name too short')
    .max(100, 'Name too long')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Name contains invalid characters'),

  // Password validation (strong password requirements)
  password: z.string()
    .min(12, 'Password must be at least 12 characters')
    .max(128, 'Password too long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      'Password must contain uppercase, lowercase, number, and special character'),

  // URL validation
  url: z.string()
    .url('Invalid URL format')
    .refine((url) => {
      try {
        const parsed = new URL(url)
        return ['http:', 'https:'].includes(parsed.protocol)
      } catch {
        return false
      }
    }, 'Only HTTP and HTTPS URLs allowed'),

  // File upload validation
  file: z.object({
    name: z.string().max(255, 'Filename too long'),
    size: z.number().max(10 * 1024 * 1024, 'File too large (max 10MB)'),
    type: z.string().refine((type) => {
      const allowedTypes = [
        'image/jpeg', 'image/png', 'image/webp', 'image/gif',
        'application/pdf', 'text/plain', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
      return allowedTypes.includes(type)
    }, 'File type not allowed'),
  }),
}

// CSRF protection
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(sessionToken))
}

// Rate limiting utilities
export interface RateLimitConfig {
  windowMs: number
  maxRequests: number
  skipSuccessfulRequests?: boolean
}

export class RateLimiter {
  private requests: Map<string, number[]> = new Map()

  constructor(private config: RateLimitConfig) {}

  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const windowStart = now - this.config.windowMs
    
    // Get or create request log for this identifier
    const requests = this.requests.get(identifier) || []
    
    // Remove old requests outside the window
    const recentRequests = requests.filter(time => time > windowStart)
    
    // Check if limit exceeded
    if (recentRequests.length >= this.config.maxRequests) {
      return false
    }
    
    // Add current request
    recentRequests.push(now)
    this.requests.set(identifier, recentRequests)
    
    return true
  }

  reset(identifier: string): void {
    this.requests.delete(identifier)
  }
}

// Content Security Policy
export const cspHeader = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.clerk.accounts.dev *.clerk.dev",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com",
    "img-src 'self' data: blob: *.clerk.accounts.dev *.clerk.dev cdn.builder.io",
    "connect-src 'self' *.clerk.accounts.dev *.clerk.dev vitals.vercel-insights.com",
    "frame-src 'self' *.clerk.accounts.dev *.clerk.dev",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ')
}

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential script tags
    .replace(/javascript:/gi, '') // Remove javascript: urls
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
}

export function sanitizeHTML(html: string): string {
  // Basic HTML sanitization - in production, use a proper library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
}

// SQL injection prevention helpers
export function escapeSQL(value: string): string {
  return value.replace(/'/g, "''").replace(/;/g, '\\;')
}

// Environment variable validation
export function validateEnvironment() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
    'CLERK_SECRET_KEY',
    'DATABASE_URL',
    'NEXTAUTH_SECRET',
    'ENCRYPTION_KEY'
  ]

  const missing = requiredEnvVars.filter(varName => {
    const value = process.env[varName]
    return !value || value.includes('placeholder')
  })

  if (missing.length > 0) {
    console.warn(`Missing or placeholder environment variables: ${missing.join(', ')}`)
    return false
  }

  return true
}

// Secure headers for API responses
export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  ...cspHeader
}

// Data encryption utilities
export function encryptData(data: string, key: string): string {
  const cipher = crypto.createCipher('aes-256-cbc', key)
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export function decryptData(encryptedData: string, key: string): string {
  const decipher = crypto.createDecipher('aes-256-cbc', key)
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

// Audit logging
export interface AuditLog {
  userId?: string
  action: string
  resource: string
  timestamp: Date
  ipAddress?: string
  userAgent?: string
  success: boolean
  metadata?: Record<string, any>
}

export function createAuditLog(log: Omit<AuditLog, 'timestamp'>): AuditLog {
  return {
    ...log,
    timestamp: new Date()
  }
}

// Session security
export function generateSecureSessionId(): string {
  return crypto.randomBytes(32).toString('hex')
}

export function isSessionExpired(createdAt: Date, maxAge: number): boolean {
  return Date.now() - createdAt.getTime() > maxAge
}
