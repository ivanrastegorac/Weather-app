import axios from "axios";
import { ReactNode } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

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

interface CityForecast {
  list: ApiForecastItem[];
}

interface ApiForecastItem {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: WeatherInfo[];
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
    throw new Error("Failed to fetch data");
  }
};

export const fetchCityForecast = async (city: string) => {
  try {
    const response = await axios.get<CityForecast>(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`
    );

    const groupedData: Record<string, ApiForecastItem[]> = {};
    response.data.list.forEach((item) => {
      const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      });
      if (!groupedData[day]) {
        groupedData[day] = [];
      }
      groupedData[day].push(item);
    });
    const result = Object.entries(groupedData).map(([day, items]) => ({
      dayName: day,
      minTemp: Math.min(...items.map((item) => item.main.temp_min)),
      maxTemp: Math.max(...items.map((item) => item.main.temp_max)),
      weatherIcon: items[0].weather[0].icon,
      weatherDescription: items[0].weather[0].description,
    }));

    return result;
  } catch (error) {
    throw error;
  }
};
