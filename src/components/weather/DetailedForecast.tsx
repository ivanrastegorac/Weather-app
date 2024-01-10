import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ForecastContainer, ForecastHeader, ForecastIcon, ForecastTable, ResponsiveForecastList, StyledTableHeader, WeatherImage } from "./styled";
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
     <ResponsiveForecastList>
      {selectedDayForecast && (
        <ForecastTable>
          <thead>
            <tr>
              <StyledTableHeader>Time</StyledTableHeader>
              <StyledTableHeader>Weather</StyledTableHeader>
              <StyledTableHeader>Morning</StyledTableHeader>
              <StyledTableHeader>Day</StyledTableHeader>
              <StyledTableHeader>Evening</StyledTableHeader>
              <StyledTableHeader>Night</StyledTableHeader>
            </tr>
          </thead>
          <tbody>
          {["01:00", "07:00", "13:00", "19:00"].map((hour, hourIndex) => (
      <tr key={hourIndex}>
        <td>{hour}</td>
        
        <ForecastIcon>
          <WeatherImage weatherIcon={selectedDayForecast.weatherIcon} />
        </ForecastIcon>
        
        <td>{selectedDayForecast.morn}°C</td>
        <td>{selectedDayForecast.day}°C</td>
        <td>{selectedDayForecast.eve}°C</td>
        <td>{selectedDayForecast.night}°C</td>
      </tr>
    ))}
          </tbody>
        </ForecastTable>
      )}
      </ResponsiveForecastList>
    </ForecastContainer>
  );
};

export default DetailedForecast;
