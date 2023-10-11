import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import WeatherPage from './components/weather/WeatherPage';
import { Provider } from 'react-redux';
import store from './redux/store';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
  );
};

export default RoutesComponent;
