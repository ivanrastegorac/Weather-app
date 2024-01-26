import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ForecastContainer, ForecastHeader, ForecastIcon, ForecastTable, ResponsiveForecastList, StyledTableHeader, WeatherImage } from "./styled";
import { Temperature, fetchTemperature } from "../../services/weatherService";

const DetailedForecast: React.FC = () => {
  const { cityName, day } = useParams<{ cityName: string; day: string }>();
  const [selectedDayForecast, setSelectedDayForecast] = useState<Temperature | null>(null);

  const definedHours = ["01:00", "07:00", "13:00", "19:00"];

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

    const getTemperatureForHour = (hour: string): string => {
      switch (hour) {
        case "01:00":
          return String(selectedDayForecast?.morn) ?? "";
        case "07:00":
          return String(selectedDayForecast?.day) ?? "";
        case "13:00":
          return String(selectedDayForecast?.eve) ?? "";
        case "19:00":
          return String(selectedDayForecast?.night) ?? "";
        default:
          return "";
      }
    };
    

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
                <StyledTableHeader>Temperature</StyledTableHeader>
              </tr>
                  </thead>
            <tbody>
              {definedHours.map((hour, hourIndex) => (
                <tr key={hourIndex}>
                  <td>{hour}</td>

                  <ForecastIcon>
                    <WeatherImage weatherIcon={selectedDayForecast.weatherIcon} />
                  </ForecastIcon>

                  <td>{getTemperatureForHour(hour)}°C</td>
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
