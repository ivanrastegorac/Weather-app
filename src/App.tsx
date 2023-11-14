import { Route, Routes } from "react-router-dom";
import WeatherPage from "./components/weather/WeatherPage";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/weather" element={<WeatherPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
