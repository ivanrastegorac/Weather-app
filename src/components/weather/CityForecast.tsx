import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  cityName?: string;
} 

const CityForecast: React.FC = () => {
  const { cityName } = useParams();

  const [forecastData, setForecastData] = useState<ForecastItemProps[]>([]);
  const navigate = useNavigate();

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

  const handleForecastClick = (day: string) => {
    navigate(`/${cityName}/${day}`);
  };

  return (
    <ForecastContainer>
      <ForecastHeader>{cityName} 5-Day Forecast</ForecastHeader>
      <ResponsiveForecastList>
        {forecastData.map((item, index) => (
          <ForecastItem key={index}>
            <DayName onClick={() => handleForecastClick(item.dayName)}>
              {item.dayName}
            </DayName>
            {item.weatherIcon && (
              <WeatherImage weatherIcon={item.weatherIcon} />
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
