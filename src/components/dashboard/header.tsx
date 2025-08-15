"use client"

import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bell, Search, Menu } from 'lucide-react'

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search platforms, users, reports..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ubuntu-orange focus:border-transparent w-80"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* System Status */}
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            All Systems Operational
          </Badge>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-ubuntu-orange rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </Button>

          {/* User Menu */}
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8"
              }
            }}
          />
        </div>
      </div>
    </header>
  )
}
