import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, ArrowLeft, Search, Heart } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ubuntu-orange/5 to-ubuntu-purple/5 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card>
          <CardContent className="p-12">
            {/* Ubuntu Logo/Icon */}
            <div className="w-20 h-20 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-ubuntu-orange" />
            </div>

            {/* 404 Message */}
            <div className="text-8xl font-bold text-ubuntu-orange/20 mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We couldn't find the page you're looking for. It might have been moved, 
              deleted, or the URL might be incorrect.
            </p>

            {/* Quick Links */}
            <div className="space-y-4 mb-8">
              <p className="font-medium">Here are some helpful links:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/">
                  <Button variant="outline" size="sm">
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    About
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" size="sm">
                    Solutions
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline" size="sm">
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Ubuntu Philosophy Note */}
            <div className="mt-8 pt-8 border-t text-sm text-muted-foreground">
              <p className="italic">
                "I am because we are" - Even when lost, we're here to help you find your way.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
