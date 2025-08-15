import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Activity,
  TrendingUp,
  Globe,
  Heart,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Ubuntu Intelligence',
  description: 'Ubuntu Intelligence administrative dashboard for platform management.',
}

export default function AdminDashboard() {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // TODO: Add role-based access control check
  // For now, allow any authenticated user to access admin

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Ubuntu Intelligence Admin</h1>
              <p className="text-muted-foreground">Platform management dashboard</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              All Systems Operational
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">125,847</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                5 unread messages
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                12 pending review
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.7%</div>
              <p className="text-xs text-muted-foreground">
                Uptime this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Platform Modules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-ubuntu-orange" />
                  <div>
                    <h3 className="font-medium">HealthTrack Pro</h3>
                    <p className="text-sm text-muted-foreground">AI health prediction platform</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-ubuntu-purple" />
                  <div>
                    <h3 className="font-medium">SafeChain</h3>
                    <p className="text-sm text-muted-foreground">Blockchain identity management</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-ubuntu-blue" />
                  <div>
                    <h3 className="font-medium">UbuntuXR</h3>
                    <p className="text-sm text-muted-foreground">Immersive learning platform</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Development
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">New user registration</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ubuntu-blue rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Contact form submission</p>
                    <p className="text-xs text-muted-foreground">15 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ubuntu-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">System health check completed</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
