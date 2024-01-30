import React from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites: React.FC = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate('/weather');
  };

  return (
    <div>
      <button onClick={navigateBack}>Back to Weather</button>
    </div>
  );
};

export default Favorites;
