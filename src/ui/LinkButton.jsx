import { Link, useNavigate, useLocation } from 'react-router-dom';

function LinkButton({ children, to, onClick, state, style }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  const className = `hover:text-[#DFD0B8] cursor-pointer transition-all duration-200 ${style}     ${
    isActive ? 'text-[#DFD0B8]' : ''
  }
`;

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className} onClick={onClick} state={state}>
      {children}
    </Link>
  );
}

export default LinkButton;
