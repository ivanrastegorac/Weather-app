import React, { useState } from "react";
import Button from "../ui/button/Button";
import { ButtonType } from "../ui/button/ButtonType";
import { WeatherData, fetchWeather } from "../../services/weatherService";
import {
  Info,
  SaveButton,
  SavedCities,
  SearchContainer,
  SearchInput,
  WeatherContainer,
} from "./styled";
import CurrentWeather from "./CurrentWeather";
import WeatherByCity from "./WeatherByCity";

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [savedCities, setSavedCities] = useState<WeatherData[]>([]);

  const handleSearch = async () => {
    if (city) {
      setLoading(true);
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setLoading(false);
        setCity("");
        setError(null);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    } else {
      setError("Please enter a city name.");
      setWeatherData(null);
    }
  };

  const isCityAlreadySaved = (city: WeatherData) => {
    return savedCities.some((savedCity) => savedCity.name === city.name);
  };

  const saveCurrentCity = () => {
    if (!weatherData) {
      return;
    }
    if (isCityAlreadySaved(weatherData)) {
      alert("This city is already saved.");
      return;
    }
    if (savedCities.length >= 10) {
      alert("You can save a maximum of 10 cities.");
      return;
    }
    setSavedCities([...savedCities, weatherData]);
  };

  const OPEN_WEATHER_URL = "https://openweathermap.org/img/w/";

  return (
    <WeatherContainer>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type={ButtonType.Search} onClick={handleSearch}>
          Search
        </Button>
      </SearchContainer>

      <CurrentWeather />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && weatherData.main ? (
        <Info>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {weatherData.weather[0].icon && (
            <p>
              <img
                src={`${OPEN_WEATHER_URL}${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </p>
          )}

          <SaveButton onClick={saveCurrentCity}>Save City</SaveButton>
        </Info>
      ) : null}

      <SavedCities>
        {savedCities.map((city, index) => (
          <WeatherByCity
            key={index}
            city={city}
            setSavedCities={setSavedCities}
          />
        ))}
      </SavedCities>
    </WeatherContainer>
  );
};

export default WeatherPage;
