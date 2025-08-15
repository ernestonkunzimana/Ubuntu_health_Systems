"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { 
  Menu, 
  X, 
  Globe,
  ChevronDown,
  ExternalLink,
  User,
  Settings,
  LogOut
} from 'lucide-react'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { name: 'HealthTrack Pro', href: '/solutions/healthtrack-pro' },
      { name: 'SafeChain', href: '/solutions/safechain' },
      { name: 'UbuntuXR', href: '/solutions/ubuntu-xr' },
      { name: 'UbuntuAI Toolkit', href: '/solutions/ubuntu-ai' },
      { name: 'Data Commons', href: '/solutions/data-commons' },
    ]
  },
  {
    name: 'Impact',
    href: '/impact',
  },
  {
    name: 'Join Us',
    href: '/join',
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { isSignedIn, user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative">
              <Globe className="h-8 w-8 text-ubuntu-orange transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full bg-ubuntu-orange/20 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-ubuntu-orange to-ubuntu-purple bg-clip-text text-transparent">
                Ubuntu Intelligence
              </span>
              <div className="text-xs text-muted-foreground hidden sm:block">
                Technology With Purpose
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-sm font-medium hover:text-ubuntu-orange transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm hover:bg-muted hover:text-ubuntu-orange transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-ubuntu-orange",
                      pathname === item.href ? "text-ubuntu-orange" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            
            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                {user?.publicMetadata?.role === 'ADMIN' && (
                  <Link href="/admin">
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Admin
                    </Button>
                  </Link>
                )}
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8"
                    }
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pb-6 border-t border-border pt-6"
            >
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="font-medium text-sm text-foreground">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-muted-foreground hover:text-ubuntu-orange transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block text-sm font-medium transition-colors hover:text-ubuntu-orange",
                          pathname === item.href ? "text-ubuntu-orange" : "text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="pt-4 border-t border-border space-y-3">
                  {isSignedIn ? (
                    <div className="space-y-2">
                      {user?.publicMetadata?.role === 'ADMIN' && (
                        <Link 
                          href="/admin"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Button variant="outline" className="w-full justify-start">
                            <Settings className="h-4 w-4 mr-2" />
                            Admin Dashboard
                          </Button>
                        </Link>
                      )}
                      <Button variant="outline" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <SignInButton mode="modal">
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                          Get Started
                        </Button>
                      </SignUpButton>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
