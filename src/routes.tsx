import { Layout } from './components/Layout';
import { LoggedInRoutes } from './components/auth/LoggedInRoutes';
import { LoggedOutRoutes } from './components/auth/LoggedOutRoutes';
import { useSelector } from 'react-redux';
import { AuthState } from './redux/slices/authSlice';

const AppRouter = () => {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.isAuthenticated
  );
  return (
    <Layout>
      {isAuthenticated ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </Layout>
  );
};

export default AppRouter;
