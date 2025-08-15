"use client"

import { useRouter } from 'next/router'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
  { code: 'rw', name: 'Ikinyarwanda', flag: '🇷🇼' },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const { locale, asPath } = router

  const handleLanguageChange = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale })
  }

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
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
