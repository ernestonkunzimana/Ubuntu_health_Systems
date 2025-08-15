"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Users, 
  Heart, 
  Shield, 
  Brain, 
  Globe, 
  Settings, 
  BarChart3,
  UserCheck,
  Database,
  Zap,
  FileText
} from 'lucide-react'

const navigation = [
  {
    name: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: 'System overview and metrics'
  },
  {
    name: 'HealthTrack Pro',
    href: '/dashboard/healthtrack',
    icon: Heart,
    description: 'Health prediction and monitoring'
  },
  {
    name: 'SafeChain',
    href: '/dashboard/safechain',
    icon: Shield,
    description: 'Identity and consent management'
  },
  {
    name: 'UbuntuXR',
    href: '/dashboard/ubuntuxr',
    icon: Brain,
    description: 'Immersive learning platform'
  },
  {
    name: 'AI/ML Engine',
    href: '/dashboard/ai-engine',
    icon: Zap,
    description: 'AI model management'
  },
  {
    name: 'Data Commons',
    href: '/dashboard/data-commons',
    icon: Database,
    description: 'Data marketplace'
  },
  {
    name: 'Community Hub',
    href: '/dashboard/community',
    icon: Users,
    description: 'Community management'
  },
  {
    name: 'User Management',
    href: '/dashboard/users',
    icon: UserCheck,
    description: 'User roles and permissions'
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
    description: 'Platform analytics'
  },
  {
    name: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
    description: 'Impact and compliance reports'
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    description: 'System configuration'
  }
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-ubuntu-orange to-ubuntu-purple rounded-lg flex items-center justify-center">
            <Globe className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900">Ubuntu Intelligence</div>
            <div className="text-xs text-gray-500">Admin Dashboard</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-auto p-3 text-left",
                  isActive && "bg-ubuntu-orange/10 text-ubuntu-orange hover:bg-ubuntu-orange/20"
                )}
              >
                <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{item.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                </div>
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Ubuntu Intelligence System v1.0
        </div>
      </div>
    </div>
  )
}
