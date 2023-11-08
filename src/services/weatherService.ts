import axios from 'axios';
import { ReactNode } from 'react';

const API_KEY = '2fd5ccd1fab6dcc6ec685dcec78345f7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
  weather: WeatherInfo[];
}

interface WeatherInfo {
  de: ReactNode;
  description: string;
  icon: string;
}

export const fetchLocalWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};