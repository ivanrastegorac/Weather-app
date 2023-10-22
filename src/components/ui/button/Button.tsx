import React from 'react';
import { StyledButton } from './styled';
import { ButtonType } from './ButtonType';

interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
  color?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onKeyDown?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Primary,
  onClick,
  color,
  children,
  disabled,
  onKeyDown,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' && onKeyDown) {
      onKeyDown();
    }
  };
  return (
    <StyledButton
      onClick={onClick}
      buttonType={type}
      color={color}
      disabled={disabled}
      onKeyDown={handleKeyDown}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
