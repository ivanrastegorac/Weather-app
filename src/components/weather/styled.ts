import styled from "styled-components";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

interface WeatherImageProps {
  weatherIcon: string;
}

const OPEN_WEATHER_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

// Common styles

const Container = styled.div`
  margin: auto;
`;

// WeatherContainer

export const WeatherContainer = styled.div`
  background: linear-gradient(to top, #87cefa, white);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 85vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

// Typography styles

export const Title = styled.h6`
  font-family: "Verdana", sans-serif;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1.125rem;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 8px 0;
`;

export const Info = styled(Paragraph)`
  font-size: 18px;
  margin: 8px 0;
`;

export const LoadingText = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-style: italic;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: red;
  margin-top: 20px;
`;

// Search styles

export const SearchContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin: 15px;
`;

export const SearchInput = styled.input`
  width: 350px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  margin-right: 15px;
  border-radius: 18px;
`;

export const SearchButton = styled(Button)`
  width: 20%;
`;

// SavedCities styles

export const SavedCities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 15px;
  justify-content: center;
`;

export const SavedCity = styled(Container)`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background-color: #ff5050;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #66cc00;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
`;

export const SavedCityLink = styled(Link)`
  text-decoration: none;
  color: #396bae;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
`;

export const TemperatureText = styled.p`
  font-size: 16px;
  margin: 8px 0;
  color: #396bae;
`;

export const WeatherDescriptionText = styled.p`
  font-size: 16px;
  color: #7b98b2;
  margin: 8px 0;
`;

export const WeatherIconImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 8px;
`;

// CurrentWeather styles

export const LocalWeatherWrapper = styled(Container)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
  height: 350px;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherInfoWrapper = styled.div`
  align-items: center;
`;

export const WeatherDetailLabel = styled.span`
  color: #8c8c8c;
  margin-right: 0.5rem;
`;

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  margin-left: 2rem;
`;

export const WeatherDetailItem = styled.div`
  text-align: left;
  margin-top: 0.8rem;
  > svg {
    margin-right: 0.9rem;
    color: #8c8c8c;
  }
`;

export const FeelsLike = styled(WeatherDetailItem)`
  font-size: 1.25rem;
  color: #7b98b2;

  > span {
    margin-right: 10px;
  }
`;

export const HighLowContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Temp = styled(WeatherDetailItem)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
  color: #3a86ca;
  margin-right: 15px;

  > span {
    margin-right: 5px;
  }
`;

export const Humidity = styled(WeatherDetailItem)`
  font-size: 1.25rem;
  color: #396bae;
`;

export const Wind = styled(WeatherDetailItem)`
  font-size: 1.25rem;
  color: #396bae;
`;

export const Pressure = styled(WeatherDetailItem)`
  font-size: 1.25rem;
  color: #396bae;
`;

export const SearchedWeatherWrapper = styled(Container)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 900px;
  height: 350px;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  ${SaveButton} {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  ${WeatherInfoWrapper} {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    width: 90%;
    max-width: none;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    width: 80%;
    max-width: none;
  }

  @media (min-width: 901px) {
    width: 70%;
    max-width: none;
  }

  @media (max-width: 829px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    height: auto;
  }
`;

export const CurrentWeatherStatus = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25rem;

  @media (min-width: 600px) {
    align-items: center;
  }
`;

export const TitleWrapper = styled(Title)`
  font-family: "Verdana", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const StyledCityTitle = styled.h1`
  font-family: "Verdana", sans-serif;
  font-size: 42px;
  color: #396bae;
  text-align: center;
`;

export const WeatherIcon = styled.div`
  margin: 16px 0;

  & > p > img {
    max-width: 100%;
    height: auto;
    width: 100px;
    height: 70px;
  }
`;

export const WeatherImage = styled.div<WeatherImageProps>`
  max-width: 100%;
  height: auto;
  width: 100px;
  height: 70px;
  background: url(${(props) => `${OPEN_WEATHER_URL}${props.weatherIcon}.png`})
    no-repeat center center;
  background-size: contain;
`;

export const InfoWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;

  @media (min-width: 600px) {
    align-items: flex-start;
    margin-left: 16px;
  }
`;

export const Temperature = styled(Paragraph)`
  font-size: 80px;
  color: #396bae;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export const WeatherDescription = styled(Paragraph)`
  font-family: "Verdana", sans-serif;
  font-size: 1.375rem;
  color: #7b98b2;

  @media (min-width: 600px) {
    text-align: center;
  }
`;

// Forecast styles

export const ForecastContainer = styled(Container)`
  background: linear-gradient(to top, #87cefa, white);
  max-width: 550px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  align-items: center;
`;

export const ForecastHeader = styled.h2`
  text-align: center;
  color: #396bae;
  margin-bottom: 20px;
  font-family: "Verdana", sans-serif;
`;

export const ForecastList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ForecastItem = styled.li`
  margin-bottom: 10px;
  width: 180px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const DayName = styled(Paragraph)`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: "Verdana", sans-serif;
`;

export const TemperatureWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const DayTemp = styled(Paragraph)`
  margin: 0;
  margin-right: 12px;
  font-size: 1.2em;
  font-family: "Verdana", sans-serif;
`;

export const ResponsiveForecastList = styled(ForecastList)`
  @media (max-width: 600px) {
    ${ForecastItem} {
      flex: 0 0 calc(100% - 16px);
      margin-right: 0;
    }
  }
`;

export const ForecastTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const ForecastIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid #ddd;
`;

export const StyledTableHeader = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  text-align: center;
`;
