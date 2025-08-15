import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { HealthWorkerApplicationForm } from '@/components/forms/health-worker-application-form'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join as Health Worker | Ubuntu Intelligence',
  description: 'Apply to become a community health worker with Ubuntu Intelligence. Use AI-powered tools to serve your community and advance healthcare access.',
}

const benefits = [
  'AI-powered health prediction tools and training',
  'Professional certification and career development',
  'Technology stipend and equipment support',
  'Community impact recognition programs',
  'Access to Pan-African health worker network',
  'Ongoing mentorship and peer support'
]

const requirements = [
  'Healthcare background or community health experience',
  'Commitment to serving your local community',
  'Basic technology literacy or willingness to learn',
  'Proficiency in local language and English',
  'Available for 20+ hours per week',
  'Aligned with Ubuntu values and mission'
]

export default function HealthWorkerApplicationPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-ubuntu-orange/10 text-ubuntu-orange">
                <Heart className="h-4 w-4 mr-2" />
                Health Worker Application
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Become a 
                <span className="text-ubuntu-orange"> Community Health Hero</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join 2,800+ community health workers using AI-powered tools to transform 
                healthcare access in their communities. Make a lasting impact with Ubuntu Intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form and Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Application Form */}
              <div className="lg:col-span-2">
                <HealthWorkerApplicationForm />
              </div>

              {/* Benefits and Requirements */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="h-6 w-6 text-ubuntu-green" />
                      <h3 className="text-xl font-bold">Benefits & Support</h3>
                    </div>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
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
                      <Users className="h-6 w-6 text-ubuntu-blue" />
                      <h3 className="text-xl font-bold">Requirements</h3>
                    </div>
                    <ul className="space-y-3">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-ubuntu-blue rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Award className="h-6 w-6 text-ubuntu-orange" />
                      <h3 className="text-xl font-bold">Impact Statistics</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-orange">2,800+</div>
                        <div className="text-sm text-muted-foreground">Active Health Workers</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-green">500K+</div>
                        <div className="text-sm text-muted-foreground">Lives Impacted</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-blue">356</div>
                        <div className="text-sm text-muted-foreground">Communities Served</div>
                      </div>
                    </div>
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
