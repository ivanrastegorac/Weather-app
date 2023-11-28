import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCityForecast } from "../../services/weatherService";

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
    <div>
      <h2>{cityName} 5-Day Forecast</h2>
      <ul>
        {forecastData.map((item, index) => (
          <li key={index}>
            <p>{item.dayName}</p>
            <p>Min Temperature: {item.minTemp} °C</p>
            <p>Max Temperature: {item.maxTemp} °C</p>
            <p>Description: {item.weatherDescription}</p>
            {item.weatherIcon && (
              <img
                src={`https://openweathermap.org/img/w/${item.weatherIcon}.png`}
                alt="Weather Icon"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityForecast;
