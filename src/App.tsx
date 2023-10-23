import React, { useEffect } from 'react';
import LoginForm from './components/auth/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Header from './components/ui/header/Header';
import { loginSuccess } from './redux/slices/authSlice';
import WeatherPage from './components/weather/WeatherPage';
import AppRouter from './routes';

function App() {
  return <AppRouter />;
}
export default App;
