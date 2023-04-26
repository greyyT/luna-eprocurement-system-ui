import { Navigate } from 'react-router-dom';
import useToken from '~/utils/useToken';

function PrivateRoute({ children, entity }) {
  const token = useToken().token;

  if (entity) {
    return <Navigate to="/assign-entity" />;
  } else if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}

export default PrivateRoute;
