import LinkButton from '../../../ui/LinkButton'

function FilterButton({ active, onClick, children }) {
  return (
    <LinkButton onClick={onClick} btnStyle={active ? 'text-[#DFD0B8]' : ''}>
      {children}
    </LinkButton>
  )
}

export default FilterButton
