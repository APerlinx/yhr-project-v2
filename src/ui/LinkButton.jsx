import { useNavigate, useLocation, NavLink } from 'react-router-dom'

function LinkButton({ children, to, onClick, state, btnStyle }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === to
  console.log(to, 'to')
  console.log(location.pathname, 'pathname')
  console.log(isActive)

  const className = `hover:text-[#c09656] hover:underline underline-offset-2 cursor-pointer transition-all duration-200 ${btnStyle}     ${
    isActive ? ' text-[#c09656] underline underline-offset-2 ' : ''
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
