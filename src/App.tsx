import { Route, Routes } from "react-router-dom";
import WeatherPage from "./components/weather/WeatherPage";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import CityForecast from "./components/weather/CityForecast";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/:cityName" element={<CityForecast />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
