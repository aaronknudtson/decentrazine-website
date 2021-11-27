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
          Hello Dziners! It's finally here, the official drop announcement! 
          A lot of the information on the drop could be found in the initial 
          drop announcement we released on the reddit when we went public, but 
          I will repost some of that information here with the important added updates.
        </p>
        <p>
          Our mint is live right now with 9980 zines available for purchase at a 
          price of .03 Eth each. The other 20 zines are promotional zines (which 
          do not include the same rarity pieces as the main drop) and giveaways 
          from pre-drop (just randomized zines).
        </p>
        <p>
          10% of all proceeds from all Decentrazine Project collections (including 
          further releases) will go towards supporting art classrooms and programs 
          at the grassroots level and we'll be talking a lot more about that on our 
          twitter in the coming weeks. These donations will be made straight to teachers, 
          schools and programs to help bolster art education in future generations!
        </p>
        <p>
          Along the way we have some giveaways that any Dziner who purchases a
          Decentrazine will be entered automatically to win:
        </p>

        <GiveawayItem>
          <GiveawayPercentage>3%</GiveawayPercentage>
          <p>
            of all buyers will receive a shirt with one of their Decentrazines
            of their choice on it.
          </p>
        </GiveawayItem>

        <GiveawayItem>
          <GiveawayPercentage>2%</GiveawayPercentage>
          <p>
            of all buyers will receive a hoodie with one of their Decentrazines
            of their choice on it.
          </p>
        </GiveawayItem>

        <GiveawayItem>
          <GiveawayPercentage>1%</GiveawayPercentage>
          <p>
            of all buyers will receive a framed copy of one of their
            Decentrazines of their choice.
          </p>
        </GiveawayItem>

        <GiveawayItem>
          <GiveawayPercentage>0.01%</GiveawayPercentage>
          <p>
            of all buyers will receive their choice of a shirt, hoodie or framed
            copy, signed by the artist of Dencentrazine's first drop traits.
          </p>
        </GiveawayItem>

        <p>
          These giveaways will be done at a minimum of only a hundred sales, and
          will continue to scale with sales of the project. Additionally, there
          are a few surprises in store during our initial drop!
        </p>
        <p>
          At 25% sold, we will take 5% of sales and add it to an Community Controlled Investment Wallet
          that Decentrazine owners will then vote on how to
          utilize. We will also put into play our first major charity initiative.
        </p>
        <p>
          At 50% sold, we will add 10% of total sales to the Community Controlled Investment 
          Wallet. Additionally, we'll guarantee a limited airdrop from our 2nd
          featured artist.
        </p>
        <p>
          At 75% sold, we'll add 15% of total sales to the Community Controlled Investment Wallet.
        </p>
        <p>
          At 100% sold we will expand the airdrop from our second artist and put
          20% of total sales into the Community Controlled Investment Wallet. A 100% Sellout
          will also initiate The Clash.
        </p>
        <p>
          While you are minting, keep an eye out for a misprinted Decentrazine,
          a Decentrazine that will allow you free copies of all future
          Decentrazine drops with a total supply of 25 or more. Valid for as
          long as Decentrazines continues releasing projects!
        </p>
        <p>
          I also wanted to comment on the immediate future of the project so
          everyone would be aware of the timelines as we see them. Following our
          initial drop, we will take a few weeks to give out all the prizes from
          the drop (including the IRL merch), get the airdrop prepared, and
          select targets for our first charity donations.
        </p>
        <p>
          By the time our next drop occurs, all of the irl merch and other drop
          giveaways (including the airdrop) will be complete and all of our
          charity donations will be made and verified.
        </p>
        <p>
          We expect to have our second drop (a more limited run by a different
          artist) about one month after the end of the first Decentrazine drop.
        </p>
        <p>
          Thank you to everyone who has joined the Dziner family since our first
          announcement and we hope to see you all there for the beginning of
          something we have worked very hard for and truly believe in. For any
          other questions feel free to reach out on twitter or in the discord,
          or check out our FAQ.
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
