import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCityForecast } from "../../services/weatherService";
import {
  ForecastContainer,
  ForecastHeader,
  ForecastItem,
  DayName,
  TemperatureWrapper,
  MinTemperature,
  MaxTemperature,
  ResponsiveForecastList,
  WeatherImage,
} from "./styled";

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface ForecastItem {
  dayName: string;
  minTemp: number;
  maxTemp: number;
  weatherDescription: string;
  weatherIcon?: string;
}

const CityForecast: React.FC = () => {
  const { cityName } = useParams<{ cityName?: string }>();
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);
  const OPEN_WEATHER_URL = "https://openweathermap.org/img/w/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cityName) {
          const data = await fetchCityForecast(cityName);
          setForecastData(data);
          console.log(data);
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
              <MinTemperature>{item.minTemp} °</MinTemperature>
              <MaxTemperature>{item.maxTemp} °</MaxTemperature>
            </TemperatureWrapper>
          </ForecastItem>
        ))}
      </ResponsiveForecastList>
    </ForecastContainer>
  );
};

export default CityForecast;