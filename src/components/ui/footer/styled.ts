import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #87cefa;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
`;

export const FooterText = styled.p`
  font-family: "Verdana", sans-serif;
  font-size: 18px;
  color: #396bae;
`;

export const FooterLink = styled.a`
  color: #2c568f;

  &:hover {
    color: #1c375c;
  }
`;