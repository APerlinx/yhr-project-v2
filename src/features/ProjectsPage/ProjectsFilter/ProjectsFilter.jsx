import { useCallback } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import FilterIcon from '../../../ui/FilterIcon'
import FilterButton from './FilterButton'

function ProjectsFilter({ onFilterChange, currentFilter }) {
  const { lang } = useLanguage()

  // Only re-create the function if onFilterChange changes
  const handleAllClick = useCallback(() => {
    onFilterChange(false)
  }, [onFilterChange])

  const handleResidentialClick = useCallback(() => {
    onFilterChange(true)
  }, [onFilterChange])

  return (
    <div dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="flex h-fit w-full items-center justify-center gap-6 p-10 text-base sm:text-lg md:text-xl">
        <FilterIcon className="h-6 w-6" />

        <FilterButton active={currentFilter === false} onClick={handleAllClick}>
          כול הפרוייקטים
        </FilterButton>

        <FilterButton
          active={currentFilter === true}
          onClick={handleResidentialClick}
        >
          מגורים
        </FilterButton>
      </div>
    </div>
  )
}

export default ProjectsFilter
