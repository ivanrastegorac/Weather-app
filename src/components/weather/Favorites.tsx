import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeatherContext } from '../../redux/weatherContext';
import { FavoriteTitleWrapper, FavoritesCityLink, FavoritesList, ForecastContainer, ForecastHeader } from './styled';
import { LogoutButton, LogoutButtonWrapper } from '../ui/header/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const {savedCities} = useWeatherContext();

  const navigateBack = () => {
    navigate('/');
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
          {savedCities.map((city, index) => (
            <FavoritesCityLink key={index} to={`/${city.name}`}>{city.name}</FavoritesCityLink>
          ))}
        </FavoritesList> 
    </ForecastContainer>
  );
};

export default Favorites;
