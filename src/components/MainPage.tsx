import { Route, Routes } from 'react-router-dom';
import WeatherPage from './weather/WeatherPage';
import CityForecast from './weather/CityForecast';
import DetailedForecast from './weather/DetailedForecast';
import { Layout } from './Layout';
import Favorites from './weather/Favorites';

const MainPage = () => {
  
  return (
    <Layout>
      <Routes>
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/weather/favorites" element={<Favorites />} />
        <Route path="/:cityName/:day" element={<DetailedForecast />} />
        <Route path="/:cityName" element={<CityForecast />} /> 
      </Routes>
    </Layout>
  );
};

export default MainPage;