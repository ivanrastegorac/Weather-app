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
  position: absolute;
`;

// CurrentWeather styles

export const LocalWeatherWrapper = styled(Container)`
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

export const StyledCityTitle = styled.h4`
  font-family: "Verdana", sans-serif;
  font-size: 24px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #396bae;
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
    text-align: center;
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
