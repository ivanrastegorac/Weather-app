import React from "react";
import { RemoveButton, SavedCity } from "./styled";
import { WeatherData } from "../../services/weatherService";
import { Link } from "react-router-dom";

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
      <Link to={`/${city.name}`}>{city.name}</Link>
      <p>{city.main.temp} K</p>
      <p>{city.weather[0].description}</p>
      {city.weather[0].icon && (
        <p>
          <img
            src={`${OPEN_WEATHER_URL}${city.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </p>
      )}
      <RemoveButton onClick={removeCity}>Remove</RemoveButton>
    </SavedCity>
  );
};

export default WeatherByCity;
