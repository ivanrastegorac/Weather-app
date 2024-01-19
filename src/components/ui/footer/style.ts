import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #87cefa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  margin: auto;
  padding: 20px 0;
  height: 20px !important;
`;

export const FooterText = styled.p`
  font-size: 18px;
`;

export const FooterLink = styled.a`
  color: #fff;

  &:hover {
    color: grey;
  }
`;