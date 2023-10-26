import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import RootState from '../../redux/types';
import { Layout } from '../Layout';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <div>
      {isAuthenticated ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default ProtectedRoute;
