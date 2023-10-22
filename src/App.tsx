import React, { useEffect } from 'react';
import LoginForm from './components/auth/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Header from './components/ui/header/Header';
import { loginSuccess } from './redux/slices/authSlice';
import WeatherPage from './components/weather/WeatherPage';
import AppRouter from './routes';

// const App: React.FC = () => {
//   const isAuthenticated = useSelector(
//     (state: RootState) => state.auth.isAuthenticated
//   );
//   const dispatch = useDispatch();

// useEffect(() => {
//   const token = localStorage.getItem('X-token');
//   if (token) {
//     dispatch(loginSuccess({ email: '' }));
//   }
// }, [dispatch]);

//   return (
//     <div>
//       {isAuthenticated ? (
//         <>
//           <Header title="Weather App" />
//           <WeatherPage />
//         </>
//       ) : (
//         <>
//           <Header title="Weather App" />
//           <LoginForm />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

function App() {
  return <AppRouter />;
}
export default App;
