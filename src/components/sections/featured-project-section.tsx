"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Activity, Users, MapPin } from 'lucide-react'

export function FeaturedProjectSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured Project: <span className="text-ubuntu-orange">HealthTrack Pro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A predictive, AI-powered health platform connecting communities with their own data, 
            empowering prevention over reaction, and supporting underserved populations with telehealth, 
            emergency response, and localized AI health insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: "Health Predictions", value: "50K+" },
                { icon: Activity, label: "Active Monitors", value: "15K+" },
                { icon: Users, label: "Communities", value: "356" },
                { icon: MapPin, label: "Countries", value: "15" }
              ].map((stat, index) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-4">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-ubuntu-orange" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AI-powered health prediction and early warning systems</li>
                <li>• IoMT wearable device integration for real-time monitoring</li>
                <li>• Community health worker management and training</li>
                <li>• Emergency response coordination with GPS tracking</li>
                <li>• Behavioral health insights and wellness recommendations</li>
                <li>• Telehealth integration for remote consultations</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Link href="/solutions/healthtrack-pro">
                <Button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                  Learn More
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline">
                  Get Early Access
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-ubuntu-orange/10 to-ubuntu-purple/10 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-16 w-16 mx-auto mb-4 text-ubuntu-orange" />
                    <div className="text-lg font-semibold">HealthTrack Pro Dashboard</div>
                    <div className="text-muted-foreground">Coming Soon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
