import React, { useEffect, useState } from 'react';
import { ParagraphWrapper } from '../auth/styled';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../services/weatherService';

import { WeatherData } from './weatherTypes';
import { useNavigate } from 'react-router';
import { logoutSuccess } from '../../redux/slices/authSlice';

const WeatherPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // const search = async (e: any) => {
  //   if (e.key === 'Enter') {
  //     const data = await fetchWeather(query);

  //     setWeatherData(data);
  //     setQuery('');
  //     console.log(data);
  //   }
  // };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude)
            .then((data) => {
              // console.log('Weather Data:', data);
              setWeatherData(data as WeatherData);
            })

            .catch(() => setError(null));
        },

        () => setError('Geolocation is not available or denied.')
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('X-token');
    dispatch(logoutSuccess());
    navigate('/');
  };

  return (
    <div>
      <ParagraphWrapper>Welcome</ParagraphWrapper>
      <div>
        {weatherData ? (
          <div>
            <h2>Current Weather</h2>
            {weatherData.current ? (
              <p>Temperature: {weatherData.current.temp}°C</p>
            ) : (
              <p>Temperature data not available</p>
            )}
            <p>Location: {weatherData.timezone}</p>
            <p>Weather: {weatherData.current.toString()}</p>
          </div>
        ) : (
          <div>Loading weather data...</div>
        )}
      </div>
      <Button type={ButtonType.Secondary} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default WeatherPage;
