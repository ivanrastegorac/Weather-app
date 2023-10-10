import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSucces } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import {
  FormLabel,
  FormWrapper,
  LogInFormTitle,
  ParagraphWrapper,
} from './styled';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';
import { ErrorText, InputContainer } from '../ui/input/styled';
import { useNavigate } from 'react-router';
import WeatherPage from '../weather/WeatherPage';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (passwordValidation(password)) {
      dispatch(loginSuccess({ email }));
      navigate('/weather');
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
          <WeatherPage></WeatherPage>
        </div>
      ) : (
        <div>
          <LogInFormTitle>LOG IN TO SEE WEATHER FORECAST</LogInFormTitle>
          <InputContainer>
            <FormLabel htmlFor="email">EMAIL</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '5px' }}
            />
          </InputContainer>
          <InputContainer>
            <FormLabel htmlFor="password">PASSWORD</FormLabel>
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
          </InputContainer>
          <ErrorText>
            {errorMessage && (
              <div
                style={{
                  color: 'red',
                  padding: '5px',
                  fontFamily: 'sans-serif',
                }}
              >
                {errorMessage}
              </div>
            )}
            {!isPasswordValid && password && (
              <div
                style={{
                  color: '#09578b',
                  padding: '5px',
                  fontFamily: 'sans-serif',
                }}
              >
                Password must contain 8 characters, 1 capital letter, 1 number,
                and 1 special character.
              </div>
            )}
          </ErrorText>

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
