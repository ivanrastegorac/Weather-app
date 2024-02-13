import React, { useState } from "react";
import Button from "../ui/button/Button";
import { ButtonType } from "../ui/button/ButtonType";
import {
  ErrorText,
  LoadingText,
  SavedCities,
  SearchContainer,
  SearchInput,
  WeatherContainer,
} from "./styled";
import CurrentWeather from "./CurrentWeather";
import WeatherByCity from "./WeatherByCity";
import WeatherInfo from "./WeatherInfo";
import { WeatherData, fetchWeather } from "../../services/weatherService";
import { useWeatherContext } from "../../redux/weatherContext";

const WeatherPage: React.FC = () => {
  const { currentCity, setWeatherData, savedCities, setSavedCities} = useWeatherContext();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const isCityAlreadySaved = (city: WeatherData) => {
    return savedCities.some((savedCity) => savedCity.name === city.name);
  };

  const saveCurrentCity = () => {
    if (!currentCity) {
      return;
    }
    if (isCityAlreadySaved(currentCity)) {
      alert("This city is already saved.");
      return;
    }
    if (savedCities.length >= 10) {
      alert("You can save a maximum of 10 cities.");
      return;
    }
    setSavedCities([...savedCities, currentCity]);
  };

  return (
    <WeatherContainer>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button type={ButtonType.Search} onClick={handleSearch}>
          Search
        </Button>
      </SearchContainer>

      {!currentCity && <CurrentWeather />}

      {loading && <LoadingText>Loading...</LoadingText>}
      {error && <ErrorText>{error}</ErrorText>}

      {currentCity && currentCity.main ? (
        <WeatherInfo weatherData={currentCity} saveCurrentCity={saveCurrentCity} />
      ) : null}
      <SavedCities>
        {savedCities.map((city, index) => (
          <WeatherByCity key={index} city={city} setSavedCities={setSavedCities} />
        ))}
      </SavedCities>
    </WeatherContainer>
  );
};

export default WeatherPage;
