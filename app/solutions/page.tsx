import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Shield, Brain, Globe, Database } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions | Ubuntu Intelligence',
  description: 'Discover Ubuntu Intelligence\'s suite of ethical, AI-driven solutions for healthcare, identity management, education, and community empowerment.',
}

const solutions = [
  {
    id: 'healthtrack-pro',
    title: 'HealthTrack Pro',
    icon: Heart,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    description: 'AI-driven community health prediction and monitoring system with IoMT integration.',
    features: [
      'Predictive health analytics',
      'Wearable device integration', 
      'Emergency response coordination',
      'Community health worker management'
    ],
    color: 'text-ubuntu-orange'
  },
  {
    id: 'safechain',
    title: 'SafeChain',
    icon: Shield,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    description: 'Blockchain-powered digital identity and consent management platform.',
    features: [
      'Decentralized identity (DID)',
      'Smart contract enforcement',
      'Consent ledger management',
      'Document notarization'
    ],
    color: 'text-ubuntu-purple'
  },
  {
    id: 'ubuntu-xr',
    title: 'UbuntuXR',
    icon: Brain,
    status: 'Coming Soon',
    statusColor: 'bg-yellow-100 text-yellow-800',
    description: 'Immersive learning and wellness through extended reality technology.',
    features: [
      'VR therapy sessions',
      'Immersive health education',
      'Multi-language content',
      'Low-connectivity optimization'
    ],
    color: 'text-ubuntu-blue'
  },
  {
    id: 'ubuntu-ai',
    title: 'UbuntuAI Toolkit',
    icon: Brain,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    description: 'Modular AI tools trained on African data for local relevance and fairness.',
    features: [
      'Ethics-by-design algorithms',
      'Community-owned datasets',
      'Bias auditing tools',
      'Federated learning'
    ],
    color: 'text-ubuntu-green'
  },
  {
    id: 'data-commons',
    title: 'Data Commons',
    icon: Database,
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    description: 'Secure, consent-first data marketplace for research and innovation.',
    features: [
      'Consent-first data sharing',
      'Secure anonymization',
      'Community revenue sharing',
      'GDPR/FHIR compliance'
    ],
    color: 'text-ubuntu-yellow'
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Our Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transformative Technology 
                <span className="text-ubuntu-orange"> for Africa</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Five interoperable, modular innovations solving Africa's most urgent challenges 
                through ethical AI, blockchain technology, and community-centered design.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${solution.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{solution.title}</CardTitle>
                            <Badge variant="secondary" className={solution.statusColor}>
                              {solution.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {solution.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-1">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Link href={`/solutions/${solution.id}`}>
                          <Button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                            Learn More
                          </Button>
                        </Link>
                        {solution.status === 'Active' && (
                          <Link href="/contact">
                            <Button variant="outline">
                              Request Demo
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform 
                <span className="text-ubuntu-orange"> Your Community?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of communities already benefiting from Ubuntu Intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                    Contact Our Team
                  </Button>
                </Link>
                <Link href="/join">
                  <Button size="lg" variant="outline">
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
