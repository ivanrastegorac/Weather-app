import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import { PrivateRoute } from './auth/PrivateRoute';
import WeatherPage from './components/weather/WeatherPage';
import CityForecast from './components/weather/CityForecast';
import DetailedForecast from './components/weather/DetailedForecast';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      <PrivateRoute>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/:cityName" element={<CityForecast />} />
        <Route path="/:cityName/:day" element={<DetailedForecast />} />
      </PrivateRoute>
    </>
  );
};

export default AppRouter;
