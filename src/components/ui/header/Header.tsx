import React from 'react';
import {
  HeaderStyle,
  HeaderSubtext,
  HeaderTitle,
  HeaderWrapper,
  IconWrapper,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <HeaderStyle>
        <IconWrapper>
          <FontAwesomeIcon icon={faSun} size="2x" />
        </IconWrapper>
        <HeaderTitle>
          <span>{title}</span>
        </HeaderTitle>
      </HeaderStyle>

      {subtitle && <HeaderSubtext>{subtitle}</HeaderSubtext>}
    </HeaderWrapper>
  );
};

export default Header;
