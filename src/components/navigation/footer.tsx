import Link from 'next/link'
import { Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-ubuntu-orange" />
              <span className="font-bold">Ubuntu Intelligence</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building ethical, predictive, and human-centered technologies from Africa to the world.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions/healthtrack-pro">HealthTrack Pro</Link></li>
              <li><Link href="/solutions/safechain">SafeChain</Link></li>
              <li><Link href="/solutions/ubuntu-xr">UbuntuXR</Link></li>
              <li><Link href="/solutions/ubuntu-ai">UbuntuAI</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>nkernest666@gmail.com</li>
              <li>+250 788 906 846</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Ubuntu Intelligence. All rights reserved. Built with Ubuntu philosophy.</p>
        </div>
      </div>
    </footer>
  )
}
