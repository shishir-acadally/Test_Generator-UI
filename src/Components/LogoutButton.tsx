import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
    window.location.reload();
    
  };

  return (
    <button className='nav-link btn btn-light px-3' onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogOutButton;
