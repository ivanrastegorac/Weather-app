import { Route, Routes } from 'react-router-dom';
import WeatherPage from './weather/WeatherPage';
import CityForecast from './weather/CityForecast';
import DetailedForecast from './weather/DetailedForecast';
import { Layout } from './Layout';
import Favorites from './weather/Favorites';

const MainPage = () => {
  console.log('Main page');
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/:cityName" element={<CityForecast />} />
        <Route path="/:cityName/:day" element={<DetailedForecast />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </Layout>
  );
};

export default MainPage;
