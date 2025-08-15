import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  TrendingUp,
  Heart,
  Globe,
  Award
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News & Updates | Ubuntu Intelligence',
  description: 'Stay updated with the latest news, announcements, and insights from Ubuntu Intelligence. Read about our impact, research, and technology developments.',
}

const featuredPost = {
  id: 'ubuntu-intelligence-launch',
  title: 'Ubuntu Intelligence: Redefining Technology for Humanity',
  excerpt: 'Today marks a pivotal moment in the intersection of technology and human dignity. Ubuntu Intelligence emerges not just as another tech platform, but as a movement that places community empowerment at the heart of innovation.',
  content: 'Our launch represents years of research, community engagement, and a deep commitment to the Ubuntu philosophy...',
  author: 'Ernest Nkunzimana',
  authorRole: 'Founder & Visionary',
  publishedAt: '2024-12-20',
  readTime: '8 min read',
  category: 'Announcement',
  tags: ['Launch', 'Mission', 'Ubuntu Philosophy', 'Community'],
  featured: true,
  imageUrl: '/news/ubuntu-intelligence-launch.jpg'
}

const posts = [
  {
    id: 'healthtrack-pro-impact',
    title: 'HealthTrack Pro Shows 25% Improvement in Early Disease Detection',
    excerpt: 'New data from our pilot programs across 15 communities shows significant improvements in health outcomes through AI-powered prediction.',
    author: 'Dr. Amina Kone',
    authorRole: 'Health Systems Lead',
    publishedAt: '2024-12-18',
    readTime: '5 min read',
    category: 'Impact',
    tags: ['HealthTrack Pro', 'AI', 'Community Health'],
    imageUrl: '/news/healthtrack-impact.jpg'
  },
  {
    id: 'safechain-partnership',
    title: 'SafeChain Partners with African Union for Digital Identity Initiative',
    excerpt: 'Our blockchain-based identity platform will pilot in three countries as part of the AU\'s digital transformation agenda.',
    author: 'Prof. Kwame Asante',
    authorRole: 'Blockchain Lead',
    publishedAt: '2024-12-15',
    readTime: '6 min read',
    category: 'Partnership',
    tags: ['SafeChain', 'African Union', 'Digital Identity'],
    imageUrl: '/news/safechain-au.jpg'
  },
  {
    id: 'ubuntu-xr-schools',
    title: 'UbuntuXR Brings Immersive Learning to 50 Rural Schools',
    excerpt: 'Our XR education platform launches in remote communities, providing access to world-class educational content in local languages.',
    author: 'Sarah Mwangi',
    authorRole: 'Education Innovation Lead',
    publishedAt: '2024-12-12',
    readTime: '4 min read',
    category: 'Education',
    tags: ['UbuntuXR', 'Education', 'Rural Communities'],
    imageUrl: '/news/ubuntu-xr-schools.jpg'
  },
  {
    id: 'ethical-ai-framework',
    title: 'Introducing Our Ethical AI Framework for African Communities',
    excerpt: 'Our comprehensive framework ensures AI systems are fair, transparent, and culturally appropriate for diverse African contexts.',
    author: 'Dr. Fatima Al-Rashid',
    authorRole: 'AI Ethics Lead',
    publishedAt: '2024-12-10',
    readTime: '7 min read',
    category: 'Research',
    tags: ['AI Ethics', 'Framework', 'Community'],
    imageUrl: '/news/ethical-ai.jpg'
  },
  {
    id: 'funding-milestone',
    title: 'Ubuntu Intelligence Reaches $2M Funding Milestone',
    excerpt: 'Support from impact investors and development partners enables us to scale our solutions across the continent.',
    author: 'Ernest Nkunzimana',
    authorRole: 'Founder & CEO',
    publishedAt: '2024-12-08',
    readTime: '3 min read',
    category: 'Funding',
    tags: ['Funding', 'Milestone', 'Growth'],
    imageUrl: '/news/funding-milestone.jpg'
  },
  {
    id: 'community-spotlight',
    title: 'Community Spotlight: How Kigali Health Center Transformed Care',
    excerpt: 'Meet the health workers using Ubuntu Intelligence tools to provide better care and save lives in their community.',
    author: 'Marie Uwimana',
    authorRole: 'Community Lead',
    publishedAt: '2024-12-05',
    readTime: '6 min read',
    category: 'Community',
    tags: ['Community Spotlight', 'Health Workers', 'Success Story'],
    imageUrl: '/news/community-spotlight.jpg'
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Latest Updates
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & 
                <span className="text-ubuntu-orange"> Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay updated with the latest developments, research insights, and community 
                stories from Ubuntu Intelligence as we build ethical technology for Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Badge variant="secondary" className="bg-ubuntu-orange text-white">
                  Featured Story
                </Badge>
              </div>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-ubuntu-orange/20 to-ubuntu-purple/20 flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="h-16 w-16 mx-auto mb-4 text-ubuntu-orange" />
                        <p className="text-muted-foreground">Featured Story Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-ubuntu-orange/10 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-ubuntu-orange" />
                        </div>
                        <div>
                          <p className="font-medium">{featuredPost.author}</p>
                          <p className="text-sm text-muted-foreground">{featuredPost.authorRole}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link href={`/news/${featuredPost.id}`}>
                      <Button className="w-full mt-6 bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Recent <span className="text-ubuntu-orange">Updates</span>
                </h2>
                <Button variant="outline">
                  View All Posts
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                    <CardHeader className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-ubuntu-blue/20 to-ubuntu-green/20 flex items-center justify-center">
                        <div className="text-center">
                          {post.category === 'Impact' && <TrendingUp className="h-12 w-12 text-ubuntu-blue mb-2" />}
                          {post.category === 'Partnership' && <Award className="h-12 w-12 text-ubuntu-purple mb-2" />}
                          {post.category === 'Education' && <Heart className="h-12 w-12 text-ubuntu-green mb-2" />}
                          {post.category === 'Research' && <Globe className="h-12 w-12 text-ubuntu-orange mb-2" />}
                          {post.category === 'Funding' && <TrendingUp className="h-12 w-12 text-ubuntu-yellow mb-2" />}
                          {post.category === 'Community' && <Heart className="h-12 w-12 text-ubuntu-red mb-2" />}
                          <p className="text-sm text-muted-foreground">Story Image</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      
                      <CardTitle className="text-lg mb-3 group-hover:text-ubuntu-orange transition-colors">
                        {post.title}
                      </CardTitle>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Link href={`/news/${post.id}`}>
                        <Button variant="ghost" className="w-full mt-4 text-ubuntu-orange hover:bg-ubuntu-orange/10">
                          Read More
                          <ArrowRight className="h-3 w-3 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay <span className="text-ubuntu-orange">Connected</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest updates, insights, and stories delivered to your inbox
              </p>
              
              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ubuntu-orange"
                    />
                    <Button className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                      Subscribe to Updates
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Join 25,000+ subscribers. Unsubscribe anytime.
                  </p>
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
