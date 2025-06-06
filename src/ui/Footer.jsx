import FacebookLink from './FacebookLink'
import LinkButton from './LinkButton'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations/translations'

function Footer() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <div className="flex items-center justify-between p-5">
      <div className="cursor-default ">
        <h1 className="text-lg leading-tight">
          Herman Architects Ltd
          <p className="text-center text-xs">
            &copy;{new Date().getFullYear()}, All rights reserved.
          </p>
        </h1>
        <span className="text-xs sm:hidden">
          Website & Design by
          <a href="https://github.com/APerlinx"> Alon Perlin</a>
        </span>
      </div>
      <span className="my-4 hidden text-xs sm:block">
        Website & Design by
        <a href="https://github.com/APerlinx"> Alon Perlin</a>
      </span>
      {/*Footer Tool bar*/}
      <div className="flex flex-col flex-wrap items-center justify-start gap-1 text-base sm:flex-row sm:gap-10 sm:text-lg">
        <div className="block sm:hidden">
          <FacebookLink type="primary" size={24} />
        </div>
        <div className="hidden sm:block">
          <FacebookLink type="primary" size={24} />
        </div>
        <LinkButton to="/contact">{translations.contact[lang]}</LinkButton>
        {/* English button */}
        <button
          onClick={() => {
            toggleLanguage()
          }}
        >
          {translations.languageToggle[lang]}
        </button>
      </div>
    </div>
  )
}

export default Footer
