"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Loader2, Send, CheckCircle, Upload } from 'lucide-react'
import { toast } from 'sonner'

const applicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  location: z.string().min(2, 'Please specify your location'),
  education: z.string().min(2, 'Please specify your education background'),
  experience: z.string().min(10, 'Please describe your relevant experience'),
  motivation: z.string().min(50, 'Please explain your motivation (minimum 50 characters)'),
  availability: z.string().min(5, 'Please specify your availability'),
  languages: z.string().min(2, 'Please list languages you speak'),
  hasInternet: z.enum(['yes', 'no']),
  hasSmartphone: z.enum(['yes', 'no']),
  communityRole: z.string().optional(),
  references: z.string().optional(),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

export function HealthWorkerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  })

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/applications/health-worker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: 'HEALTH_WORKER',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setIsSubmitted(true)
      reset()
      toast.success('Application submitted successfully! We will review and contact you within 5 business days.')
    } catch (error) {
      console.error('Application submission error:', error)
      toast.error('Sorry, there was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-ubuntu-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for applying to become a community health worker. Our team will review your application and contact you within 5 business days.
          </p>
          <div className="space-y-3">
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Submit Another Application
            </Button>
            <div className="text-sm text-muted-foreground">
              Questions? Contact us at healthworkers@ubuntu-intelligence.com
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Health Worker Application</CardTitle>
        <p className="text-muted-foreground">
          Join our network of community health workers making a difference across Africa
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-orange">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register('firstName')}
                  placeholder="Your first name"
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register('lastName')}
                  placeholder="Your last name"
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="+250 788 123 456"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (City, Country) *</Label>
              <Input
                id="location"
                {...register('location')}
                placeholder="e.g., Kigali, Rwanda"
                className={errors.location ? 'border-red-500' : ''}
              />
              {errors.location && (
                <p className="text-sm text-red-500">{errors.location.message}</p>
              )}
            </div>
          </div>

          {/* Background & Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-orange">Background & Experience</h3>
            
            <div className="space-y-2">
              <Label htmlFor="education">Education Background *</Label>
              <Input
                id="education"
                {...register('education')}
                placeholder="e.g., Bachelor's in Nursing, Community Health Certificate"
                className={errors.education ? 'border-red-500' : ''}
              />
              {errors.education && (
                <p className="text-sm text-red-500">{errors.education.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Relevant Experience *</Label>
              <Textarea
                id="experience"
                {...register('experience')}
                placeholder="Describe your healthcare, community work, or related experience..."
                rows={4}
                className={errors.experience ? 'border-red-500' : ''}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">{errors.experience.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="communityRole">Current Role in Community</Label>
              <Input
                id="communityRole"
                {...register('communityRole')}
                placeholder="e.g., Volunteer health worker, Community leader"
              />
            </div>
          </div>

          {/* Motivation & Commitment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-orange">Motivation & Commitment</h3>
            
            <div className="space-y-2">
              <Label htmlFor="motivation">Why do you want to join Ubuntu Intelligence? *</Label>
              <Textarea
                id="motivation"
                {...register('motivation')}
                placeholder="Share your motivation for becoming a community health worker with us..."
                rows={4}
                className={errors.motivation ? 'border-red-500' : ''}
              />
              {errors.motivation && (
                <p className="text-sm text-red-500">{errors.motivation.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Availability *</Label>
              <Select onValueChange={(value) => setValue('availability', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                  <SelectItem value="part-time">Part-time (20-39 hours/week)</SelectItem>
                  <SelectItem value="volunteer">Volunteer (10-19 hours/week)</SelectItem>
                  <SelectItem value="flexible">Flexible schedule</SelectItem>
                </SelectContent>
              </Select>
              {errors.availability && (
                <p className="text-sm text-red-500">{errors.availability.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Languages Spoken *</Label>
              <Input
                id="languages"
                {...register('languages')}
                placeholder="e.g., English, Kinyarwanda, French"
                className={errors.languages ? 'border-red-500' : ''}
              />
              {errors.languages && (
                <p className="text-sm text-red-500">{errors.languages.message}</p>
              )}
            </div>
          </div>

          {/* Technology Access */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-orange">Technology Access</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Do you have reliable internet access? *</Label>
                <Select onValueChange={(value) => setValue('hasInternet', value as 'yes' | 'no')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, reliable internet</SelectItem>
                    <SelectItem value="no">Limited or no internet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Do you own a smartphone? *</Label>
                <Select onValueChange={(value) => setValue('hasSmartphone', value as 'yes' | 'no')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, I have a smartphone</SelectItem>
                    <SelectItem value="no">No smartphone available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ubuntu-orange">References (Optional)</h3>
            
            <div className="space-y-2">
              <Label htmlFor="references">Professional References</Label>
              <Textarea
                id="references"
                {...register('references')}
                placeholder="Please provide 2-3 professional references with names, titles, and contact information..."
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t">
            <Button 
              type="submit" 
              className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              By submitting this application, you agree to our terms of service and privacy policy. 
              We will review your application and contact you within 5 business days.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
