import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSucces } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import { FormLabel, FormWrapper, ParagraphWrapper } from './styled';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (passwordValidation(password)) {
      dispatch(loginSuccess({ email }));
      setErrorMessage(null);
    } else {
      setErrorMessage('Invalid password!');
    }
  };

  const handleLogout = () => {
    dispatch(logoutSucces());
  };

  const passwordValidation = (password: string) => {
    const lengthRegex = /.{8,}/;
    const capitalLetterRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    return (
      lengthRegex.test(password) &&
      capitalLetterRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharacterRegex.test(password)
    );
  };

  return (
    <FormWrapper>
      {isAuthenticated ? (
        <div>
          <ParagraphWrapper>Welcome, {email}</ParagraphWrapper>
          <Button type={ButtonType.Secondary} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <div className="input-container">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '5px' }}
            />
          </div>
          <div className="input-container">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              style={{ marginTop: '5px' }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={() => setIsPasswordValid(passwordValidation(password))}
            />
          </div>

          {errorMessage && (
            <div style={{ color: 'red', padding: '5px' }}>{errorMessage}</div>
          )}
          {!isPasswordValid && password && (
            <div style={{ color: 'black', padding: '5px' }}>
              *Password must contain 8 characters, 1 capital letter, 1 number,
              and 1 special character.
            </div>
          )}
          <div style={{ textAlign: 'center' }}>
            <Button
              type={ButtonType.Primary}
              onClick={handleLogin}
              disabled={!passwordValidation}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </FormWrapper>
  );
};

export default LoginForm;
