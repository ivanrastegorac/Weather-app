import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCityForecast } from "../../services/weatherService";
import {
  ForecastContainer,
  ForecastHeader,
  ForecastItem,
  DayName,
  TemperatureWrapper,
  ResponsiveForecastList,
  WeatherImage,
  DayTemp,
} from "./styled";
interface ForecastItemProps {
  dayName: string;
  minTemp: number;
  maxTemp: number;
  weatherDescription: string;
  weatherIcon?: string;
}

const CityForecast: React.FC = () => {
  const { cityName } = useParams<{ cityName?: string }>();
  const [forecastData, setForecastData] = useState<ForecastItemProps[]>([]);
  const OPEN_WEATHER_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cityName) {
          const data = await fetchCityForecast(cityName);
          setForecastData(data);
        }
      } catch (error) {
        console.error("Error fetching city forecast:", error);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <ForecastContainer>
      <ForecastHeader>{cityName} 5-Day Forecast</ForecastHeader>
      <ResponsiveForecastList>
        {forecastData.map((item, index) => (
          <ForecastItem key={index}>
            <DayName>{item.dayName}</DayName>
            {item.weatherIcon && (
              <WeatherImage
                src={`${OPEN_WEATHER_URL}${item.weatherIcon}.png`}
                alt="Weather Icon"
              />
            )}
            <TemperatureWrapper>
              <DayTemp>{item.minTemp}°C</DayTemp>
              <DayTemp>{item.maxTemp}°C</DayTemp>
            </TemperatureWrapper>
          </ForecastItem>
        ))}
      </ResponsiveForecastList>
    </ForecastContainer>
  );
};

export default CityForecast;
