import React from 'react';
import LoginForm from './components/auth/LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Header from './components/ui/header/Header';

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <div>
      <Header title="Weather App" subtitle="Weather Forecast by Zoran Vakula" />
      <LoginForm />
    </div>
  );
};

export default App;
