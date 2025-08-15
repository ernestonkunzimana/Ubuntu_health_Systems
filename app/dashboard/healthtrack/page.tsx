import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Activity, 
  Heart, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Smartphone,
  Brain
} from 'lucide-react'

export default function HealthTrackProPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Heart className="h-8 w-8 text-ubuntu-orange" />
            HealthTrack Pro
          </h1>
          <p className="text-muted-foreground">
            AI-driven community health prediction and monitoring system
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            AI Models Active
          </Badge>
          <Button>
            Generate Report
          </Button>
        </div>
      </div>

      {/* Health Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47,823</div>
            <p className="text-xs text-muted-foreground">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Predictions</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,456</div>
            <p className="text-xs text-muted-foreground">
              94.2% accuracy rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emergency Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Avg response: 4.2 min
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Device Connections</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,234</div>
            <p className="text-xs text-muted-foreground">
              IoMT devices active
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Model Performance & Health Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Model Performance</CardTitle>
            <CardDescription>Real-time health prediction accuracy metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Chronic Disease Prediction</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Emergency Risk Assessment</span>
                <span>91.8%</span>
              </div>
              <Progress value={91.8} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Behavioral Health Analysis</span>
                <span>88.5%</span>
              </div>
              <Progress value={88.5} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Medication Adherence</span>
                <span>96.1%</span>
              </div>
              <Progress value={96.1} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Health Alerts</CardTitle>
            <CardDescription>Latest health predictions and emergency notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">High-Risk Diabetes Alert</p>
                <p className="text-xs text-muted-foreground">
                  Patient ID: UHT-2024-1547 - Kigali Health Center
                </p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Successful Early Intervention</p>
                <p className="text-xs text-muted-foreground">
                  Hypertension risk detected and treated - Musanze
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
              <Button size="sm" variant="outline">Details</Button>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="h-4 w-4 text-yellow-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Medication Reminder Needed</p>
                <p className="text-xs text-muted-foreground">
                  125 patients require adherence follow-up
                </p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
              <Button size="sm" variant="outline">Send</Button>
            </div>
            
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-4 w-4 text-ubuntu-orange mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Health Trend Improvement</p>
                <p className="text-xs text-muted-foreground">
                  Community wellness score increased 15%
                </p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
              <Button size="sm" variant="outline">Report</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Geographic Health Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Health Distribution</CardTitle>
          <CardDescription>Health metrics across different regions and communities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-ubuntu-orange" />
                  <span className="font-medium">Kigali City</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Excellent
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Health Score</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  15,234 active patients • 98% coverage
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-ubuntu-blue" />
                  <span className="font-medium">Musanze District</span>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Good
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Health Score</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  8,567 active patients • 85% coverage
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-ubuntu-green" />
                  <span className="font-medium">Nyagatare District</span>
                </div>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Improving
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Health Score</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  6,234 active patients • 72% coverage
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IoMT Device Status */}
      <Card>
        <CardHeader>
          <CardTitle>IoMT Device Network</CardTitle>
          <CardDescription>Internet of Medical Things device connectivity and data flow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-ubuntu-orange" />
              <div className="text-2xl font-bold">15,234</div>
              <div className="text-sm text-muted-foreground">Smart Wearables</div>
              <div className="text-xs text-green-600 mt-1">98% Active</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Activity className="h-8 w-8 mx-auto mb-2 text-ubuntu-blue" />
              <div className="text-2xl font-bold">8,567</div>
              <div className="text-sm text-muted-foreground">Health Monitors</div>
              <div className="text-xs text-green-600 mt-1">95% Active</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Heart className="h-8 w-8 mx-auto mb-2 text-ubuntu-red" />
              <div className="text-2xl font-bold">3,456</div>
              <div className="text-sm text-muted-foreground">Emergency Devices</div>
              <div className="text-xs text-green-600 mt-1">100% Active</div>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Brain className="h-8 w-8 mx-auto mb-2 text-ubuntu-purple" />
              <div className="text-2xl font-bold">2,345</div>
              <div className="text-sm text-muted-foreground">Mental Health Trackers</div>
              <div className="text-xs text-green-600 mt-1">92% Active</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
