// Import depedencies
import { Navigate, useRoutes } from 'react-router-dom';
import useToken from '~/utils/useToken';

// Import Layout
import DefaultLayout from '~/components/Layout/DefaultLayout';
import AuthLayout from '~/components/Layout/AuthLayout';
import EntityLayout from '~/components/Layout/EntityLayout';

// Import Route orders
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

// Import Pages
import SignIn from '~/pages/SignIn';
import CreateEntity from '~/pages/CreateEntity';
import Home from '~/pages/Home';
import Dashboard from '~/pages/Dashboard';
import SignUp from '~/pages/SignUp';
import UserList from '~/pages/UserList';
import Teams from '~/pages/Teams';
import ConfigureRoles from '~/pages/ConfigureRoles';
import Settings from '~/pages/Settings';

function Routing() {
  const { setToken } = useToken();

  const routes = useRoutes([
    {
      path: '/sign-in',
      element: (
        <AuthRoute>
          <AuthLayout>
            <SignIn setToken={setToken} />
          </AuthLayout>
        </AuthRoute>
      ),
    },
    {
      path: '/create-entity',
      element: (
        <AuthRoute>
          <EntityLayout>
            <CreateEntity />
          </EntityLayout>
        </AuthRoute>
      ),
    },
    {
      path: '/join-entity',
      element: (
        <AuthRoute>
          <AuthLayout>
            <SignIn />
          </AuthLayout>
        </AuthRoute>
      ),
    },
    {
      path: '/sign-up',
      element: (
        <AuthRoute>
          <AuthLayout>
            <SignUp setToken={setToken} />
          </AuthLayout>
        </AuthRoute>
      ),
    },
    {
      path: '/',
      element: (
        <PrivateRoute>
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </PrivateRoute>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        </PrivateRoute>
      ),
    },
    {
      path: '/settings',
      element: <Navigate to="/settings/user-list" />,
    },
    {
      path: '/settings',
      element: (
        <PrivateRoute>
          <DefaultLayout>
            <Settings />
          </DefaultLayout>
        </PrivateRoute>
      ),
      children: [
        {
          path: 'user-list',
          element: <UserList />,
        },
        {
          path: 'teams',
          element: <Teams />,
        },
        {
          path: 'config-roles',
          element: <ConfigureRoles />,
        },
      ],
    },
  ]);
  return <>{routes}</>;
}

export default Routing;
