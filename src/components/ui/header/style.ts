import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #09578b;
  color: #fff;
  padding: 20px 0;
  border-color: red 5px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  border-radius: 5px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  margin: 0;
  font-weight: bold;
  flex: 1; 
  text-align: center;
`;

export const HeaderSubtext = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutButton = styled.button` 
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #6e8cc2;
  color: white;
`;
