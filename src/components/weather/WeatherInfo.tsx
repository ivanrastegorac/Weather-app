import React from "react";
import {
  CurrentWeatherStatus,
  FavoritesButton,
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
  faWind
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useWeatherContext } from "../../redux/weatherContext";

interface WeatherInfoProps {
  weatherData: WeatherData;
  saveCurrentCity: (city: WeatherData) => void;
  addToFavorites: (city: WeatherData) => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  weatherData,
  saveCurrentCity,
}) => {
  const { addToFavorites, isCityAlreadyInFavorites, favoriteCities } = useWeatherContext();
  const OPEN_WEATHER_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

  const handleAddToFavorites = () => {
    if (isCityAlreadyInFavorites(weatherData, favoriteCities)) {
      toast.warning("This city is already in favorites.");
    } else {
      if (favoriteCities.length >= 10) {
        toast.error("You can add maximum 10 cities in favorites.");
      } else {
        addToFavorites(weatherData);
        toast.success(`City successfully added to favorites`);
      }
    }
  };

  return (
    <SearchedWeatherWrapper>
        <FavoritesButton onClick={handleAddToFavorites}>Add to Favorites</FavoritesButton>
        <SaveButton onClick={() => saveCurrentCity(weatherData)}>Save City</SaveButton>
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
          <span>Feels Like</span>
          {weatherData.main.feels_like}°C
        </FeelsLike>
        <HighLowContainer>
          <Temp>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{weatherData.main.temp_max}°C</span>
          </Temp>
          {""}
          <Temp>
            <FontAwesomeIcon icon={faArrowDown} />
            <span>{weatherData.main.temp_min}°C</span>
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
