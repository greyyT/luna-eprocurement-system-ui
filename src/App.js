// Deps
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './routes';
import useToken from './utils/useToken';
import PrivateRoute from './routes/PrivateRoute';
import AuthRoute from './routes/AuthRoute';

// Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// Layouts
import DefaultLayout from './components/Layout/DefaultLayout';
import AuthLayout from './components/Layout/AuthLayout';
import CreateEntity from './pages/CreateEntity';
import EntityLayout from './components/Layout/EntityLayout';
import JoinEntity from './pages/JoinEntity';

function App() {
  // eslint-disable-next-line
  const { setToken } = useToken();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/sign-in"
            element={
              <AuthRoute>
                <AuthLayout>
                  <SignIn setToken={setToken} />
                </AuthLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/create-entity"
            element={
              <AuthRoute>
                <EntityLayout>
                  <CreateEntity setToken={setToken} />
                </EntityLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/join-entity"
            element={
              <AuthRoute>
                <EntityLayout>
                  <JoinEntity setToken={setToken} />
                </EntityLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <AuthRoute>
                <AuthLayout>
                  <SignUp />
                </AuthLayout>
              </AuthRoute>
            }
          />
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
