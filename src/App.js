// Deps
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './routes';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import useToken from './utils/useToken';

// Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// Layouts
import DefaultLayout from './components/Layout/DefaultLayout';
import AuthLayout from './components/Layout/AuthLayout';
import AssignEntity from './pages/AssignEntity';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const { token, setToken } = useToken();
  const [entity, setEntity] = useState({ state: false, token: undefined });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/sign-in"
            element={
              token ? (
                <Navigate to="/" />
              ) : (
                <AuthLayout>
                  <SignIn setToken={setToken} setEntity={setEntity} />
                </AuthLayout>
              )
            }
          />
          <Route path="/assign-entity" element={<AssignEntity setToken={setToken} entity={entity} />} />
          <Route
            path="/sign-up"
            element={
              token ? (
                <Navigate to="/" />
              ) : (
                <AuthLayout>
                  <SignUp setEntity={setEntity} />
                </AuthLayout>
              )
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
                  <PrivateRoute entity={entity}>
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
