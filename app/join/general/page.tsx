import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, CheckCircle, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join Our Community | Ubuntu Intelligence',
  description: 'Join the Ubuntu Intelligence community and be part of building ethical technology for Africa and the world.',
}

export default function GeneralJoinPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-ubuntu-blue/10 text-ubuntu-blue">
                <Users className="h-4 w-4 mr-2" />
                Join Our Community
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Be Part of Something 
                <span className="text-ubuntu-orange"> Bigger</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join 125,000+ community members working together to build ethical technology 
                that serves humanity. Whether you're interested in volunteering, staying updated, 
                or exploring partnership opportunities, there's a place for you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Community Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
                    <p className="text-muted-foreground mb-6">
                      Tell us about your interests and how you'd like to contribute to our mission. 
                      We'll get back to you with relevant opportunities and updates.
                    </p>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Community Benefits */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="h-6 w-6 text-ubuntu-green" />
                      <h3 className="text-xl font-bold">Community Benefits</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Regular updates on our impact and progress',
                        'Early access to new platform features',
                        'Invitations to community events and webinars',
                        'Networking with like-minded changemakers',
                        'Opportunities to contribute to projects',
                        'Recognition for community contributions'
                      ].map((benefit, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="h-4 w-4 text-ubuntu-green mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Heart className="h-6 w-6 text-ubuntu-red" />
                      <h3 className="text-xl font-bold">Ways to Contribute</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="p-3 bg-muted rounded-lg">
                        <strong>Volunteer:</strong> Contribute skills in design, development, writing, or community outreach
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <strong>Advocate:</strong> Share our mission and help spread awareness in your networks
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <strong>Connect:</strong> Introduce us to potential partners, funders, or collaborators
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <strong>Feedback:</strong> Help us improve by sharing your thoughts and suggestions
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Globe className="h-6 w-6 text-ubuntu-blue" />
                      <h3 className="text-xl font-bold">Global Community</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-orange">125K+</div>
                        <div className="text-sm text-muted-foreground">Community Members</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-blue">15</div>
                        <div className="text-sm text-muted-foreground">Countries Active</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-green">356</div>
                        <div className="text-sm text-muted-foreground">Communities Served</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ubuntu Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Our <span className="text-ubuntu-orange">Ubuntu</span> Community Values
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                "I am because we are" - Our community is built on these foundational principles
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-ubuntu-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Human-Centered</h3>
                    <p className="text-muted-foreground">
                      Every decision prioritizes human dignity, wellbeing, and empowerment over profit.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-ubuntu-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Community-First</h3>
                    <p className="text-muted-foreground">
                      We build with communities, not for them. Local knowledge guides our work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-ubuntu-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-ubuntu-green" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Ethics-by-Design</h3>
                    <p className="text-muted-foreground">
                      Transparency, fairness, and accountability built into every system.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
