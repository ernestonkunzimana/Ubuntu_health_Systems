import { PrismaClient, UserRole, ProjectStatus, ApplicationStatus, ContactType, MessageStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'nkernest666@gmail.com' },
    update: {},
    create: {
      clerkId: 'seed_admin_clerk_id',
      email: 'nkernest666@gmail.com',
      firstName: 'Ernest',
      lastName: 'Nkunzimana',
      role: UserRole.ADMIN,
    },
  })

  // Create core projects/solutions
  const projects = [
    {
      title: 'HealthTrack Pro',
      slug: 'healthtrack-pro',
      summary: 'AI-powered health platform with predictive analytics, IoT wearables, community health networks, and telehealth integration.',
      content: 'HealthTrack Pro is our flagship AI-driven community health prediction and monitoring system. It combines machine learning algorithms with IoMT devices to provide early health warnings, track vital signs, and connect communities with healthcare providers. The platform supports emergency response, behavioral health insights, and personalized wellness recommendations.',
      status: ProjectStatus.ACTIVE,
      featured: true,
      priority: 1,
      category: 'Healthcare',
      tags: ['AI', 'Healthcare', 'IoT', 'Predictive Analytics'],
      authorId: adminUser.id,
    },
    {
      title: 'SafeChain',
      slug: 'safechain',
      summary: 'Blockchain-powered digital ID and consent management system for secure healthcare, social services, and data access.',
      content: 'SafeChain is our decentralized identity and consent management platform built on blockchain technology. It provides secure, user-controlled digital identities, smart contract-based consent management, and tamper-proof health record access. The system ensures data sovereignty while enabling secure sharing for research and healthcare.',
      status: ProjectStatus.ACTIVE,
      featured: true,
      priority: 2,
      category: 'Blockchain',
      tags: ['Blockchain', 'Identity', 'Security', 'Consent Management'],
      authorId: adminUser.id,
    },
    {
      title: 'UbuntuXR',
      slug: 'ubuntu-xr',
      summary: 'Mixed-reality education and mental wellness for underserved communities using low-cost XR headsets and local language support.',
      content: 'UbuntuXR brings immersive learning and therapeutic experiences to underserved communities through extended reality technology. The platform offers VR-based health education, mental wellness sessions, and skills training optimized for low-connectivity environments with multi-language support.',
      status: ProjectStatus.UPCOMING,
      featured: true,
      priority: 3,
      category: 'XR/Education',
      tags: ['XR', 'VR', 'Education', 'Mental Health'],
      authorId: adminUser.id,
    },
    {
      title: 'UbuntuAI Toolkit',
      slug: 'ubuntu-ai',
      summary: 'Modular AI tools trained on African data for health, education, agriculture, and policy applications.',
      content: 'The UbuntuAI Toolkit provides ethics-by-design artificial intelligence tools specifically trained on African datasets. It includes bias-audited models for health prediction, agricultural insights, educational content, and policy analysis, all designed with community ownership and transparency.',
      status: ProjectStatus.ACTIVE,
      featured: true,
      priority: 4,
      category: 'AI/ML',
      tags: ['AI', 'Machine Learning', 'Ethics', 'Community'],
      authorId: adminUser.id,
    },
    {
      title: 'Data Commons',
      slug: 'data-commons',
      summary: 'Secure, consent-first data marketplace for research and innovation with community revenue sharing.',
      content: 'The Ubuntu Data Commons is an ethical data marketplace where communities can securely share anonymized data for research and development. The platform ensures GDPR compliance, provides fair compensation to data contributors, and maintains transparency in data usage.',
      status: ProjectStatus.ACTIVE,
      featured: false,
      priority: 5,
      category: 'Data',
      tags: ['Data Marketplace', 'Privacy', 'Research', 'Revenue Sharing'],
      authorId: adminUser.id,
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    })
  }

  // Create sample impact metrics
  const impactMetrics = [
    { name: 'active_users', value: 125847, unit: 'users', description: 'Total active platform users', category: 'engagement' },
    { name: 'health_predictions', value: 50234, unit: 'predictions', description: 'AI health predictions made', category: 'health' },
    { name: 'communities_served', value: 356, unit: 'communities', description: 'Communities across Africa served', category: 'reach' },
    { name: 'emergency_responses', value: 1247, unit: 'responses', description: 'Emergency health responses coordinated', category: 'health' },
    { name: 'data_transactions', value: 89234, unit: 'transactions', description: 'Secure blockchain data transactions', category: 'security' },
    { name: 'countries_active', value: 15, unit: 'countries', description: 'African countries with active users', category: 'reach' },
    { name: 'prediction_accuracy', value: 94.2, unit: 'percent', description: 'AI health prediction accuracy', category: 'performance' },
    { name: 'response_time', value: 4.2, unit: 'minutes', description: 'Average emergency response time', category: 'performance' },
  ]

  for (const metric of impactMetrics) {
    await prisma.impactMetric.upsert({
      where: { name: metric.name },
      update: { value: metric.value },
      create: metric,
    })
  }

  // Create default settings
  const settings = [
    { key: 'site_title', value: 'Ubuntu Intelligence', type: 'STRING', description: 'Website title' },
    { key: 'site_description', value: 'Building Ethical, Predictive, and Human-Centered Technologies from Africa to the World', type: 'STRING', description: 'Website description' },
    { key: 'contact_email', value: 'nkernest666@gmail.com', type: 'EMAIL', description: 'Primary contact email' },
    { key: 'enable_registrations', value: 'true', type: 'BOOLEAN', description: 'Allow new user registrations' },
    { key: 'maintenance_mode', value: 'false', type: 'BOOLEAN', description: 'Enable maintenance mode' },
    { key: 'max_applications_per_day', value: '100', type: 'NUMBER', description: 'Maximum applications per day' },
  ]

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    })
  }

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'Introducing Ubuntu Intelligence: Technology With Purpose',
      slug: 'introducing-ubuntu-intelligence',
      excerpt: 'Our mission to build ethical, AI-driven, inclusive solutions for Africa and the world.',
      content: 'Today we launch Ubuntu Intelligence with a simple but powerful mission: to build life-first technologies that leave the world better than we found it. Our platform combines advanced AI, blockchain, IoT, and XR technologies with Ubuntu philosophy - "I am because we are."',
      published: true,
      featured: true,
      category: 'Announcement',
      tags: ['Launch', 'Mission', 'Ubuntu Philosophy'],
      authorId: adminUser.id,
      publishedAt: new Date(),
    },
    {
      title: 'HealthTrack Pro: Democratizing AI Health Predictions',
      slug: 'healthtrack-pro-democratizing-ai-health',
      excerpt: 'How our AI platform is bringing predictive healthcare to underserved communities.',
      content: 'HealthTrack Pro represents a new paradigm in community health management. By combining IoMT devices with locally-trained AI models, we are making sophisticated health predictions accessible to communities that have been traditionally underserved by technology.',
      published: true,
      featured: false,
      category: 'Product',
      tags: ['HealthTrack Pro', 'AI', 'Healthcare Access'],
      authorId: adminUser.id,
      publishedAt: new Date(),
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
