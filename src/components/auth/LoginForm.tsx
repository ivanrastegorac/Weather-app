import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSucces } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import { FormWrapper, ParagraphWrapper } from './styled';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
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

  const passwordValidation = (password: string) => {
    const lengthRegex = /.{8,}/;
    const capitalLetterRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    console.log('Length Test:', lengthRegex.test(password));
    console.log('Capital Letter Test:', capitalLetterRegex.test(password));
    console.log('Digit Test:', digitRegex.test(password));
    console.log(
      'Special Character Test:',
      specialCharacterRegex.test(password)
    );

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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={() => setIsPasswordValid(passwordValidation(password))}
          />
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
