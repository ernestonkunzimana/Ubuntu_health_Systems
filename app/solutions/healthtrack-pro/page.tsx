import { Metadata } from 'next'
import Link from 'next/link'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Heart, 
  Activity, 
  Users, 
  MapPin, 
  Smartphone,
  Brain,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'HealthTrack Pro | Ubuntu Intelligence',
  description: 'AI-powered community health prediction and monitoring system. Early disease detection, IoMT integration, and emergency response coordination for underserved communities.',
}

const features = [
  {
    icon: Brain,
    title: 'AI Health Prediction',
    description: 'Advanced machine learning models trained on African health data to predict health risks and complications before they occur.',
    details: [
      '94.2% prediction accuracy for chronic diseases',
      'Early warning system for maternal health',
      'Malaria and infectious disease forecasting',
      'Mental health screening and support'
    ]
  },
  {
    icon: Smartphone,
    title: 'IoMT Device Integration',
    description: 'Seamless connection with wearable health monitors and smart medical devices for real-time health tracking.',
    details: [
      '15,000+ connected wearable devices',
      'Vital signs monitoring (heart rate, BP, temperature)',
      'Medication adherence tracking',
      'Sleep and activity pattern analysis'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Response',
    description: 'GPS-enabled emergency alert system that coordinates rapid response for health emergencies in remote areas.',
    details: [
      '4.2 minute average response time',
      'Automated ambulance dispatch',
      'Community health worker notification',
      'Family and caregiver alerts'
    ]
  },
  {
    icon: Users,
    title: 'Community Health Management',
    description: 'Comprehensive platform for training, managing, and supporting community health workers across regions.',
    details: [
      '2,800+ trained health workers',
      'Digital training modules and certification',
      'Performance tracking and support',
      'Knowledge sharing and best practices'
    ]
  },
  {
    icon: Activity,
    title: 'Health Analytics Dashboard',
    description: 'Real-time health insights and population health trends for healthcare administrators and policymakers.',
    details: [
      'Population health trend analysis',
      'Disease outbreak early detection',
      'Resource allocation optimization',
      'Impact measurement and reporting'
    ]
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Bank-level security with patient data sovereignty and blockchain-based consent management.',
    details: [
      'End-to-end encryption for all data',
      'Patient-controlled data sharing',
      'GDPR and HIPAA compliance',
      'Blockchain audit trails'
    ]
  }
]

const metrics = [
  { label: 'Communities Served', value: '356', change: '+15 this month' },
  { label: 'Health Predictions Made', value: '125K+', change: '94.2% accuracy' },
  { label: 'Emergency Responses', value: '2,847', change: '4.2min avg time' },
  { label: 'Health Workers Trained', value: '2,800+', change: 'Across 15 countries' }
]

const caseStudies = [
  {
    title: 'Kigali Health Center',
    location: 'Rwanda',
    challenge: 'High maternal mortality rates in rural communities',
    solution: 'AI-powered pregnancy risk assessment and early intervention',
    results: [
      '40% reduction in maternal mortality',
      '98% on-time prenatal care attendance',
      '500+ high-risk pregnancies identified early',
      '15 maternal lives saved in 6 months'
    ],
    testimonial: "HealthTrack Pro has transformed how we care for pregnant mothers. The early warning system has saved countless lives.",
    author: "Dr. Marie Uwimana, Chief Medical Officer"
  },
  {
    title: 'Makerere University Research',
    location: 'Uganda',
    challenge: 'Malaria outbreaks in urban slums',
    solution: 'Predictive modeling for malaria hotspots and prevention',
    results: [
      '65% reduction in malaria cases',
      '10,000+ people in prevention programs',
      '92% accuracy in outbreak prediction',
      '3 research papers published'
    ],
    testimonial: "The AI models helped us identify outbreak patterns we never saw before, enabling proactive prevention.",
    author: "Prof. James Tumwine, Public Health Researcher"
  }
]

export default function HealthTrackProPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-6 bg-ubuntu-orange/10 text-ubuntu-orange">
                    AI-Powered Healthcare
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-ubuntu-orange">HealthTrack</span> Pro
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Revolutionary AI-driven community health prediction and monitoring system. 
                    Combining machine learning, IoMT devices, and community expertise to 
                    prevent health crises before they happen.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link href="/contact">
                      <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                        Request Demo
                      </Button>
                    </Link>
                    <Link href="/join/health-worker">
                      <Button size="lg" variant="outline">
                        Join as Health Worker
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-ubuntu-orange">{metric.value}</div>
                        <div className="text-sm font-medium">{metric.label}</div>
                        <div className="text-xs text-muted-foreground">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-ubuntu-orange/20 to-ubuntu-red/20 flex items-center justify-center">
                        <div className="text-center">
                          <Heart className="h-20 w-20 mx-auto mb-4 text-ubuntu-orange" />
                          <h3 className="text-xl font-semibold mb-2">Live Health Dashboard</h3>
                          <p className="text-muted-foreground">Real-time community health monitoring</p>
                          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center p-3 bg-white/10 rounded">
                              <div className="font-bold">94.2%</div>
                              <div className="text-xs">AI Accuracy</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded">
                              <div className="font-bold">4.2min</div>
                              <div className="text-xs">Response Time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Comprehensive <span className="text-ubuntu-orange">Health Intelligence</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Six core modules working together to transform community healthcare
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-ubuntu-orange/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-ubuntu-orange" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <CheckCircle className="h-3 w-3 text-ubuntu-green mr-2 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  How <span className="text-ubuntu-orange">It Works</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Simple, powerful, and designed for real-world implementation
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Data Collection',
                    description: 'IoMT devices and community health workers collect health data in real-time',
                    icon: Smartphone
                  },
                  {
                    step: '02',
                    title: 'AI Analysis',
                    description: 'Advanced ML algorithms analyze patterns and predict health risks',
                    icon: Brain
                  },
                  {
                    step: '03',
                    title: 'Early Alerts',
                    description: 'Automated alerts sent to health workers and emergency services',
                    icon: AlertTriangle
                  },
                  {
                    step: '04',
                    title: 'Intervention',
                    description: 'Coordinated response prevents complications and saves lives',
                    icon: Heart
                  }
                ].map((step, index) => {
                  const Icon = step.icon
                  return (
                    <Card key={index} className="text-center relative">
                      <CardContent className="p-8">
                        <div className="text-6xl font-bold text-ubuntu-orange/20 mb-4">{step.step}</div>
                        <Icon className="h-12 w-12 mx-auto mb-4 text-ubuntu-orange" />
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </CardContent>
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-ubuntu-orange/30"></div>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Real <span className="text-ubuntu-orange">Impact</span> Stories
                </h2>
                <p className="text-xl text-muted-foreground">
                  See how HealthTrack Pro is transforming healthcare across Africa
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {study.location}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-ubuntu-orange/10 text-ubuntu-orange">
                          Success Story
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Challenge:</h4>
                          <p className="text-muted-foreground text-sm">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Solution:</h4>
                          <p className="text-muted-foreground text-sm">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Results:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="text-sm bg-muted/50 p-3 rounded-lg">
                                <TrendingUp className="h-4 w-4 text-ubuntu-green mb-1" />
                                {result}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-l-4 border-ubuntu-orange pl-4 bg-muted/30 p-4 rounded-r-lg">
                          <p className="text-sm italic mb-2">"{study.testimonial}"</p>
                          <p className="text-xs text-muted-foreground">— {study.author}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform 
                <span className="text-ubuntu-orange"> Healthcare?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 356 communities already using HealthTrack Pro to save lives and improve health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                    Schedule Demo
                  </Button>
                </Link>
                <Link href="/join/health-worker">
                  <Button size="lg" variant="outline">
                    Become a Health Worker
                  </Button>
                </Link>
                <Link href="/join/partner">
                  <Button size="lg" variant="ghost">
                    Partner With Us
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
