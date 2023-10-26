import React, { useEffect, useState } from 'react';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../services/weatherService';
import { WeatherData } from './weatherTypes';
import { useNavigate } from 'react-router';
import { logoutSuccess } from '../../redux/slices/authSlice';
import { Info, LoadingText, TitleWrapper, WeatherContainer } from './styled';

const WeatherPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude)
            .then((data) => {
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

  const temperature = weatherData?.current.temp;
  const location = weatherData?.timezone;
  const weatherDescription = weatherData?.current?.weather[0]?.description;

  return (
    <WeatherContainer>
      {weatherData ? (
        <div>
          <TitleWrapper>Current Weather</TitleWrapper>
          {weatherData.current ? (
            <Info>Temperature: {temperature}°C</Info>
          ) : (
            <Info>Temperature data not available</Info>
          )}
          <Info>Location: {location}</Info>
          <Info>Weather: {weatherDescription}</Info>
        </div>
      ) : (
        <LoadingText>Loading weather data...</LoadingText>
      )}
      <Button type={ButtonType.Secondary} onClick={handleLogout}>
        Logout
      </Button>
    </WeatherContainer>
  );
};

export default WeatherPage;
