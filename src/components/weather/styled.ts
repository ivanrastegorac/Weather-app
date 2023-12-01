import styled from "styled-components";
import Button from "../ui/button/Button";

// Common styles

const Container = styled.div`
  margin: auto;
`;

// WeatherContainer

export const WeatherContainer = styled(Container)`
  background: linear-gradient(to top, #87cefa, white);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header header"
    "search search"
    "cities weather";
  height: 85vh;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "header"
      "search"
      "cities"
      "weather";
  }
`;

// Typography styles

export const Title = styled.h6`
  font-family: "Verdana", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1.125rem;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 8px 0;
`;

// Search styles

export const SearchContainer = styled(Container)`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
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
`;

export const SavedCity = styled(Container)`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  text-align: center;
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
`;

// CurrentWeather styles

export const CurrentWeatherWrapper = styled(Container)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
  height: 350px;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrentWeatherStatus = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledCityTitle = styled.h4`
  font-family: "Verdana", sans-serif;
  font-size: 24px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #396bae;
`;

export const WeatherImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 100px;
  height: 70px;
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
  text-align: center;
  color: #7b98b2;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

// Forecast styles

export const ForecastContainer = styled(Container)`
  max-width: 550px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const ForecastHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: "Verdana", sans-serif;
`;

export const ForecastList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ForecastItem = styled.li`
  margin-bottom: 10px;
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
`;

export const MinTemperature = styled(Paragraph)`
  margin: 0;
  margin-right: 12px;
  font-size: 1.2em;
  font-family: "Verdana", sans-serif;
`;

export const MaxTemperature = styled(Paragraph)`
  margin: 0;
`;

export const ResponsiveForecastList = styled(ForecastList)`
  @media (max-width: 600px) {
    ${ForecastItem} {
      flex: 0 0 calc(100% - 16px);
      margin-right: 0;
    }
  }
`;
