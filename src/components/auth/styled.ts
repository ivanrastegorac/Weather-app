import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #87cefa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 98vh;
`;

export const LoginFormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogInFormTitle = styled.h1`
  color: #09578b;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;
  padding-bottom: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ParagraphWrapper = styled.p`
  text-align: center;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  color: #09578b;
  padding-left: 8px;
  font-family: Arial, Helvetica, sans-serif;
`;
