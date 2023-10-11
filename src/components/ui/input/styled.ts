import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 18px;
  margin-top: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ErrorText = styled.div`
  max-width: 100%;
  color: red;
  font-family: sans-serif;
  padding: 5px;
`;

export const InfoText = styled.div`
  max-width: 100%;
  color: #09578b;
  padding: 5px;
  font-family: sans-serif;
`;
