import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import FacebookLink from './FacebookLink'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations/translations'

function Header() {
  const { lang, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 flex h-40 w-full items-center justify-between px-2 uppercase sm:px-28 ${
        isScrolled
          ? 'bg-[#171717] bg-opacity-10 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="z-50">
        <Link to="/">
          <img
            src={
              'https://res.cloudinary.com/dayojijed/image/upload/v1746444960/logo_kmyo1d_white_lka5tp.svg'
            }
            alt="Website logo, link to home page."
            className="h-auto w-full"
            style={{ maxWidth: '180px' }}
            onClick={() => setIsMenuOpen(false)}
          />
        </Link>
      </div>

      {/* Mobile Burger Menu Icon */}
      <button
        aria-label={
          isMenuOpen
            ? lang === 'he'
              ? 'סגור תפריט ניווט'
              : 'Close navigation menu'
            : lang === 'he'
            ? 'פתח תפריט ניווט'
            : 'Open navigation menu'
        }
        className="z-50 flex flex-col items-center justify-center pb-2 pr-4 pt-2 focus:outline-none sm:pr-0"
        onClick={toggleMenu}
      >
        {/* Two Lines or X */}
        <div
          className={`relative  h-0.5 w-6 transition-all duration-300 ${
            isMenuOpen ? 'translate-y rotate-45 bg-[#171717]' : 'bg-[#f3f3f3]'
          }`}
        ></div>
        <div
          className={`relative mt-1 h-0.5 w-6 transition-all duration-300 ${
            isMenuOpen
              ? '-translate-y-1.5 -rotate-45 bg-[#171717]'
              : 'bg-[#f3f3f3]'
          }`}
        ></div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 top-0 h-screen w-full bg-[#f3f3f3] opacity-[0.8] shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="mt-64 flex flex-col items-center gap-4 space-y-8 py-4 text-2xl font-bold text-[#171717]">
          <LinkButton to="/about" onClick={toggleMenu}>
            {translations.about[lang]}
          </LinkButton>
          <LinkButton
            to="/projects"
            onClick={toggleMenu}
            state={{ filter: false }}
          >
            {translations.projects[lang]}
          </LinkButton>
          <LinkButton
            to="/projects"
            onClick={toggleMenu}
            state={{ filter: true }}
          >
            {translations.residential[lang]}
          </LinkButton>
          <LinkButton to="/contact" onClick={toggleMenu}>
            {translations.contact[lang]}
          </LinkButton>
          <button
            onClick={() => {
              toggleLanguage()
              setIsMenuOpen(false)
            }}
          >
            {translations.languageToggle[lang]}
          </button>
          <FacebookLink />
        </nav>
      </div>
    </header>
  )
}

export default Header
