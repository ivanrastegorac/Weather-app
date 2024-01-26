import React from "react";
import { FooterLink,  FooterText, FooterWrapper } from "./styled";

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {

  const profileLink = process.env.REACT_APP_LINK;

  return (
    <FooterWrapper>
            <FooterText>
                Developed by {""}
                    <FooterLink href={profileLink} target="_blank" rel="noopener noreferrer">
                        {name}
                    </FooterLink>
            </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
