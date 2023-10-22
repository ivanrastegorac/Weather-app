import { Route, Routes } from 'react-router-dom';
import WeatherPage from '../weather/WeatherPage';

export const LoggedInRoutes = () => (
  <Routes>
    {/* Home page */}
    <Route path="/weather" element={<WeatherPage />} />
  </Routes>
);
