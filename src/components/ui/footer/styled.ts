import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #87cefa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
`;

export const FooterText = styled.p`
  font-family: "Verdana", sans-serif;
  font-size: 18px;
  color: #396bae;
`;

export const FooterLink = styled.a`
  color: #7b98b2;

  &:hover {
    color: grey;
  }
`;