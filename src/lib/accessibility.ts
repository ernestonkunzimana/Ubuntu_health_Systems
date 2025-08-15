/**
 * WCAG 2.2 Accessibility Utilities
 * Provides utilities for ensuring WCAG 2.2 Level AA compliance
 */

// Color contrast checker (WCAG 2.2 Level AA requires 4.5:1 for normal text, 3:1 for large text)
export function getContrastRatio(hex1: string, hex2: string): number {
  const getLuminance = (hex: string): number => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  
  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// ARIA utilities
export const ariaLabels = {
  navigation: 'Main navigation',
  mobileMenu: 'Mobile menu',
  skipToContent: 'Skip to main content',
  toggleTheme: 'Toggle dark/light theme',
  openMenu: 'Open navigation menu',
  closeMenu: 'Close navigation menu',
  searchForm: 'Search form',
  contactForm: 'Contact form',
  applicationForm: 'Application form',
  socialLinks: 'Social media links',
  footerNavigation: 'Footer navigation',
  breadcrumb: 'Breadcrumb navigation',
  pagination: 'Pagination navigation',
  tableSort: 'Sort table by column',
  expandSection: 'Expand section',
  collapseSection: 'Collapse section',
  loadMoreContent: 'Load more content',
  currentPage: 'Current page',
  pageOf: 'Page {current} of {total}',
} as const;

// Focus management utilities
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      element.setAttribute('tabindex', '-1');
      element.focus();
    }
  });
}

// Screen reader announcements
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Keyboard navigation helpers
export const keyboardNavigation = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
} as const;

// Motion preference detection
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// High contrast mode detection
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

// Text size utilities for responsive design
export const textSizes = {
  'text-xs': '0.75rem',   // 12px
  'text-sm': '0.875rem',  // 14px
  'text-base': '1rem',    // 16px (minimum for body text)
  'text-lg': '1.125rem',  // 18px (large text threshold)
  'text-xl': '1.25rem',   // 20px
  'text-2xl': '1.5rem',   // 24px
  'text-3xl': '1.875rem', // 30px
  'text-4xl': '2.25rem',  // 36px
} as const;

// Form validation helpers
export function getFieldError(fieldName: string, errors: Record<string, any>): string | undefined {
  return errors[fieldName]?.message;
}

export function hasFieldError(fieldName: string, errors: Record<string, any>): boolean {
  return !!errors[fieldName];
}

// Touch target size checker (minimum 44x44px for WCAG 2.2)
export function isTouchTargetAccessible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.width >= 44 && rect.height >= 44;
}
