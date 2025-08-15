import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Heart, Shield, Brain, Users, Globe, Zap } from 'lucide-react'
import { PlatformStats } from '@/components/platform-stats'
import { FeatureGrid } from '@/components/feature-grid'
import { ImpactMetrics } from '@/components/impact-metrics'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            🌍 Building Africa's Digital Future
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ubuntu-orange to-ubuntu-purple bg-clip-text text-transparent">
            Ubuntu Intelligence System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformative Pan-African innovation platform that designs, builds, and scales 
            ethical, AI-powered, and human-centered solutions for Africa's grand challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
              Explore Platforms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <PlatformStats />

      {/* Core Platforms */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ubuntu Intelligence Platforms</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five interoperable, modular innovations solving Africa's most urgent challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-ubuntu-orange hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-ubuntu-orange" />
                <CardTitle>HealthTrack Pro</CardTitle>
              </div>
              <CardDescription>
                AI-driven community health prediction and monitoring system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Symptom & health history tracking</li>
                <li>• Wearable IoMT device integration</li>
                <li>• Emergency services & GPS alerts</li>
                <li>• Behavioral change recommendations</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-ubuntu-purple hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-ubuntu-purple" />
                <CardTitle>SafeChain</CardTitle>
              </div>
              <CardDescription>
                Decentralized identity, credential, and consent platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Blockchain-based health records</li>
                <li>• Smart contract enforcement</li>
                <li>• Consent ledger management</li>
                <li>• Document notarization</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-ubuntu-blue hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-ubuntu-blue" />
                <CardTitle>UbuntuXR</CardTitle>
              </div>
              <CardDescription>
                Immersive learning and wellness through extended reality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• VR therapy sessions</li>
                <li>• Immersive health education</li>
                <li>• Multi-language content</li>
                <li>• Low-connectivity optimization</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-ubuntu-green hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-ubuntu-green" />
                <CardTitle>UbuntuAI Toolkit</CardTitle>
              </div>
              <CardDescription>
                Modular AI tools trained on African data for local relevance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Ethics-by-design algorithms</li>
                <li>• Community-owned datasets</li>
                <li>• Bias auditing tools</li>
                <li>• Federated learning</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-ubuntu-yellow hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-ubuntu-yellow" />
                <CardTitle>Data Commons</CardTitle>
              </div>
              <CardDescription>
                Secure, consent-first data marketplace for research and innovation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Consent-first data contributions</li>
                <li>• Secure anonymization engine</li>
                <li>• Community revenue sharing</li>
                <li>• GDPR/FHIR compliance</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-ubuntu-red hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-ubuntu-red" />
                <CardTitle>Community Hub</CardTitle>
              </div>
              <CardDescription>
                Community health worker management and engagement platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Training & capacity building</li>
                <li>• Localized content delivery</li>
                <li>• Gamification & reputation</li>
                <li>• Multi-channel messaging</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Ubuntu Philosophy */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ubuntu Philosophy</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            "I am because we are" - Our technology is built on the foundation of African Ubuntu philosophy, 
            emphasizing community, interconnectedness, and shared prosperity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-ubuntu-orange rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Community-First</h3>
              <p className="text-sm text-muted-foreground">
                Built with and for communities, not just users
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-ubuntu-green rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Ethics-by-Design</h3>
              <p className="text-sm text-muted-foreground">
                Privacy, transparency, and fairness built into every system
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-ubuntu-blue rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Future-Resilient</h3>
              <p className="text-sm text-muted-foreground">
                Sustainable, scalable solutions for generations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
