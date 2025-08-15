"use client"

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, MapPin, Activity } from 'lucide-react'

export function PlatformStats() {
  const stats = [
    {
      title: "Active Users",
      value: "125,000+",
      change: "+12% this month",
      icon: Users,
      color: "text-ubuntu-green"
    },
    {
      title: "Health Predictions",
      value: "50,000+",
      change: "+25% accuracy",
      icon: Activity,
      color: "text-ubuntu-blue"
    },
    {
      title: "Communities Served",
      value: "350+",
      change: "Across 15 countries",
      icon: MapPin,
      color: "text-ubuntu-purple"
    },
    {
      title: "Lives Impacted",
      value: "500K+",
      change: "Growing daily",
      icon: TrendingUp,
      color: "text-ubuntu-orange"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.change}</div>
                <div className="text-sm font-medium mt-1">{stat.title}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
