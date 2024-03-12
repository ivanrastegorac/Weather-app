import { Route, Navigate, Outlet, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useSelector } from 'react-redux';
import RootState from '../redux/types';

export const PrivateRoute = ({ element, ...rest }: any) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

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
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};
