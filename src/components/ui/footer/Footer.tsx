import React from "react";
import { FooterLink, FooterStyle, FooterText } from "./style";


interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {

  const profileLink = process.env.REACT_APP_LINK;

  return (
    <FooterStyle>
      <FooterText>
        Developed by @{" "}
        <FooterLink href={profileLink} target="_blank" rel="noopener noreferrer">
          {name}
        </FooterLink>
      </FooterText>
    </FooterStyle>
  );
};

export default Footer;
