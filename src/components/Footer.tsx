import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const FooterWrapper = styled.footer`
  padding: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${COLORS.charcoal};
  color: white;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  text-align: left;
  margin: 0;
  font-size: 18px;
  font-family: "LeagueSpartan-Bold";
`;

const SectionContent = styled.p`
  text-align: left;
  font-family: "LeagueSpartan-Light";
  font-size: 16px;
  margin-top: 0.5em;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>Decentralize@gmail.com</SectionContent>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Terms & Conditions</SectionTitle>
        <SectionContent>
          You can find our full terms & conditions{" "}
          <Link style={{ color: "white" }} to="/terms">
            here
          </Link>
          .
        </SectionContent>
      </FooterSection>
    </FooterWrapper>
  );
};

export default Footer;
