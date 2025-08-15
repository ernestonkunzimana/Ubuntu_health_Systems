import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Shield, 
  Key, 
  FileText, 
  Users, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Lock,
  Globe,
  Database,
  Zap,
  TrendingUp
} from 'lucide-react'

export default function SafeChainPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8 text-ubuntu-purple" />
            SafeChain
          </h1>
          <p className="text-muted-foreground">
            Decentralized identity, credential, and consent management platform
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Blockchain Active
          </Badge>
          <Button>
            Deploy Contract
          </Button>
        </div>
      </div>

      {/* Blockchain Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Digital Identities</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89,234</div>
            <p className="text-xs text-muted-foreground">
              +15.3% this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Smart Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,456</div>
            <p className="text-xs text-muted-foreground">
              Active contracts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consent Records</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234,567</div>
            <p className="text-xs text-muted-foreground">
              100% compliance rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Transactions</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,789</div>
            <p className="text-xs text-muted-foreground">
              Last 24 hours
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Blockchain Network Status & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Blockchain Network Status</CardTitle>
            <CardDescription>Real-time network health and performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-ubuntu-purple" />
                <span className="font-medium">Network Connectivity</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">99.9% Uptime</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-ubuntu-orange" />
                <span className="font-medium">Transaction Speed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">2.3s</span>
                <span className="text-sm text-muted-foreground">avg confirmation</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-ubuntu-green" />
                <span className="font-medium">Security Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Maximum
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Consensus Participation</span>
                <span>97.8%</span>
              </div>
              <Progress value={97.8} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Node Distribution</span>
                <span>245 Active Nodes</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Distributed across 15 African countries
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Blockchain Transactions</CardTitle>
            <CardDescription>Latest identity and consent management activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Key className="h-4 w-4 text-ubuntu-purple mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">New Identity Created</p>
                <p className="text-xs text-muted-foreground">
                  Patient DID: did:ubuntu:2024:healthcare:1547
                </p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Consent Granted</p>
                <p className="text-xs text-muted-foreground">
                  Research access approved - Makerere University
                </p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
              <Button size="sm" variant="outline">Details</Button>
            </div>
            
            <div className="flex items-start space-x-3">
              <FileText className="h-4 w-4 text-ubuntu-blue mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Document Notarized</p>
                <p className="text-xs text-muted-foreground">
                  Vaccination certificate verified and stored
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
              <Button size="sm" variant="outline">Verify</Button>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Consent Revoked</p>
                <p className="text-xs text-muted-foreground">
                  Patient withdrew research participation
                </p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
              <Button size="sm" variant="outline">Process</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Identity Management & Smart Contracts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Digital Identity Management</CardTitle>
            <CardDescription>Decentralized identity (DID) statistics and management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 border rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-2 text-ubuntu-purple" />
                <div className="text-2xl font-bold">89,234</div>
                <div className="text-sm text-muted-foreground">Active DIDs</div>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-2 text-ubuntu-green" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Healthcare Workers</span>
                <span className="text-sm text-muted-foreground">15,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Patients</span>
                <span className="text-sm text-muted-foreground">67,890</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Researchers</span>
                <span className="text-sm text-muted-foreground">4,567</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Institutions</span>
                <span className="text-sm text-muted-foreground">1,543</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Smart Contract Analytics</CardTitle>
            <CardDescription>Contract deployment and execution statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 border rounded-lg">
                <FileText className="h-8 w-8 mx-auto mb-2 text-ubuntu-blue" />
                <div className="text-2xl font-bold">1,456</div>
                <div className="text-sm text-muted-foreground">Active Contracts</div>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-ubuntu-orange" />
                <div className="text-2xl font-bold">98.7%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Consent Management</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">856</span>
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Health Record Access</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">432</span>
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Document Verification</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">123</span>
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Research Agreements</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">45</span>
                  <Clock className="h-3 w-3 text-yellow-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance & Security Audit */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance & Security Audit</CardTitle>
          <CardDescription>Regulatory compliance status and security assessment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Data Protection Compliance</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>GDPR Compliance</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>FHIR Standards</span>
                    <span>98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AU Data Regulations</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Security Assessment</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Encryption Level</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    AES-256
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Access Control</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Multi-Factor
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Audit Trail</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Complete
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Penetration Test</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Scheduled
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Network Security</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Node Security Score</span>
                    <span>97.5%</span>
                  </div>
                  <Progress value={97.5} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Consensus Security</span>
                    <span>99.2%</span>
                  </div>
                  <Progress value={99.2} className="h-2" />
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Last security audit: March 15, 2024
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
