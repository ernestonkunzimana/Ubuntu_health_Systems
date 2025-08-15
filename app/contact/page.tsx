import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Ubuntu Intelligence',
  description: 'Get in touch with Ubuntu Intelligence. We\'d love to hear from you about partnerships, collaborations, or questions about our technology.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build the Future 
                <span className="text-ubuntu-orange"> Together</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're interested in partnerships, have questions about our technology, 
                or want to join our mission, we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    We're here to answer your questions and explore how we can work together 
                    to create positive impact through technology.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-ubuntu-orange mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">nkernest666@gmail.com</p>
                          <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-ubuntu-blue mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">+250 788 906 846</p>
                          <p className="text-sm text-muted-foreground">Available Monday - Friday, 9AM - 6PM EAT</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-ubuntu-green mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Location</h3>
                          <p className="text-muted-foreground">Kigali, Rwanda</p>
                          <p className="text-sm text-muted-foreground">East Africa Innovation Hub</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-ubuntu-purple mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Office Hours</h3>
                          <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-sm text-muted-foreground">East Africa Time (UTC+2)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Contact Options */}
                <div>
                  <h3 className="font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Partnerships:</strong> partnerships@ubuntu-intelligence.com</p>
                    <p><strong>Press & Media:</strong> media@ubuntu-intelligence.com</p>
                    <p><strong>Support:</strong> support@ubuntu-intelligence.com</p>
                    <p><strong>General Inquiries:</strong> hello@ubuntu-intelligence.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Pilot Locations</h2>
              <p className="text-muted-foreground mb-12">
                Ubuntu Intelligence is actively deployed in communities across Africa, 
                with pilot programs in multiple countries.
              </p>
              
              <Card>
                <CardContent className="p-12">
                  <div className="aspect-video bg-gradient-to-br from-ubuntu-orange/10 to-ubuntu-purple/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-ubuntu-orange" />
                      <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground">
                        Map showing our active deployments across 15 African countries
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Coming Soon - Real-time community impact visualization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
