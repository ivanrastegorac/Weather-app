import styled from 'styled-components';

export const WeatherContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
  width: 100%;
  max-width: 400px;
  height: 85vh;
`;

export const TitleWrapper = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
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
