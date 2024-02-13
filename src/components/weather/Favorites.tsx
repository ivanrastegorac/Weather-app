import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeatherContext } from '../../redux/weatherContext';
import { FavoritesList, ForecastContainer, ForecastHeader, SavedCityLink } from './styled';
import { LogoutButton } from '../ui/header/style';
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
        <ForecastHeader>Favorite cities</ForecastHeader>
        <FavoritesList>
          {savedCities.map(city => (
            <SavedCityLink to={`/${city.name}`}>{city.name}</SavedCityLink>
          ))}
        </FavoritesList>
        <LogoutButton type="button" onClick={navigateBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </LogoutButton>
    </ForecastContainer>
  );
};

export default Favorites;
