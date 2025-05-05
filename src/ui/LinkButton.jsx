import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to, onClick }) {
  const navigate = useNavigate();
  const className =
    ' hover:text-yellow-500 cursor-pointer transition-all duration-200 text-black';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default LinkButton;
