import React from "react";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { COLORS } from "../constants";
import BG from "../images/drop-bg.jpg";
import signature from "../images/xi.png";

const PageWrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: auto;
  text-align: left;
`;

const PageContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;

  p {
    font-family: "LeagueSpartan-Light";
    font-size: 18px;
    font-weight: bold;
    margin-top: 3em;
    margin-bottom: 3em;
  }
`;

const GiveawayItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const GiveawayPercentage = styled.h2`
  color: ${COLORS.red};
  font-family: "LeagueSpartan-Bold";
  text-align: center;
  text-decoration: underline;
  font-size: 35px;
  min-width: 250px;
`;

const Signature = styled.div`
  color: ${COLORS.red};

  h2 {
    font-family: "LeagueSpartan-Bold";
  }
`;

const SignatureImage = styled.img``;

const DropInfo: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>Drop Information</PageTitle>
        <p>
        Hello Dziners!
        </p>
        <p>
        Our mint is live right now with 9980 zines available for purchase at a price of .03 Eth each. The other 20 zines are promotional zines (which do not include the same rarity pieces as the main drop) and giveaways from pre-drop (just randomized zines).
        </p>
        <p>
        Along the way we have some giveaways that any Dziner who purchases a Decentrazine will be entered automatically to win:
        </p>

        <GiveawayItem>
          <GiveawayPercentage>3%</GiveawayPercentage>
          <p>
          of all buyers will receive a shirt with one of their Decentrazines of their choice on it.
          </p>
        </GiveawayItem>

        <GiveawayItem>
          <GiveawayPercentage>2%</GiveawayPercentage>
          <p>
          of all buyers will receive a hoodie with one of their Decentrazines of their choice on it.
          </p>
        </GiveawayItem>

        <GiveawayItem>
          <GiveawayPercentage>1%</GiveawayPercentage>
          <p>
          of all buyers will receive a framed copy of one of their Decentrazines of their choice.
          </p>
        </GiveawayItem>

        <GiveawayItem>
          <GiveawayPercentage>0.01%</GiveawayPercentage>
          <p>
          of all buyers will receive their choice of a shirt, hoodie or framed copy, signed by the artist of Dencentrazine's first drop traits.
          </p>
        </GiveawayItem>

        <p>
        These giveaways will be done at a minimum of only a hundred sales, and will continue to scale with sales of the project.
        </p>
        <p>
        At 15% Sold we will deploy the community wallet and add to it 20% of all total sales.
        </p>
        <p>
        At 50% sold, we'll guarantee a new airdrop from one of our featured artists.
        </p>
        <p>
        At 100% sold we will guarantee a second airdrop from a featured artist. A 100% Sellout will also initiate The Clash.
        </p>
        <p>
        While you are minting, keep an eye out for a misprinted Decentrazine, a Decentrazine that will allow you free copies of all future Decentrazine drops with a total supply of 25 or more. Valid for as long as Decentrazines continues releasing projects!
        </p>
        <p>
        Thank you to everyone who has joined the Dziner family since our first announcement and we hope to see you all there for the beginning of something we have worked very hard for and truly believe in. For any other questions feel free to reach out on twitter or in the discord, or check out our FAQ.
        </p>
        <Signature>
          <h2>Thanks for everything</h2>
          <SignatureImage src={signature} alt="signature" />
        </Signature>
      </PageContent>
    </PageWrapper>
  );
};

export default DropInfo;
