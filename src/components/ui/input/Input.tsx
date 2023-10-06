import React from 'react';
import { StyledInput } from './styled';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
