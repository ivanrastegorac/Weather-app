import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';

export const LoggedOutRoutes = () => (
  <Routes>
    {/* landing page */}
    <Route path="/" element={<LoginForm />} />
  </Routes>
);
