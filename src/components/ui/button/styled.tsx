import styled from 'styled-components';
import { ButtonType } from './ButtonType';

export interface StyledButtonProps {
  buttonType: ButtonType;
  color?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.buttonType === ButtonType.Primary ? '#007bff' : '#f70404'};
  color: ${(props) =>
    props.buttonType === ButtonType.Primary ? '#fff' : '#fff'};
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;
