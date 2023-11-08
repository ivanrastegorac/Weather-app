import React, { useEffect, useState } from 'react';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';
import { WeatherData, fetchLocalWeather, fetchWeather } from '../../services/weatherService';
import { Info, RemoveButton, SaveButton, SavedCities, SavedCity, SearchContainer, SearchInput, TitleWrapper, WeatherContainer } from './styled';
import { LocalWeatherData } from './weatherTypes';

const WeatherPage: React.FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [localWeatherData, setLocalWeatherData] = useState<LocalWeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [savedCities, setSavedCities] = useState<WeatherData[]>([]);

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

        () => setError('Geolocation is not available or denied.')
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleSearch = async () => {
    if (city) {
      setLoading(true);
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setLoading(false);
        setCity('');
        setLocalWeatherData(null);
        setError(null);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    } else {
      setError('Please enter a city name.');
      setWeatherData(null);
    }
  };

  const isCityAlreadySaved = (city: WeatherData) => {
    return savedCities.some(savedCity => savedCity.name === city.name);
  };

  const removeCity = (index: number) => {
    const updatedCities = savedCities.filter((_, i) => i !== index);
    setSavedCities(updatedCities);
  };

  const saveCurrentCity = () => {
    if (weatherData) {
      if (isCityAlreadySaved(weatherData)) {
        alert('This city is already saved.');
      } else if (savedCities.length >= 10) {
        alert('You can save a maximum of 10 cities.');
      } else {
        setSavedCities([...savedCities, weatherData]);
      }
    }
  };

 

  const temperature = localWeatherData?.current.clouds;
  const location = localWeatherData?.timezone;
  const weatherDescription = localWeatherData?.current?.weather[0]?.description;


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
      {localWeatherData && (
  <div>
    <TitleWrapper>Current Weather</TitleWrapper>
    <Info>{location}</Info>
    {localWeatherData?.current ? (
      <Info>{temperature}°C</Info>
    ) : (
      <Info>Temperature data not available</Info>
    )}
    <Info>{weatherDescription}</Info>
    <Info>
      {localWeatherData.current.weather[0].icon && (
        <p>
          <img
            src={`https://openweathermap.org/img/w/${localWeatherData.current.weather[0].icon}.png`}
            alt="Local Weather Icon"
          />
        </p>
      )}
    </Info>
  </div>
)}
      
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && weatherData.main ? (
        <Info>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {weatherData.weather[0].icon && (
      <p><img
      src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
      alt="Weather Icon"
    /></p>
    )}
    <SaveButton onClick={saveCurrentCity}>
            Save City
          </SaveButton>
        </Info>
      ) : (
       null
      )}
      
      
      <SavedCities>
        {savedCities.map((cityData, index) => (
          <SavedCity key={index}>
            <h2>{cityData.name}</h2>
            <p> {cityData.main.temp} K</p>
            <p>{cityData.weather[0].description}</p>
            {cityData.weather[0].icon && (
              <p>
                <img
                  src={`https://openweathermap.org/img/w/${cityData.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
              </p>
            )}
            <RemoveButton onClick={() => removeCity(index)}>Remove</RemoveButton>
          </SavedCity>
        ))}
      </SavedCities>
    </WeatherContainer>
  );
};

export default WeatherPage;
