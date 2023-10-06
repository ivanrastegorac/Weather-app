import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSucces } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import { FormWrapper } from './styled';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginSuccess({ email }));
  };

  const handleLogout = () => {
    dispatch(logoutSucces());
  };

  return (
    <FormWrapper>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </FormWrapper>
  );
};

export default LoginForm;
