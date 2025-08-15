"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Handshake, Lightbulb } from 'lucide-react'

export function PhilosophySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Ubuntu <span className="text-ubuntu-orange">Philosophy</span>
            </h2>
            
            <div className="text-2xl md:text-3xl font-medium text-ubuntu-purple italic">
              "I am because we are."
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ubuntu Intelligence believes technology must reflect collective dignity, not exploitation. 
              We build solutions for all — abled and disabled, rich and poor, urban and rural. 
              Our technology is rooted in African Ubuntu philosophy, emphasizing community, 
              interconnectedness, and shared prosperity.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Community-Centered",
                  description: "Technology built with communities, not for them"
                },
                {
                  icon: Handshake,
                  title: "Collective Prosperity", 
                  description: "Solutions that benefit everyone, leaving no one behind"
                },
                {
                  icon: Lightbulb,
                  title: "Wisdom-Driven",
                  description: "Ancient wisdom guiding modern innovation"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-ubuntu-orange/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-ubuntu-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-ubuntu-orange/20 via-ubuntu-purple/20 to-ubuntu-blue/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 mx-auto relative"
                    >
                      <div className="absolute inset-0 rounded-full border-4 border-ubuntu-orange/30" />
                      <div className="absolute inset-2 rounded-full border-4 border-ubuntu-purple/30" />
                      <div className="absolute inset-4 rounded-full border-4 border-ubuntu-blue/30" />
                      <div className="absolute inset-6 rounded-full bg-ubuntu-green/20 flex items-center justify-center">
                        <Users className="h-8 w-8 text-ubuntu-green" />
                      </div>
                    </motion.div>
                    <div className="text-lg font-semibold">
                      Interconnected <br />
                      <span className="text-ubuntu-orange">Communities</span>
                    </div>
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
