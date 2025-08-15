"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function ImpactMetrics() {
  const sdgMetrics = [
    {
      goal: "SDG 3: Good Health",
      progress: 75,
      description: "25% faster chronic disease diagnosis",
      color: "bg-ubuntu-green"
    },
    {
      goal: "SDG 4: Quality Education", 
      progress: 60,
      description: "40% increase in digital health engagement",
      color: "bg-ubuntu-blue"
    },
    {
      goal: "SDG 9: Innovation",
      progress: 85,
      description: "10+ research partnerships established",
      color: "bg-ubuntu-purple"
    },
    {
      goal: "SDG 10: Reduced Inequalities",
      progress: 70,
      description: "Multi-language accessibility achieved",
      color: "bg-ubuntu-orange"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Impact on UN SDGs</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Measurable progress toward achieving United Nations Sustainable Development Goals
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {sdgMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{metric.goal}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{metric.progress}%</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
