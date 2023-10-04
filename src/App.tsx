import React from 'react';
import LoginForm from './components/auth/LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <div>
      <h1>Weather app</h1>
      <LoginForm />
    </div>
  );
};

export default App;
