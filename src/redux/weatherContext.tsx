import React, { createContext, useContext, useState } from "react";
import { WeatherData } from "../services/weatherService";

export interface WeatherContextProps {
  currentCity: WeatherData | null;
  savedCities: WeatherData[];
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  setSavedCities: React.Dispatch<React.SetStateAction<WeatherData[]>>;
  addToFavorites: (city: WeatherData) => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState<WeatherData | null>(null);
  const [savedCities, setSavedCities] = useState<WeatherData[]>([]);

  const addToFavorites = (city: WeatherData) => {
    if (!savedCities.some(savedCity => savedCity.name === city.name)) {
      setSavedCities([...savedCities, city]);
    }
  };


  const contextValue: WeatherContextProps = {
    currentCity,
    savedCities,
    setWeatherData: setCurrentCity,
    setSavedCities,
    addToFavorites
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
