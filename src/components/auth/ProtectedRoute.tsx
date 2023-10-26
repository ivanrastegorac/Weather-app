import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import RootState from '../../redux/types';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoute;
