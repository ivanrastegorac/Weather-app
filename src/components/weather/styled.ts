import styled from "styled-components";
import Button from "../ui/button/Button";

export const WeatherContainer = styled.div`
  background: linear-gradient(to top, #87cefa, white);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
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
`;

export const TitleWrapper = styled.h6`
  font-family: "Verdana", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1.125rem;
`;

export const SearchContainer = styled.div`
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

export const Info = styled.p`
  font-size: 18px;
  margin: 8px 0;
`;

export const LoadingText = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-style: italic;
`;

export const SavedCities = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SavedCity = styled.div`
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

export const CurrentWeatherWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
  width: 300px;
  height: 350px;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrentWeatherStatus = styled.div`
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

export const SyledCityTitle = styled.h4`
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;

  @media (min-width: 600px) {
    align-items: flex-start;
    margin-left: 16px;
  }
`;

export const Temperature = styled(Info)`
  font-size: 80px;
  color: #396bae;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export const WeatherDescription = styled(Info)`
  font-family: "Verdana", sans-serif;
  font-size: 1.375rem;
  text-align: center;
  color: #7b98b2;

  @media (min-width: 600px) {
    text-align: left;
  }
`;
