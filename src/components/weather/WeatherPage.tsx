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
import { fetchWeather } from "../../services/weatherService";
import { useWeatherContext } from "../../redux/weatherContext";

const WeatherPage: React.FC = () => {
  const { currentCity, setWeatherData, savedCities, setSavedCities, saveCurrentCity, addToFavorites} = useWeatherContext();
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
        setError("Oops, failed to fetch data");
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
        <WeatherInfo weatherData={currentCity} saveCurrentCity={saveCurrentCity} addToFavorites={addToFavorites}/>
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
