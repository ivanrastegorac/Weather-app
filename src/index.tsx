import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { WeatherProvider } from "./redux/weatherContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <WeatherProvider>
        <App />
        </WeatherProvider>
        <ToastContainer />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
