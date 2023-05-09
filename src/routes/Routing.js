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
import Settings from '~/pages/Settings';
import SignUp from '~/pages/SignUp';

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
            <CreateEntity setToken={setToken} />
          </EntityLayout>
        </AuthRoute>
      ),
    },
    {
      path: '/join-entity',
      element: (
        <AuthRoute>
          <AuthLayout>
            <SignIn setToken={setToken} />
          </AuthLayout>
        </AuthRoute>
      ),
    },
    {
      path: '/sign-up',
      element: (
        <AuthRoute>
          <AuthLayout>
            <SignUp />
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
      children: [
        {
          path: 'user-list',
          element: (
            <PrivateRoute>
              <DefaultLayout>
                <Settings />
              </DefaultLayout>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <>{routes}</>;
}

export default Routing;
