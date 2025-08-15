import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Globe, 
  Target,
  Award,
  MapPin,
  Activity,
  Clock,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impact & Results | Ubuntu Intelligence',
  description: 'See the real-world impact of Ubuntu Intelligence across Africa. Metrics, success stories, and progress toward UN Sustainable Development Goals.',
}

const impactMetrics = [
  {
    title: 'Lives Impacted',
    value: '500,000+',
    change: '+25% this quarter',
    icon: Heart,
    color: 'text-ubuntu-red',
    description: 'People reached through our health, education, and empowerment programs'
  },
  {
    title: 'Communities Served',
    value: '356',
    change: 'Across 15 countries',
    icon: Users,
    color: 'text-ubuntu-blue',
    description: 'Active communities using Ubuntu Intelligence solutions'
  },
  {
    title: 'Health Predictions',
    value: '125,000+',
    change: '94.2% accuracy',
    icon: Activity,
    color: 'text-ubuntu-green',
    description: 'AI-powered health predictions made, preventing thousands of complications'
  },
  {
    title: 'Emergency Responses',
    value: '2,847',
    change: '4.2 min avg response',
    icon: Clock,
    color: 'text-ubuntu-orange',
    description: 'Emergency health situations coordinated through our platform'
  }
]

const sdgProgress = [
  {
    goal: 'SDG 3: Good Health and Well-being',
    progress: 78,
    description: '25% faster diagnosis of chronic conditions',
    achievements: [
      'Early detection programs in 356 communities',
      '94.2% AI prediction accuracy achieved',
      '30% reduction in emergency response times',
      '15,000+ health workers trained'
    ]
  },
  {
    goal: 'SDG 4: Quality Education',
    progress: 65,
    description: '40% increase in digital health engagement',
    achievements: [
      'UbuntuXR deployed in 50 rural schools',
      '25,000+ students reached with immersive learning',
      'Content available in 4 local languages',
      '85% improvement in health literacy scores'
    ]
  },
  {
    goal: 'SDG 9: Industry, Innovation and Infrastructure',
    progress: 89,
    description: '10+ research partnerships established',
    achievements: [
      'Open-source AI toolkit released',
      '5 blockchain pilot programs launched',
      '$2M+ in research funding secured',
      '50+ innovation workshops conducted'
    ]
  },
  {
    goal: 'SDG 10: Reduced Inequalities',
    progress: 72,
    description: 'Multi-language accessibility achieved',
    achievements: [
      'Platform accessible in English, French, Swahili, Kinyarwanda',
      'Screen reader support implemented',
      'Offline functionality for low-connectivity areas',
      '60% of users from underserved communities'
    ]
  }
]

const successStories = [
  {
    title: 'Kigali Health Center',
    location: 'Rwanda',
    impact: '40% reduction in maternal mortality',
    description: 'By implementing HealthTrack Pro\'s predictive analytics, the center identified high-risk pregnancies earlier, leading to better outcomes.',
    metrics: ['500+ mothers monitored', '98% on-time prenatal care', '15 lives saved'],
    category: 'Healthcare'
  },
  {
    title: 'Makerere University Research',
    location: 'Uganda',
    impact: 'Breakthrough in malaria prediction',
    description: 'Using our ethical AI framework, researchers developed a community-validated malaria prediction model.',
    metrics: ['10,000+ patients studied', '92% prediction accuracy', '3 research papers published'],
    category: 'Research'
  },
  {
    title: 'Nairobi Slum Education',
    location: 'Kenya',
    impact: '85% improvement in health literacy',
    description: 'UbuntuXR brought immersive health education to underserved communities, dramatically improving understanding.',
    metrics: ['2,500+ students trained', '15 schools participating', '90% engagement rate'],
    category: 'Education'
  }
]

const partnerLogos = [
  'African Union',
  'WHO Africa',
  'UNICEF',
  'Gates Foundation',
  'World Bank',
  'Makerere University',
  'University of Rwanda',
  'King Faisal Hospital'
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Real Impact
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Measuring What 
                <span className="text-ubuntu-orange"> Matters</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every line of code, every AI model, every community partnership is designed 
                to create measurable positive impact. Here's how we're changing lives across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Key Impact Metrics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <Icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                      <div className="text-3xl font-bold mb-2">{metric.value}</div>
                      <div className="text-sm text-ubuntu-green font-medium mb-2">{metric.change}</div>
                      <div className="font-semibold mb-2">{metric.title}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* UN SDG Progress */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  UN SDG <span className="text-ubuntu-orange">Progress</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our commitment to the United Nations Sustainable Development Goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {sdgProgress.map((sdg, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{sdg.goal}</CardTitle>
                        <Badge variant="secondary" className="bg-ubuntu-orange text-white">
                          {sdg.progress}%
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{sdg.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress toward target</span>
                            <span>{sdg.progress}%</span>
                          </div>
                          <Progress value={sdg.progress} className="h-3" />
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {sdg.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <CheckCircle className="h-3 w-3 text-ubuntu-green mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Success <span className="text-ubuntu-orange">Stories</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Real communities, real people, real transformation
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {story.location}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {story.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-lg font-semibold text-ubuntu-orange">
                          {story.impact}
                        </div>
                        
                        <p className="text-muted-foreground text-sm">
                          {story.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Metrics:</h4>
                          <ul className="space-y-1">
                            {story.metrics.map((metric, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <TrendingUp className="h-3 w-3 text-ubuntu-green mr-2" />
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Impact Map */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Continental <span className="text-ubuntu-orange">Reach</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Ubuntu Intelligence is active across 15 African countries and growing
              </p>
              
              <Card>
                <CardContent className="p-12">
                  <div className="aspect-video bg-gradient-to-br from-ubuntu-orange/10 to-ubuntu-blue/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-20 w-20 mx-auto mb-4 text-ubuntu-orange" />
                      <h3 className="text-2xl font-semibold mb-2">Interactive Impact Map</h3>
                      <p className="text-muted-foreground mb-4">
                        Real-time visualization of our impact across Africa
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-ubuntu-orange">15</div>
                          <div className="text-muted-foreground">Countries</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-ubuntu-blue">356</div>
                          <div className="text-muted-foreground">Communities</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-ubuntu-green">2.8K</div>
                          <div className="text-muted-foreground">Health Workers</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-ubuntu-purple">500K+</div>
                          <div className="text-muted-foreground">Lives Impacted</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Trusted <span className="text-ubuntu-orange">Partners</span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {partnerLogos.map((partner, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <Award className="h-8 w-8 text-ubuntu-orange" />
                      </div>
                      <div className="font-medium text-sm">{partner}</div>
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
