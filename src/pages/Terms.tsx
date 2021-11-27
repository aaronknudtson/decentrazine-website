import React from "react";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import BG from "../images/bg.jpg";

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

const Terms: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>Terms & Conditions</PageTitle>
        <p>
          The Decentrazine Project is a collection of digital artworks sold,
          distributed and owned on the ethereum network. This website acts only
          as a medium to allow interested parties to exchange those artworks.
          All users are responsible for the safety of their own collectibles and
          wallets and for validating all transactions and contracts contained
          herein before approval. Per the rules and mechanisms of the ethereum
          network, we are unable to undo or reverse any transactions
        </p>
        <p>
          Users accept sole responsibility for any and all transactions
          involving Decentrazine Project artworks.
        </p>
        <p>
          Each NFT sold on this website becomes your property upon purchase.
        </p>
        <p>
          Ownership of the commercial rights for each product is specific to
          that product’s collection, and works on a case by case basis as
          explained in the release documents of each collection.
        </p>
        <p>
          For personal use - As long as all rules within the Decentrazine
          Project site are followed, you are free to use any and all art for
          your own personal use in any way you see fit as long as that personal
          use does not commercialize a piece from a collection for which the
          commercial rights are not transferred.
        </p>
        <p>
          Those who do not own a piece sold by The Decentrazine Project may not
          continue to display works of art sold by The Decentrazine Project even
          if they are a previous owner of that piece or other pieces.
        </p>
        <p>
          By purchasing here you agree not to use any Decentrazine Project art
          in any endeavor which would promote hate speech, racism, pornography
          or any other illegal content.
        </p>
        <p>
          While we have extensive plans to continue this project, we do not
          guarantee any future additional utility. You, the owner, agree to
          purchase the work as only what it is currently explicitly stated to
          be.
        </p>
        <p>
          Decentrazines should not be viewed as an investment and we do not
          promise or guarantee an increase or even hold in value relative to
          purchasing price.
        </p>

        <p>
          All minters and owners are responsible for any tax liability that may
          arise from minting or reselling Decentrazine Project tokens.
        </p>
        <p>
          By owning a Decentrazine Project artwork you waive and class action
          status and any legal dispute anyone wishes to pursue relative to The
          Decentrazine Project may only be brough individually.
        </p>
        <p>
          By purchasing a Decentrazine Project artwork you are agreeing that you
          are of legal age in your jurisdiction, and purchasing the artwork in a
          way that is legal and legitimate.
        </p>
      </PageContent>
    </PageWrapper>
  );
};

export default Terms;
