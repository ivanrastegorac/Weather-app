import styled from 'styled-components';
import Button from '../ui/button/Button';
import { StyledSearch } from '../ui/input/styled';

export const WeatherContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'header header'
    'search search'
    'cities weather';
  height: 85vh;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  grid-area: header;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
`;

export const SearchInput = styled(StyledSearch)`
  width: 80%;
  margin-right: 5px;
`;

export const SearchButton = styled(Button)`
  width: 20%;
`;

export const Info = styled.p`
  font-size: 18px;
  margin: 8px 0;
  grid-area: weather;
`;

export const LoadingText = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-style: italic;
  grid-area: weather;
`;

export const SavedCities = styled.div`
  grid-area: cities;
  display: flex;
  flex-wrap: wrap;
`;

export const SavedCity = styled.div`
  background-color: #e0e0e0;
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

