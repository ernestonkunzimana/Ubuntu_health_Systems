module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'sw', 'rw'],
    localeDetection: true,
  },
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  
  // Namespace configuration
  ns: ['common', 'home', 'about', 'solutions', 'contact', 'join', 'admin'],
  defaultNS: 'common',
  
  // React configuration
  react: {
    useSuspense: false,
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em', 'span', 'a'],
  },
  
  // Interpolation
  interpolation: {
    escapeValue: false,
  },
  
  // Backend configuration for loading translations
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};
