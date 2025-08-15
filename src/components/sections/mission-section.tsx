"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Brain, Globe, Shield } from 'lucide-react'

export function MissionSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-ubuntu-orange">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We build life-first technologies. Our mission is to leave the world better than we found it, 
            using advanced, ethical, and inclusive innovation — from AI and IoT to Blockchain and Quantum Computing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: "Life-First",
              description: "Every technology decision prioritizes human wellbeing and dignity",
              color: "text-ubuntu-red"
            },
            {
              icon: Brain,
              title: "Ethical AI", 
              description: "Transparent, bias-free artificial intelligence that serves communities",
              color: "text-ubuntu-blue"
            },
            {
              icon: Globe,
              title: "Global Impact",
              description: "Solutions that scale from local communities to continental transformation",
              color: "text-ubuntu-green"
            },
            {
              icon: Shield,
              title: "Inclusive Design",
              description: "Technology accessible to all, regardless of ability, literacy, or connectivity",
              color: "text-ubuntu-purple"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
