import LinkButton from '../../../ui/LinkButton'
import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations/translations'

function ProjectsFilter({ onFilterChange, currentFilter }) {
  const { lang } = useLanguage()

  return (
    <div dir={`${lang === 'he' ? 'rtl' : 'ltr'}`}>
      <div className="flex h-fit w-full items-center justify-center gap-6 p-10 text-base sm:text-lg md:text-xl">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <polygon points="3 4 21 4 14 13 14 20 10 20 10 13 3 4" />
          </svg>
        </div>

        <LinkButton
          onClick={() => onFilterChange(false)}
          btnStyle={currentFilter === false ? 'text-[#DFD0B8]' : ''}
        >
          {translations.AllProjects[lang]}
        </LinkButton>
        <LinkButton
          onClick={() => onFilterChange(true)}
          btnStyle={currentFilter === true ? 'text-[#DFD0B8]' : ''}
        >
          {translations.residential[lang]}
        </LinkButton>
      </div>
    </div>
  )
}

export default ProjectsFilter
