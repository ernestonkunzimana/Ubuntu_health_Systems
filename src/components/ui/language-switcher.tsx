"use client"

import { useRouter, usePathname } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { Globe } from 'lucide-react'
import { useState } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
  { code: 'rw', name: 'Ikinyarwanda', flag: '🇷🇼' },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState('en')

  const handleLanguageChange = (newLocale: string) => {
    setCurrentLocale(newLocale)
    // For App Router, we would need to implement i18n differently
    // For now, just store preference in localStorage
    localStorage.setItem('preferred-language', newLocale)
    // In a full implementation, this would trigger a language change
  }

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger 
        className="w-auto min-w-[120px] h-10 border-0 focus:ring-0"
        aria-label="Select language"
      >
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
