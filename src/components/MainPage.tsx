import { Route, Routes } from 'react-router-dom';
import WeatherPage from './weather/WeatherPage';
import CityForecast from './weather/CityForecast';
import DetailedForecast from './weather/DetailedForecast';
import { Layout } from './Layout';

const MainPage = () => {
  console.log('Main page');
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/:cityName" element={<CityForecast />} />
        <Route path="/:cityName/:day" element={<DetailedForecast />} />
      </Routes>
    </Layout>
  );
};

export default MainPage;
