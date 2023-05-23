import { Navigate } from 'react-router-dom';
import handleUserInfo from '~/utils/handleUserInfo';
import useData from '~/utils/useData';
import useToken from '~/utils/useToken';

function PrivateRoute({ children }) {
  const { token } = useToken();
  const { data, setData } = useData();

  const fetchUserInfo = async (token) => {
    const res = await handleUserInfo(token);
    console.log(res);
    if (res) {
      setData(res[0]);
    }
  };

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  if (!data) {
    fetchUserInfo(token);
  }

  if (data.legalEntityCode === null) {
    return <Navigate to="/create-entity" />;
  } else {
    return { children };
  }
}

export default PrivateRoute;
