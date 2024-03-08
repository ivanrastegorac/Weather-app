import React, { createContext, useContext, useState } from "react";
import { WeatherData } from "../services/weatherService";

export interface WeatherContextProps {
  currentCity: WeatherData | null;
  savedCities: WeatherData[];
  favoriteCities: WeatherData[];
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  setSavedCities: React.Dispatch<React.SetStateAction<WeatherData[]>>;
  setFavoriteCities: React.Dispatch<React.SetStateAction<WeatherData[]>>;
  saveCurrentCity: (city: WeatherData) => void;
  addToFavorites: (city: WeatherData) => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState<WeatherData | null>(null);
  const [savedCities, setSavedCities] = useState<WeatherData[]>([]);
  const [favoriteCities, setFavoriteCities] = useState<WeatherData[]>([]);

  const isCityAlreadySaved = (city: WeatherData) => {
    return savedCities.some((savedCity) => savedCity.name === city.name);
  };

  const isCityAlreadyInFavorites = (city: WeatherData, favoriteCities: WeatherData[]) => {
    return favoriteCities.some((savedCity) => savedCity.name === city.name);
  };

  const saveCurrentCity = (city: WeatherData) => {
    if (isCityAlreadySaved(city)) {
      alert("This city is already saved.");
      return;
    }
    if (savedCities.length >= 10) {
      alert("You can save a maximum of 10 cities.");
      return;
    }
    setSavedCities([...savedCities, city]);
  };

  const addToFavorites = (city: WeatherData) => {
    if (isCityAlreadyInFavorites(city, favoriteCities)) {
      alert("This city is already in favorites.");
      return;
    }
    setFavoriteCities([...favoriteCities, city]);
  };

  const contextValue: WeatherContextProps = {
    currentCity,
    savedCities,
    favoriteCities,
    setWeatherData: setCurrentCity,
    setSavedCities,
    setFavoriteCities,
    saveCurrentCity,
    addToFavorites,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
