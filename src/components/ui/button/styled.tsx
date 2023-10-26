import styled from 'styled-components';
import { ButtonType } from './ButtonType';

export interface StyledButtonProps {
  buttontype: ButtonType;
  color?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.buttontype === ButtonType.Primary ? '#09578b' : '#be2424'};
  color: ${(props) =>
    props.buttontype === ButtonType.Primary ? '#fff' : '#fff'};
  border: none;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 18px;
  cursor: pointer;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
