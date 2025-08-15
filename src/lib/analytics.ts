/**
 * Analytics and Performance Monitoring
 * Implements tracking for user behavior and performance metrics
 */

// Google Analytics 4 integration
export function initializeGA4(measurementId: string) {
  if (typeof window === 'undefined') return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Initialize gtag
  window.gtag = window.gtag || function() {
    (window.gtag.q = window.gtag.q || []).push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  })
}

// Track page views
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_title: title || document.title,
    page_location: url,
  })
}

// Track events
export function trackEvent(eventName: string, parameters: Record<string, any> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, {
    event_category: parameters.category || 'engagement',
    event_label: parameters.label,
    value: parameters.value,
    ...parameters,
  })
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean, errorMessage?: string) {
  trackEvent('form_submit', {
    category: 'forms',
    label: formName,
    success,
    error_message: errorMessage,
  })
}

// Track downloads
export function trackDownload(fileName: string, fileType: string) {
  trackEvent('file_download', {
    category: 'downloads',
    label: fileName,
    file_type: fileType,
  })
}

// Track search queries
export function trackSearch(query: string, resultsCount: number) {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  })
}

// Performance monitoring with Web Vitals
export function initializeWebVitals() {
  if (typeof window === 'undefined') return

  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  })
}

function onPerfEntry(metric: any) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', metric.name, {
    event_category: 'web_vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
  })
}

// User journey tracking
export class UserJourney {
  private static instance: UserJourney
  private journey: Array<{
    page: string
    timestamp: number
    duration?: number
  }> = []

  static getInstance() {
    if (!UserJourney.instance) {
      UserJourney.instance = new UserJourney()
    }
    return UserJourney.instance
  }

  trackPageVisit(page: string) {
    const now = Date.now()
    
    // Update duration for previous page
    if (this.journey.length > 0) {
      const previous = this.journey[this.journey.length - 1]
      previous.duration = now - previous.timestamp
    }

    // Add new page visit
    this.journey.push({
      page,
      timestamp: now,
    })

    // Keep only last 20 pages
    if (this.journey.length > 20) {
      this.journey = this.journey.slice(-20)
    }
  }

  getJourney() {
    return [...this.journey]
  }

  getSessionDuration() {
    if (this.journey.length === 0) return 0
    const first = this.journey[0]
    const last = this.journey[this.journey.length - 1]
    return last.timestamp - first.timestamp
  }
}

// A/B testing utilities
export class ABTest {
  private static tests: Map<string, any> = new Map()

  static defineTest(testId: string, variants: string[], traffic = 1.0) {
    if (typeof window === 'undefined') return

    const userVariant = this.getUserVariant(testId, variants, traffic)
    this.tests.set(testId, userVariant)

    // Track test assignment
    trackEvent('ab_test_assignment', {
      test_id: testId,
      variant: userVariant,
    })

    return userVariant
  }

  static getVariant(testId: string) {
    return this.tests.get(testId)
  }

  private static getUserVariant(testId: string, variants: string[], traffic: number) {
    // Use localStorage to ensure consistent assignment
    const storageKey = `ab_test_${testId}`
    const stored = localStorage.getItem(storageKey)
    
    if (stored && variants.includes(stored)) {
      return stored
    }

    // Check if user should be included in test
    if (Math.random() > traffic) {
      return 'control'
    }

    // Assign random variant
    const variant = variants[Math.floor(Math.random() * variants.length)]
    localStorage.setItem(storageKey, variant)
    
    return variant
  }

  static trackConversion(testId: string, goalName: string, value?: number) {
    const variant = this.getVariant(testId)
    if (!variant) return

    trackEvent('ab_test_conversion', {
      test_id: testId,
      variant,
      goal: goalName,
      value,
    })
  }
}

// Error tracking
export function trackError(error: Error, context?: Record<string, any>) {
  console.error('Application error:', error)

  trackEvent('exception', {
    description: error.message,
    fatal: false,
    stack: error.stack,
    context: JSON.stringify(context),
  })
}

// Scroll depth tracking
export function initializeScrollTracking() {
  if (typeof window === 'undefined') return

  let maxScrollPercentage = 0
  const trackingThresholds = [25, 50, 75, 90, 100]
  const trackedThresholds = new Set<number>()

  function handleScroll() {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercentage = Math.round((scrollTop / docHeight) * 100)

    if (scrollPercentage > maxScrollPercentage) {
      maxScrollPercentage = scrollPercentage

      trackingThresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          trackEvent('scroll_depth', {
            percentage: threshold,
          })
        }
      })
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

// Heatmap integration (for tools like Hotjar)
export function initializeHeatmap(hotjarId?: string) {
  if (typeof window === 'undefined' || !hotjarId) return

  ;(function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
    h.hj = h.hj || function() {
      (h.hj.q = h.hj.q || []).push(arguments)
    }
    h._hjSettings = { hjid: hotjarId, hjsv: 6 }
    a = o.getElementsByTagName('head')[0]
    r = o.createElement('script')
    r.async = 1
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
    a.appendChild(r)
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
}

// Customer support chat integration
export function initializeChatWidget(intercomAppId?: string) {
  if (typeof window === 'undefined' || !intercomAppId) return

  ;(function() {
    const w = window as any
    const ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', w.intercomSettings)
    } else {
      const d = document
      const i = function(...args: any[]) {
        i.c(args)
      }
      i.q = []
      i.c = function(args: any) {
        i.q.push(args)
      }
      w.Intercom = i
      const s = d.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://widget.intercom.io/widget/' + intercomAppId
      const x = d.getElementsByTagName('script')[0]
      x.parentNode?.insertBefore(s, x)
    }
  })()
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    Intercom: (...args: any[]) => void
  }
}
