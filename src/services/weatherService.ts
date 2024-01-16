import axios from "axios";
import { ReactNode } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;

  sys: {
    country: string;
  };
  weather: WeatherInfo[];
  daily?: Temperature[]; 
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
  daily: Temperature[];
}

export interface Temperature {
  day: number;
  night: number;
  eve: number;
  morn: number;
  weatherIcon: string;
}

export const fetchLocalWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const roundedWeatherData: WeatherData = {
      ...response.data,
      main: {
        ...response.data.main,
        temp: Math.round(response.data.main.temp),
        feels_like: Math.round(response.data.main.feels_like),
        temp_min: Math.round(response.data.main.temp_min),
        temp_max: Math.round(response.data.main.temp_max),
      },
    };

    return roundedWeatherData;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchCityForecast = async (city: string) => {
  try {
    const response = await axios.get<CityForecast>(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const forecastDataInCelsius = response.data.list.map(
      (item: ApiForecastItem) => ({
        ...item,
        main: {
          ...item.main,
          temp_min: Math.round(item.main.temp_min),
          temp_max: Math.round(item.main.temp_max),
        },
      })
    );

    const groupedData: Record<string, ApiForecastItem[]> = {};
    forecastDataInCelsius.forEach((item) => {
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

export const fetchTemperature = async (
  cityName: string
): Promise<Temperature> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    const temperatureData: Temperature = {
      day: Math.round(response.data.main.temp_max),
      night: Math.round(response.data.main.temp_min),
      eve: Math.round(response.data.main.temp),
      morn: Math.round(response.data.main.feels_like),
      weatherIcon: response.data.weather[0]?.icon || "",
    };

    return temperatureData;
  } catch (error) {
    throw error;
  }
};