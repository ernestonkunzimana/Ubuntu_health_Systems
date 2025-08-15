import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Globe, Heart, Users, Target, Award, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Ubuntu Intelligence',
  description: 'Ubuntu Intelligence is a movement creating ethical, AI-driven solutions that solve systemic human problems through advanced technology and Ubuntu values.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                A Movement, Not Just a 
                <span className="text-ubuntu-orange"> Tech Brand</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ubuntu Intelligence creates solutions that solve systemic human problems — healthcare inequality, 
                climate instability, community disempowerment — by uniting frontier technologies with ethics and Ubuntu values.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Purpose */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-ubuntu-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-muted-foreground">
                    To become Africa's leading platform for building and governing ethical, 
                    intelligent, and inclusive digital infrastructure that empowers generations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-ubuntu-purple mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-muted-foreground">
                    To co-create, deploy, and scale digital systems that solve Africa's most urgent 
                    challenges through community-driven design, cutting-edge technology, and values-first approach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-ubuntu-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Purpose</h3>
                  <p className="text-muted-foreground">
                    To ensure technology reflects collective dignity, building solutions for all — 
                    abled and disabled, rich and poor, urban and rural.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Alignment */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Global <span className="text-ubuntu-orange">Alignment</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-ubuntu-blue mb-4" />
                    <h3 className="text-xl font-bold mb-2">UN SDGs</h3>
                    <p className="text-muted-foreground mb-4">
                      Contributing to Sustainable Development Goals
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• SDG 3: Good Health and Well-being</li>
                      <li>• SDG 9: Innovation and Infrastructure</li>
                      <li>• SDG 10: Reduced Inequalities</li>
                      <li>• SDG 17: Partnerships for Goals</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-ubuntu-green mb-4" />
                    <h3 className="text-xl font-bold mb-2">AU Agenda 2063</h3>
                    <p className="text-muted-foreground mb-4">
                      Aligned with Africa's development blueprint
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Inclusive prosperity</li>
                      <li>• Healthy and well-nourished citizens</li>
                      <li>• Resilient, influential global force</li>
                      <li>• Technology and innovation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Calendar className="h-8 w-8 text-ubuntu-purple mb-4" />
                    <h3 className="text-xl font-bold mb-2">Rwanda Vision 2050</h3>
                    <p className="text-muted-foreground mb-4">
                      Supporting national development goals
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Knowledge-based economy</li>
                      <li>• Digital universal health access</li>
                      <li>• Innovation leadership</li>
                      <li>• Inclusive growth</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Message */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Message from the Founder
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-ubuntu-orange">Ernest Nkunzimana</span>
                  </h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      "I don't build just to work or make money. I build because people are alive — 
                      and life comes before labor. That's why I love growing and scaling ethical 
                      technologies like IoT, AI/ML/DL, Blockchain, Quantum Computing, and open-source tools."
                    </p>
                    <p>
                      "Everyone deserves better health, better systems, and a better future. 
                      We must leave this world better than we found it."
                    </p>
                    <p className="font-semibold text-foreground">
                      Together, we can create a digital world that remembers its humanity.
                    </p>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <h3 className="font-semibold">Credentials & Experience</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• MSc in IoT: Wireless Intelligent Sensor Networking</li>
                      <li>• Former HIS Specialist at King Faisal Hospital</li>
                      <li>• AI/ML Fellow & Cybersecurity Expert</li>
                      <li>• Member: Rwanda AI Engineer Forum, ISOC, Blockchain Kigali</li>
                      <li>• Google Developer Club Community Member</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-ubuntu-orange/20 to-ubuntu-purple/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-16 w-16 text-ubuntu-orange" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Ernest Nkunzimana<br />
                            Founder & Visionary Builder
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Our <span className="text-ubuntu-orange">Journey</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    year: "2024",
                    title: "Ubuntu Intelligence Launch",
                    description: "Platform launch with HealthTrack Pro MVP and community partnerships"
                  },
                  {
                    year: "2024-2025",
                    title: "Ecosystem Expansion", 
                    description: "SafeChain deployment, UbuntuXR pilot programs, and AI toolkit release"
                  },
                  {
                    year: "2025-2026",
                    title: "Continental Scale",
                    description: "10+ regional deployments, open API launch, and research partnerships"
                  }
                ].map((milestone, index) => (
                  <Card key={milestone.year} className="relative">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center">
                          <span className="font-bold text-ubuntu-orange">{milestone.year}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
