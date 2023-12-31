import React, { useEffect, useState } from "react";
import { LocalWeatherData } from "./weatherTypes";
import { fetchLocalWeather } from "../../services/weatherService";
import {
  CurrentWeatherStatus,
  LocalWeatherWrapper,
  Info,
  InfoWrapper,
  StyledCityTitle,
  Temperature,
  TitleWrapper,
  WeatherDescription,
  WeatherIcon,
} from "./styled";

const CurrentWeather: React.FC = () => {
  const [localWeatherData, setLocalWeatherData] =
    useState<LocalWeatherData | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_error, setError] = useState<string | null>(null);

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
        () => setError("Geolocation is not available or denied.")
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  if (!localWeatherData) {
    return null;
  }

  const temperature = localWeatherData?.current.clouds;
  const location = localWeatherData?.timezone;
  const weatherDescription = localWeatherData?.current?.weather[0]?.description;
  const OPEN_WEATHER_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

  return (
    <LocalWeatherWrapper>
      <TitleWrapper>Current Weather</TitleWrapper>
      <StyledCityTitle>{location}</StyledCityTitle>
      <CurrentWeatherStatus>
        <WeatherIcon>
          {localWeatherData.current.weather[0].icon && (
            <p>
              <img
                src={`${OPEN_WEATHER_URL}${localWeatherData.current.weather[0].icon}.png`}
                alt="Local Weather Icon"
              />
            </p>
          )}
        </WeatherIcon>

        <InfoWrapper>
          {localWeatherData?.current ? (
            <Temperature>{temperature}°C</Temperature>
          ) : (
            <Info>Temperature data not available</Info>
          )}
        </InfoWrapper>
      </CurrentWeatherStatus>
      <WeatherDescription>{weatherDescription}</WeatherDescription>
    </LocalWeatherWrapper>
  );
};

export default CurrentWeather;
