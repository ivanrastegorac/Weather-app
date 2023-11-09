import React, { useEffect, useState } from 'react';
import { LocalWeatherData } from './weatherTypes';
import { fetchLocalWeather } from '../../services/weatherService';
import { Info, TitleWrapper } from './styled';

const CurrentWeather: React.FC = () => {

    const [localWeatherData, setLocalWeatherData] = useState<LocalWeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              fetchLocalWeather(latitude, longitude)
                .then((data) => {
                  setLocalWeatherData(data as LocalWeatherData);
                })
                .catch(() => setError(null));
            },
            () => setError('Geolocation is not available or denied.')
          );
        } else {
          setError('Geolocation is not supported by your browser.');
        }
    }, []);

    if (!localWeatherData) {
        return null; 
    }

    const temperature = localWeatherData?.current.clouds;
    const location = localWeatherData?.timezone;
    const weatherDescription = localWeatherData?.current?.weather[0]?.description;

    return (
        <div>
            <TitleWrapper>Current Weather</TitleWrapper>
            <Info>{location}</Info>
            {localWeatherData?.current ? (
                <Info>{temperature}°C</Info>
            ) : (
                <Info>Temperature data not available</Info>
            )}
            <Info>{weatherDescription}</Info>
            <Info>
                {localWeatherData.current.weather[0].icon && (
                    <p>
                        <img
                            src={`https://openweathermap.org/img/w/${localWeatherData.current.weather[0].icon}.png`}
                            alt="Local Weather Icon"
                        />
                    </p>
                )}
            </Info>
            
        </div>
    );
};

export default CurrentWeather;
