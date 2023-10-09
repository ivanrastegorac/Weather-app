import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-image: url('background-image.avif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

export const ParagraphWrapper = styled.p`
  text-align: center;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  color: #2c445e;
`;
