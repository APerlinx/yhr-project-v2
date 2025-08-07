import React from 'react'
import LinkButton from '../../../ui/LinkButton'

const FilterButton = React.memo(function FilterButton({
  active,
  onClick,
  children,
}) {
  return (
    <LinkButton
      onClick={onClick}
      btnStyle={active ? 'text-[#DFD0B8] underline underline-offset-2' : ''}
    >
      {children}
    </LinkButton>
  )
})

export default FilterButton
