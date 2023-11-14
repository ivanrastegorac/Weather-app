import React from "react";
import { RemoveButton, SavedCities, SavedCity } from "./styled";
import { WeatherData } from "../../services/weatherService";

interface WeatherByCityProps {
  savedCities: WeatherData[];
  setSavedCities: React.Dispatch<React.SetStateAction<WeatherData[]>>;
}

const WeatherByCity: React.FC<WeatherByCityProps> = ({
  savedCities,
  setSavedCities,
}) => {
  const removeCity = (index: number) => {
    const updatedCities = savedCities.filter((_, i) => i !== index);
    setSavedCities(updatedCities);
  };

  const OPEN_WEATHER_URL = "https://openweathermap.org/img/w/";

  return (
    <SavedCities>
      {savedCities.map((cityData, index) => (
        <SavedCity key={index}>
          <h2>{cityData.name}</h2>
          <p> {cityData.main.temp} K</p>
          <p>{cityData.weather[0].description}</p>
          {cityData.weather[0].icon && (
            <p>
              <img
                src={`${OPEN_WEATHER_URL}${cityData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </p>
          )}
          <RemoveButton onClick={() => removeCity(index)}>Remove</RemoveButton>
        </SavedCity>
      ))}
    </SavedCities>
  );
};

export default WeatherByCity;
