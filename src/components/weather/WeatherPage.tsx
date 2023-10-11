import React from 'react';
import { ParagraphWrapper } from '../auth/styled';
import Button from '../ui/button/Button';
import { ButtonType } from '../ui/button/ButtonType';
import { useDispatch } from 'react-redux';
import { logoutSucces } from '../../redux/slices/authSlice';

const WeatherPage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSucces());
  };

  return (
    <div>
      <ParagraphWrapper>Welcome</ParagraphWrapper>
      <Button type={ButtonType.Secondary} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default WeatherPage;
