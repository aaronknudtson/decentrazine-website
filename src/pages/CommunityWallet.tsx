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

// const GiveawayItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `;

// const GiveawayPercentage = styled.h2`
//   color: ${COLORS.red};
//   font-family: "LeagueSpartan-Bold";
//   text-align: center;
//   text-decoration: underline;
//   font-size: 35px;
//   min-width: 250px;
// `;

const Signature = styled.div`
  color: ${COLORS.red};

  h2 {
    font-family: "LeagueSpartan-Bold";
  }
`;

const SignatureImage = styled.img``;

const CommunityWallet: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>The Decentrazines Community Wallet</PageTitle>
        <p>
          As the first drop continues to sell, we wanted to release the official
          details of the strategy we are looking to implement with our community
          wallet!
        </p>
        <p>
          A percentage of all funds made from the initial Decentrazines drop
          will be set aside to be added to a community wallet for Decentrazine
          owners. This percentage will be 20% assuming we eventually sell out
          the initial drop.
        </p>
        <p>
          Ownership of the Community Wallet will be split into 10750 pieces,
          with each Zine being worth 1/10750th of the Community Wallet to begin
          with, and those Zines numbered #1-#1500 having 150% value. These
          numbers will be updated at the time of the 1500th sale, as team
          members and project members will NOT gain this 150% benefit for their
          early zines.
        </p>
        <p>
          As the project continues on, every drop will add a percentage of its
          sales to the community wallet, while no additional ways to gain
          ownership of the wallet will be added. Allowing only Zine owners to
          continue to reap the benefits of the growing community wallet.
        </p>
        <p>
          In the future, at a date of no sooner than six months from now, the
          ability to "burn" your zine to claim your portion of the liquidity
          pool will be added. The function for completing this may not be
          through actual burning, but it will be relinquishing ownership of your
          zine. While the overall function of the Community Wallet will always
          remain the same, we retain the right to modify the form and verbiage
          to ensure we comply with all laws and regulations in regards to
          securities.
        </p>
        <p>
          This allows for owners to get access to quick liquidity if needed,
          while also increasing the rarity of the zines left on the market and
          increasing the ownership percentages for remaining holders.
        </p>
        <p>
          We hope that as time moves on and we continue to drop additional
          projects, being a member of the community wallet becomes a great long
          term investment for all owners, beyond just having a phenominal piece
          of art and membership to the club that is The Decentrazine Project.
        </p>

        <Signature>
          <h2>Sincerely</h2>
          <SignatureImage src={signature} alt="signature" />
        </Signature>
      </PageContent>
    </PageWrapper>
  );
};

export default CommunityWallet;
