"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Loader2, Send, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['GENERAL', 'PARTNERSHIP', 'SUPPORT', 'MEDIA', 'RESEARCH', 'VOLUNTEER', 'FUNDING']),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: 'GENERAL',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
      reset()
      toast.success('Thank you! Your message has been sent successfully.')
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-ubuntu-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Your full name"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
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

          {/* Phone and Company Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                {...register('phone')}
                placeholder="+250 788 123 456"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Organization</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Your organization"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="space-y-2">
            <Label htmlFor="type">Inquiry Type *</Label>
            <Select 
              defaultValue="GENERAL"
              onValueChange={(value) => setValue('type', value as any)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GENERAL">General Inquiry</SelectItem>
                <SelectItem value="PARTNERSHIP">Partnership</SelectItem>
                <SelectItem value="SUPPORT">Technical Support</SelectItem>
                <SelectItem value="MEDIA">Media & Press</SelectItem>
                <SelectItem value="RESEARCH">Research Collaboration</SelectItem>
                <SelectItem value="VOLUNTEER">Volunteer Opportunity</SelectItem>
                <SelectItem value="FUNDING">Funding & Investment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              {...register('subject')}
              placeholder="Brief description of your inquiry"
              className={errors.subject ? 'border-red-500' : ''}
            />
            {errors.subject && (
              <p className="text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Please provide details about your inquiry..."
              rows={5}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and consent to being contacted by Ubuntu Intelligence.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
