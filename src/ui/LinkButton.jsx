import { useNavigate, useLocation, NavLink } from 'react-router-dom'

function LinkButton({ children, to, onClick, state, btnStyle }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === to

  const className = `hover:text-[#DFD0B8] cursor-pointer transition-all duration-200 ${btnStyle}     ${
    isActive ? 'text-[#DFD0B8]' : ''
  }
`

  if (to === '-1')
    return (
      /* Btn to -Go Back- */
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    )

  return (
    <NavLink to={to} className={className} onClick={onClick} state={state}>
      {children}
    </NavLink>
  )
}

export default LinkButton
