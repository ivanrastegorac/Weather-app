import React, { useEffect, useState } from 'react';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../services/weatherService';
import { WeatherData } from './weatherTypes';
import { useNavigate } from 'react-router';
import { logoutSuccess } from '../../redux/slices/authSlice';
import { TitleWrapper, WeatherWrapper } from './styled';

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

  const temperature = weatherData?.current.temp;
  const location = weatherData?.timezone;
  const weatherDescription = weatherData?.current?.weather[0]?.description;

  return (
    <WeatherWrapper>
      <div>
        {weatherData ? (
          <div>
            <TitleWrapper>Current Weather</TitleWrapper>
            {weatherData.current ? (
              <p>Temperature: {temperature}°C</p>
            ) : (
              <p>Temperature data not available</p>
            )}
            <p>Location: {location}</p>
            <p>Weather: {weatherDescription}</p>
          </div>
        ) : (
          <div>Loading weather data...</div>
        )}
      </div>
      <Button type={ButtonType.Secondary} onClick={handleLogout}>
        Logout
      </Button>
    </WeatherWrapper>
  );
};

export default WeatherPage;
