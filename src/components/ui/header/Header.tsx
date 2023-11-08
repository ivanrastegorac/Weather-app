import React from 'react';
import {
  HeaderStyle,
  HeaderSubtext,
  HeaderTitle,
  HeaderWrapper,
  LogoutButton,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../../redux/slices/authSlice';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('X-token');
    dispatch(logoutSuccess());
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderStyle>
        <HeaderTitle>
          <span>{title}</span>
        </HeaderTitle>
        <LogoutButton type="button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </LogoutButton>
      </HeaderStyle>

      {subtitle && <HeaderSubtext>{subtitle}</HeaderSubtext>}
    </HeaderWrapper>
  );
};

export default Header;
