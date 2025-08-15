import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Heart, 
  Search, 
  Building2, 
  DollarSign, 
  UserPlus,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Join Us | Ubuntu Intelligence',
  description: 'Join the Ubuntu Intelligence movement. Opportunities for health workers, researchers, volunteers, partners, and funders to contribute to Africa\'s digital transformation.',
}

const opportunities = [
  {
    id: 'health-worker',
    title: 'Community Health Workers',
    icon: Heart,
    description: 'Join our network of community health workers using AI-powered tools to serve their communities.',
    benefits: [
      'AI-powered health prediction tools',
      'Professional training and certification',
      'Technology stipend and support',
      'Community impact recognition',
      'Career advancement opportunities'
    ],
    requirements: [
      'Healthcare background or experience',
      'Community service commitment',
      'Basic technology literacy',
      'Local language proficiency'
    ],
    color: 'bg-ubuntu-orange text-white',
    borderColor: 'border-ubuntu-orange',
    href: '/join/health-worker'
  },
  {
    id: 'researcher',
    title: 'Research Partners',
    icon: Search,
    description: 'Collaborate with us on ethical AI research, community health studies, and technology impact assessment.',
    benefits: [
      'Access to anonymized health datasets',
      'Collaborative research opportunities',
      'Publication and conference support',
      'Grant funding assistance',
      'Pan-African research network'
    ],
    requirements: [
      'Advanced degree in relevant field',
      'Research publication history',
      'Ethics review board approval',
      'Community engagement experience'
    ],
    color: 'bg-ubuntu-blue text-white',
    borderColor: 'border-ubuntu-blue',
    href: '/join/researcher'
  },
  {
    id: 'volunteer',
    title: 'Volunteers',
    icon: Users,
    description: 'Contribute your skills to help build technology that serves humanity and empowers communities.',
    benefits: [
      'Skill development opportunities',
      'Remote and flexible work',
      'Impact-driven projects',
      'Professional networking',
      'Recognition and certificates'
    ],
    requirements: [
      'Relevant skills or passion to learn',
      'Commitment to Ubuntu values',
      'Availability for regular contribution',
      'Collaborative mindset'
    ],
    color: 'bg-ubuntu-green text-white',
    borderColor: 'border-ubuntu-green',
    href: '/join/volunteer'
  },
  {
    id: 'partner',
    title: 'Strategic Partners',
    icon: Building2,
    description: 'Partner with us to scale impact, share resources, and advance ethical technology adoption.',
    benefits: [
      'Technology integration opportunities',
      'Shared impact measurement',
      'Joint funding applications',
      'Brand association with ethics',
      'Access to innovation pipeline'
    ],
    requirements: [
      'Aligned mission and values',
      'Established organization or platform',
      'Resource sharing capability',
      'Long-term commitment'
    ],
    color: 'bg-ubuntu-purple text-white',
    borderColor: 'border-ubuntu-purple',
    href: '/join/partner'
  },
  {
    id: 'funder',
    title: 'Funders & Investors',
    icon: DollarSign,
    description: 'Invest in technology that creates positive social impact while generating sustainable returns.',
    benefits: [
      'Measurable social impact',
      'Transparent reporting',
      'Scalable technology platform',
      'Strong founding team',
      'Clear path to sustainability'
    ],
    requirements: [
      'Aligned investment thesis',
      'Patient capital approach',
      'Interest in social impact',
      'Understanding of African markets'
    ],
    color: 'bg-ubuntu-yellow text-black',
    borderColor: 'border-ubuntu-yellow',
    href: '/join/funder'
  },
  {
    id: 'general',
    title: 'General Interest',
    icon: UserPlus,
    description: 'Join our community to stay updated on our mission and find ways to contribute.',
    benefits: [
      'Regular updates and newsletters',
      'Early access to new features',
      'Community events and webinars',
      'Networking opportunities',
      'Volunteer project notifications'
    ],
    requirements: [
      'Interest in our mission',
      'Commitment to Ubuntu values',
      'Active community participation',
      'Willingness to learn and grow'
    ],
    color: 'bg-gray-600 text-white',
    borderColor: 'border-gray-600',
    href: '/join/general'
  }
]

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Join the Movement
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build the Future 
                <span className="text-ubuntu-orange"> Together</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Join Ubuntu Intelligence in creating ethical, AI-driven solutions that empower 
                communities across Africa and beyond. Whether you're a health worker, researcher, 
                volunteer, partner, or funder, there's a place for you in our mission.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-ubuntu-green" />
                  <span>125,000+ Community Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-ubuntu-green" />
                  <span>356 Communities Served</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-ubuntu-green" />
                  <span>15 Countries Active</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Choose Your <span className="text-ubuntu-orange">Path</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Multiple ways to contribute to our mission of ethical technology for all
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {opportunities.map((opportunity) => {
                  const Icon = opportunity.icon
                  return (
                    <Card key={opportunity.id} className={`hover:shadow-lg transition-all duration-300 border-2 ${opportunity.borderColor} group`}>
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 rounded-lg ${opportunity.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground">
                          {opportunity.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-ubuntu-orange">Benefits:</h4>
                          <ul className="space-y-1">
                            {opportunity.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <CheckCircle className="h-3 w-3 text-ubuntu-green mr-2 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-ubuntu-purple">Requirements:</h4>
                          <ul className="space-y-1">
                            {opportunity.requirements.slice(0, 2).map((requirement, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href={opportunity.href}>
                          <Button className="w-full group-hover:shadow-md transition-shadow">
                            Apply Now
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Ubuntu Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Our <span className="text-ubuntu-orange">Ubuntu</span> Values
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                "I am because we are" - Every team member embodies these core principles
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-ubuntu-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Human-Centered</h3>
                    <p className="text-muted-foreground">
                      Every decision prioritizes human dignity, wellbeing, and empowerment over profit or efficiency.
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
                      We build with communities, not for them. Local knowledge and participation guide our work.
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
                      Transparency, fairness, and accountability are built into every system from the ground up.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Make an 
                <span className="text-ubuntu-orange"> Impact?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of passionate individuals building technology that serves humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn About Our Mission
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
