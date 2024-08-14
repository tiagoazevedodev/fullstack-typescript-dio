import { Link } from 'react-router-dom';
import { AppContext } from '../../components/AppContext/AppContext';

export const AccountInfo = () => {
  const { isLogged, name, user } = useContext(AppContext);

  return (
    <div>
      <h1 className='text-9xl'>Informações da conta</h1>
      <Link to="/account/7">
        
      </Link>
    </div>
  )
}