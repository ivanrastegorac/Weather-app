import React from "react";
import {
  CurrentWeatherStatus,
  FeelsLike,
  HighLowContainer,
  Humidity,
  InfoWrapper,
  Pressure,
  SaveButton,
  SearchedWeatherWrapper,
  StyledCityTitle,
  Temp,
  Temperature,
  WeatherDescription,
  WeatherDetailLabel,
  WeatherDetails,
  WeatherIcon,
  WeatherInfoWrapper,
  Wind,
} from "./styled";
import { WeatherData } from "../../services/weatherService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faTachometerAlt,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

interface WeatherInfoProps {
  weatherData: WeatherData;
  saveCurrentCity: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  weatherData,
  saveCurrentCity,
}) => {
  const OPEN_WEATHER_URL = "https://openweathermap.org/img/w/";

  return (
    <SearchedWeatherWrapper>
      <SaveButton onClick={saveCurrentCity}>Save City</SaveButton>
      <WeatherInfoWrapper>
        <StyledCityTitle>{weatherData.name}</StyledCityTitle>
        <CurrentWeatherStatus>
          <WeatherIcon>
            {weatherData.weather[0].icon && (
              <p>
                <img
                  src={`${OPEN_WEATHER_URL}${weatherData.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
              </p>
            )}
          </WeatherIcon>
          <InfoWrapper>
            <Temperature>{weatherData.main.temp}°C</Temperature>
          </InfoWrapper>
        </CurrentWeatherStatus>
        <WeatherDescription>
          {weatherData.weather[0].description}
        </WeatherDescription>
      </WeatherInfoWrapper>
      <WeatherDetails>
        <FeelsLike>
          Feels Like
          {weatherData.main.feels_like}°C
        </FeelsLike>
        <HighLowContainer>
          <Temp>
            <FontAwesomeIcon icon={faArrowUp} />
            {weatherData.main.temp_max}°C
          </Temp>
          <Temp>
            <FontAwesomeIcon icon={faArrowDown} />
            {weatherData.main.temp_min}°C
          </Temp>
        </HighLowContainer>

        <Humidity>
          <FontAwesomeIcon icon={faTint} />
          <WeatherDetailLabel>Humidity</WeatherDetailLabel>
          {weatherData.main.humidity}%
        </Humidity>
        <Wind>
          <FontAwesomeIcon icon={faWind} />
          <WeatherDetailLabel>Wind </WeatherDetailLabel>
          {weatherData.wind.speed} m/s
        </Wind>
        <Pressure>
          <FontAwesomeIcon icon={faTachometerAlt} />
          <WeatherDetailLabel>Pressure</WeatherDetailLabel>
          {weatherData.main.pressure} hPa
        </Pressure>
      </WeatherDetails>
    </SearchedWeatherWrapper>
  );
};

export default WeatherInfo;
