"use client"

import { Button } from './button'

export function SkipNavigation() {
  const skipToContent = () => {
    const main = document.getElementById('main-content')
    if (main) {
      main.focus()
      main.scrollIntoView()
    }
  }

  return (
    <Button
      onClick={skipToContent}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white"
      size="sm"
    >
      Skip to main content
    </Button>
  )
}
