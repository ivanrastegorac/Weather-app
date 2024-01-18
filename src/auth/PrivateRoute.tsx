import { Route, Navigate, Outlet, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const PrivateRoute = ({ element, ...rest }: any) => {
  const isAuthenticated = localStorage.getItem('X-token') !== null;

  return (
    <Routes>
      <Route
        {...rest}
        element={
          isAuthenticated ? (
            <Layout>
              <Outlet />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};
