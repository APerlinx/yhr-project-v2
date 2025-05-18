import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('lang')
    return savedLang === 'en' || savedLang === 'he' ? savedLang : 'he'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
