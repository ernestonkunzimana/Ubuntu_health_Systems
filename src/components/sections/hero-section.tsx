"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Users, Heart, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-ubuntu-orange/5 via-ubuntu-purple/5 to-ubuntu-blue/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-ubuntu-orange/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ubuntu-purple/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                variant="secondary" 
                className="bg-ubuntu-orange/10 text-ubuntu-orange border-ubuntu-orange/20 hover:bg-ubuntu-orange/20 transition-colors"
              >
                🌍 Building from Africa to the World
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-ubuntu-orange via-ubuntu-purple to-ubuntu-blue bg-clip-text text-transparent">
                  Technology With Purpose.
                </span>
                <br />
                <span className="text-foreground">
                  Built for Humanity.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ubuntu Intelligence is a community-powered innovation platform creating 
                <span className="text-ubuntu-orange font-semibold"> ethical</span>, 
                <span className="text-ubuntu-purple font-semibold"> AI-driven</span>, 
                <span className="text-ubuntu-blue font-semibold"> inclusive solutions</span> for Africa and the world.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/join">
                <Button 
                  size="lg" 
                  className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Users className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Join the Movement
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-ubuntu-purple text-ubuntu-purple hover:bg-ubuntu-purple hover:text-white transition-all duration-300 group"
                >
                  <Zap className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Projects
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="ghost"
                  className="text-foreground hover:text-ubuntu-blue transition-colors group"
                >
                  <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-ubuntu-orange">125K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-ubuntu-purple">356</div>
                  <div className="text-sm text-muted-foreground">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-ubuntu-blue">15</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-ubuntu-green">94.2%</div>
                  <div className="text-sm text-muted-foreground">AI Accuracy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
