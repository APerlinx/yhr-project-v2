import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations/translations'
import FilterIcon from '../../../ui/FilterIcon'
import FilterButton from './FilterButton'

function ProjectsFilter({ onFilterChange, currentFilter }) {
  const { lang } = useLanguage()

  return (
    <div dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="flex h-fit w-full items-center justify-center gap-6 p-10 text-base sm:text-lg md:text-xl">
        <FilterIcon className="h-6 w-6" />

        <FilterButton
          active={currentFilter === false}
          onClick={() => onFilterChange(false)}
        >
          {translations.AllProjects[lang]}
        </FilterButton>

        <FilterButton
          active={currentFilter === true}
          onClick={() => onFilterChange(true)}
        >
          {translations.residential[lang]}
        </FilterButton>
      </div>
    </div>
  )
}

export default ProjectsFilter
