import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import WeatherPage from './components/weather/WeatherPage';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default RoutesComponent;
