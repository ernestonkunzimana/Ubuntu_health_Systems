import { Suspense } from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { MissionSection } from '@/components/sections/mission-section'
import { PhilosophySection } from '@/components/sections/philosophy-section'
import { FeaturedProjectSection } from '@/components/sections/featured-project-section'
import { ImpactMetricsSection } from '@/components/sections/impact-metrics-section'
import { SolutionsSection } from '@/components/sections/solutions-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/navigation/footer'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'Home | Technology With Purpose',
  description: 'Ubuntu Intelligence is a community-powered innovation platform creating ethical, AI-driven, inclusive solutions for Africa and the world.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <MissionSection />
        </Suspense>

        {/* Ubuntu Philosophy */}
        <PhilosophySection />

        {/* Featured Project: HealthTrack Pro */}
        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedProjectSection />
        </Suspense>

        {/* Impact Metrics */}
        <Suspense fallback={<LoadingSpinner />}>
          <ImpactMetricsSection />
        </Suspense>

        {/* Solutions Overview */}
        <Suspense fallback={<LoadingSpinner />}>
          <SolutionsSection />
        </Suspense>

        {/* Testimonials & Community Stories */}
        <TestimonialsSection />

        {/* Partners & Collaborators */}
        <PartnersSection />

        {/* Newsletter Signup */}
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}
