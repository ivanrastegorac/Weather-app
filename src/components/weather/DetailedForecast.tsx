import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ForecastContainer, ForecastHeader, WeatherImage } from "./styled";
import { Temperature, fetchTemperature } from "../../services/weatherService";

const DetailedForecast: React.FC = () => {
  const { cityName, day } = useParams<{ cityName: string; day: string }>();
  const [selectedDayForecast, setSelectedDayForecast] =
    useState<Temperature | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cityName) {
          const response = await fetchTemperature(cityName);
          setSelectedDayForecast(response);
        } else {
          console.error("City name is undefined");
        }
      } catch (error) {
        console.error("Failed to fetch temperature data", error);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <ForecastContainer>
      <ForecastHeader>
        {cityName} {day} Forecast
      </ForecastHeader>
      {selectedDayForecast && (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Weather</th>
              <th>Morning</th>
              <th>Day</th>
              <th>Evening</th>
              <th>Night</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day</td>
              <td>
                {/* <WeatherImage weatherIcon={selectedDayForecast.weatherIcon} /> */}
              </td>
              <td>{selectedDayForecast.morn}°C</td>
              <td>{selectedDayForecast.day}°C</td>
              <td>{selectedDayForecast.eve}°C</td>
              <td>{selectedDayForecast.night}°C</td>
            </tr>
          </tbody>
        </table>
      )}
    </ForecastContainer>
  );
};

export default DetailedForecast;
