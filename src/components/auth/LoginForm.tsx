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
import { ErrorText, InfoText, InputContainer } from '../ui/input/styled';
import { useNavigate } from 'react-router';
import WeatherPage from '../weather/WeatherPage';
import { ButtonWrapper } from '../ui/button/styled';

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
    if (!passwordValidation(password)) {
      setErrorMessage('Invalid password!');
      return;
    }

    dispatch(loginSuccess({ email }));
    navigate('/weather');
    setErrorMessage(null);

    const currentDate = new Date().toISOString();
    const token = email + currentDate;

    localStorage.setItem('X-token', token);
  };

  const passwordValidation = (password: string) => {
    const passwordRegex =
      /^(?=.*.{8,})(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/;

    return passwordRegex.test(password);
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
            />
          </InputContainer>
          <InputContainer>
            <FormLabel htmlFor="password">PASSWORD</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={() => setIsPasswordValid(passwordValidation(password))}
            />
          </InputContainer>
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          {!isPasswordValid && password && (
            <InfoText>
              Password must contain 8 characters, 1 capital letter, 1 number,
              and 1 special character.
            </InfoText>
          )}

          <ButtonWrapper>
            <Button
              type={ButtonType.Primary}
              onClick={handleLogin}
              disabled={!passwordValidation}
            >
              Login
            </Button>
          </ButtonWrapper>
        </div>
      )}
    </FormWrapper>
  );
};

export default LoginForm;
