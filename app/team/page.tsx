import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  User, 
  MapPin, 
  ExternalLink,
  Heart,
  Brain,
  Globe,
  Users,
  Award,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Team | Ubuntu Intelligence',
  description: 'Meet the passionate team behind Ubuntu Intelligence. Visionary leaders, ethical technologists, and community advocates building Africa\'s digital future.',
}

const founder = {
  name: 'Ernest Nkunzimana',
  title: 'Founder & Visionary Builder',
  location: 'Kigali, Rwanda',
  bio: 'Ernest is a passionate technologist and social innovator dedicated to building ethical AI solutions that empower communities. With an MSc in IoT and extensive experience in healthcare technology, he believes that life comes before labor and technology must serve humanity.',
  credentials: [
    'MSc in IoT: Wireless Intelligent Sensor Networking',
    'Former HIS Specialist at King Faisal Hospital',
    'AI/ML Fellow & Cybersecurity Expert',
    'Member: Rwanda AI Engineer Forum, ISOC, Blockchain Kigali',
    'Google Developer Club Community Member'
  ],
  quote: "I don't build just to work or make money. I build because people are alive — and life comes before labor. Everyone deserves better health, better systems, and a better future.",
  email: 'nkernest666@gmail.com',
  phone: '+250 788 906 846',
  expertise: ['AI/ML', 'IoT', 'Blockchain', 'Healthcare Technology', 'Community Development']
}

const teamMembers = [
  {
    name: 'Dr. Amina Kone',
    title: 'Health Systems Lead',
    location: 'Dakar, Senegal',
    bio: 'Leading our health platform development with 15+ years in public health and digital health innovation across West Africa.',
    expertise: ['Public Health', 'Digital Health', 'Community Medicine'],
    icon: Heart
  },
  {
    name: 'Prof. Kwame Asante',
    title: 'Blockchain & Ethics Lead',
    location: 'Accra, Ghana',
    bio: 'Blockchain researcher and ethics advocate ensuring our decentralized systems serve community empowerment and data sovereignty.',
    expertise: ['Blockchain', 'AI Ethics', 'Data Sovereignty'],
    icon: Globe
  },
  {
    name: 'Sarah Mwangi',
    title: 'Education Innovation Lead',
    location: 'Nairobi, Kenya',
    bio: 'Designing inclusive XR learning experiences that work in low-resource environments while preserving local knowledge systems.',
    expertise: ['XR/VR', 'Educational Technology', 'Inclusive Design'],
    icon: Brain
  },
  {
    name: 'Dr. Fatima Al-Rashid',
    title: 'AI Ethics & Research Lead',
    location: 'Cairo, Egypt',
    bio: 'Ensuring our AI systems are fair, transparent, and culturally appropriate for diverse African contexts and communities.',
    expertise: ['AI Ethics', 'Machine Learning', 'Cultural Computing'],
    icon: Brain
  },
  {
    name: 'Marie Uwimana',
    title: 'Community Engagement Lead',
    location: 'Kigali, Rwanda',
    bio: 'Building bridges between technology and community needs, ensuring our solutions are truly community-driven and culturally relevant.',
    expertise: ['Community Development', 'Stakeholder Engagement', 'Cultural Adaptation'],
    icon: Users
  },
  {
    name: 'Dr. James Tumwine',
    title: 'Research Partnerships Lead',
    location: 'Kampala, Uganda',
    bio: 'Fostering collaborative research relationships with universities and institutions across Africa for evidence-based innovation.',
    expertise: ['Research Methodology', 'Academic Partnerships', 'Data Science'],
    icon: BookOpen
  }
]

const advisors = [
  {
    name: 'Dr. Amina N.',
    title: 'Global Health Expert',
    organization: 'WHO Africa',
    expertise: 'Global health policy and implementation'
  },
  {
    name: 'Prof. Kwame T.',
    title: 'AI Ethics & Policy',
    organization: 'University of Cape Town',
    expertise: 'AI governance and ethical frameworks'
  },
  {
    name: 'Sarah M.',
    title: 'Open Source Strategy',
    organization: 'Mozilla Foundation',
    expertise: 'Open source community building'
  },
  {
    name: 'Dr. Hassan A.',
    title: 'Digital Health Innovation',
    organization: 'African Union',
    expertise: 'Continental health technology policy'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Our Team
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Humans Behind the 
                <span className="text-ubuntu-orange"> Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Meet the passionate individuals building ethical technology solutions that 
                prioritize human dignity, community empowerment, and African innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Founder & <span className="text-ubuntu-orange">Visionary</span>
                </h2>
              </div>

              <Card className="overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <div className="aspect-square lg:aspect-auto lg:h-full bg-gradient-to-br from-ubuntu-orange/20 to-ubuntu-purple/20 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="h-16 w-16 text-ubuntu-orange" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                        <p className="text-ubuntu-orange font-medium mb-2">{founder.title}</p>
                        <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {founder.location}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {founder.expertise.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">About Ernest</h4>
                        <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                      </div>

                      <div className="border-l-4 border-ubuntu-orange pl-6 bg-muted/50 p-4 rounded-r-lg">
                        <p className="italic text-muted-foreground">"{founder.quote}"</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Credentials & Experience</h4>
                        <ul className="space-y-2">
                          {founder.credentials.map((credential, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                              <Award className="h-4 w-4 text-ubuntu-orange mr-2 mt-0.5 flex-shrink-0" />
                              {credential}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="text-sm">
                          <strong>Email:</strong> {founder.email}
                        </div>
                        <div className="text-sm">
                          <strong>Phone:</strong> {founder.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Core <span className="text-ubuntu-orange">Team</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Leaders driving innovation across health, technology, and community empowerment
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => {
                  const Icon = member.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-ubuntu-orange" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-ubuntu-orange font-medium mb-2">{member.title}</p>
                        
                        <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {member.location}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Advisory <span className="text-ubuntu-orange">Board</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Distinguished experts guiding our strategic direction and impact
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advisors.map((advisor, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-ubuntu-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="h-6 w-6 text-ubuntu-purple" />
                      </div>
                      <h3 className="font-bold mb-1">{advisor.name}</h3>
                      <p className="text-sm text-ubuntu-purple font-medium mb-2">{advisor.title}</p>
                      <p className="text-xs text-muted-foreground mb-3">{advisor.organization}</p>
                      <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join Our 
                <span className="text-ubuntu-orange"> Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for passionate individuals who share our Ubuntu values 
                and want to build technology that serves humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                    Explore Opportunities
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
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
