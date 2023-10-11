import React from 'react';
import { StyledButton } from './styled';
import { ButtonType } from './ButtonType';

interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
  color?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Primary,
  onClick,
  color,
  children,
  disabled,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      buttonType={type}
      color={color}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
