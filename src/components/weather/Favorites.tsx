import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeatherContext } from '../../redux/weatherContext';
import { DeleteFavorite, FavoriteTitleWrapper, FavoritesCityLink, FavoritesList, FavoritesListContainer, ForecastContainer, ForecastHeader } from './styled';
import { LogoutButton, LogoutButtonWrapper } from '../ui/header/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from '../../services/weatherService';
import { toast } from 'react-toastify';

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const {favoriteCities, setFavoriteCities} = useWeatherContext();

  const navigateBack = () => {
    navigate('/weather');
  };

  const removeFromFavorites = (cityToRemove: WeatherData) => {
    setFavoriteCities((prevCities) =>
      prevCities.filter((city) => city.name !== cityToRemove.name)
    );
    toast.error("City removed from favorites.");
  };
  

  return (
    <ForecastContainer>
      <FavoriteTitleWrapper>
        <LogoutButtonWrapper>
          <LogoutButton type="button" onClick={navigateBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </LogoutButton>
        </LogoutButtonWrapper>
       <ForecastHeader>My favorite cities</ForecastHeader>
      </FavoriteTitleWrapper>
        <FavoritesList>
          {favoriteCities.map((city, index) => (
            <FavoritesListContainer key={index}>
              <FavoritesCityLink key={index} to={`/${city.name}`}>
                {city.name}
              </FavoritesCityLink>
              <DeleteFavorite onClick={() => removeFromFavorites(city)}>
                  <FontAwesomeIcon icon={faTimes} />
              </DeleteFavorite>  
            </FavoritesListContainer>
          ))}
        </FavoritesList> 
    </ForecastContainer>
  );
};

export default Favorites;
