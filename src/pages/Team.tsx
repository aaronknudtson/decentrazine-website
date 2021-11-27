import React from "react";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { COLORS } from "../constants";
import BG from "../images/bg.jpg";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import { SocialIcon } from 'react-social-icons';

const PageWrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  width: 100%;
  height: auto;
  text-align: left;
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;

  p {
    font-family: "LeagueSpartan-Light";
    font-size: 18px;
    font-weight: bold;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
`;

const TeamContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const TeamImage = styled.img`
  width: 25%;
  height: auto;
`;

const TeamContent = styled.div`
  background-color: ${COLORS.grey};
  display: flex;
  padding: 2em 1em;
  width: 70%;
  height: 100%;
  justify-content: space-between;

  h1 {
    font-family: "LeagueSpartan-Bold";
    text-align: left;
    color: black;
    font-size: 26px;
  }

  h2 {
    font-family: "LeagueSpartan-Light";
    text-align: left;
    color: #000;
    font-size: 28px;
    font-weight: bold;
  }

  p {
    font-family: "LeagueSpartan-Light";
    text-align: right;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
  }
`;

const TeamDescription = styled.div`
  margin-top: 12px;
  text-align: right;
`;

const Team: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>Meet the Team</PageTitle>

        <TeamContainer>
          <TeamImage src={t1} alt="t1" />
          <TeamContent>
            <h1>
              CREATOR/LEAD
              <h2>TheEsportsPlug</h2>
            </h1>
            <TeamDescription>
              <p>Professional DFS bettor. Former professional poker player.</p>
              <p>21% Free throw percentage.</p>
              <SocialIcon url="https://twitter.com/TheEsportsPlug" network="twitter" target="_blank" />
            </TeamDescription>
          </TeamContent>
        </TeamContainer>

        <TeamContainer>
          <TeamImage src={t2} alt="t1" />
          <TeamContent>
            <h1>
              DESIGNER/ART DIRECTION
              <h2>Winter Sucks!</h2>
            </h1>
            <TeamDescription>
              <p>Graphic designer for 7+ years. Averages 98 CS a game.</p>
              <p>Thinks it OK to eat food off the floor</p>
              <SocialIcon url="https://twitter.com/wintersucksNFT" network="twitter"  target="_blank" />
            </TeamDescription>
          </TeamContent>
        </TeamContainer>

        <TeamContainer>
          <TeamImage src={t3} alt="t1" />
          <TeamContent>
            <h1>
              COMMUNITY MANAGER
              <h2>Ghostrider90</h2>
            </h1>
            <TeamDescription>
              <p>8 years of experience in quality assurance.</p>
              <p>Master Of wrangling discords degenerates. #1 Titans fan.</p>
              <SocialIcon url="https://twitter.com/xGhostrider90" network="twitter"  target="_blank" />
            </TeamDescription>
          </TeamContent>
        </TeamContainer>
      </PageContent>
    </PageWrapper>
  );
};

export default Team;
