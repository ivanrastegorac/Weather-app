import React from "react";
import {
  RemoveButton,
  SavedCity,
  SavedCityLink,
  TemperatureText,
  WeatherDescriptionText,
  WeatherIconImage,
} from "./styled";
import { WeatherData } from "../../services/weatherService";

interface WeatherByCityProps {
  city: WeatherData;
  setSavedCities: React.Dispatch<React.SetStateAction<WeatherData[]>>;
}

const WeatherByCity: React.FC<WeatherByCityProps> = ({
  city,
  setSavedCities,
}) => {
  const removeCity = () => {
    setSavedCities((prevCities) =>
      prevCities.filter((savedCity) => savedCity !== city)
    );
  };

  const OPEN_WEATHER_URL = "https://openweathermap.org/img/w/";

  return (
    <SavedCity>
      <SavedCityLink to={`/${city.name}`}>{city.name}</SavedCityLink>
      <TemperatureText>{city.main.temp} °C</TemperatureText>
      <WeatherDescriptionText>
        {city.weather[0].description}
      </WeatherDescriptionText>
      {city.weather[0].icon && (
        <WeatherIconImage
          src={`${OPEN_WEATHER_URL}${city.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      )}
      <RemoveButton onClick={removeCity}>Remove</RemoveButton>
    </SavedCity>
  );
};

export default WeatherByCity;
