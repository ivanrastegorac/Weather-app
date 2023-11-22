import React from "react";
import { RemoveButton, SavedCity } from "./styled";
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
      <h2>{city.name}</h2>
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
