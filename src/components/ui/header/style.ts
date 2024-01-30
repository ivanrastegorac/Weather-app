import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #09578b;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  font-family: "Arial", sans-serif;
  border-radius: 5px;
  max-width: 800px;
  margin: auto;
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  margin: 0;
  font-weight: bold;
  flex: 1;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
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

export const SubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const SubheaderLink = styled(Link)`
  text-decoration: none;
  color: white; 
  padding: 0 15px; 
  font-size: 16px; 
  transition: color 0.3s ease;

  &:hover {
    color: #B2B2B2;
  }

  &:not(:last-child) {
    margin-right: 10px; 
  }
`;