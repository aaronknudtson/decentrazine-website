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

const Signature = styled.div`
  color: ${COLORS.red};

  h2 {
    font-family: "LeagueSpartan-Bold";
  }
`;

const SignatureImage = styled.img``;

const UpcomingCollections: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>Upcoming Collections</PageTitle>
        <p></p>
        <h2>
        The following is a list of collections currently being curated to be released in the near future:
        </h2>
        <p>
        –	The FN series:  The first two doses of the FN series have already been airdropped to holders but we will continue to release additional FN pieces at a fixed rate per the creators wishes. The FN project is an experimental storytelling project told through a series of footnotes by author Brian J. Blessky. But who is Blessky, or who was he, or who will he be? Only collecting and reading the footnotes might lead to an answer.
        </p>
        <p>
        –	Dream Girls: A series of animated and non-animated hand drawn avatars for girls! Each avatar comes with a background story and alignment bar. Which Dream Girl (or Nightmare Girl!) are you?
        </p>
        <p>
        –	The Chaos Cassette Club: A series of music NFTs with covers hand drawn by our in-house artist wintersucks!. Own a piece of art as well as an awesome song from an emerging artist!
        </p>
        <p>
        –	Project Allegro: A previously unannounced group project that acts as an "Act 2" to our Community Collection. Hundreds of different pieces from hundreds of different artists, but in what style this time?
        </p>
        <h2>
        Completed Collections:
        </h2>
        <p>
        1.	Genesis Drop: 10000 pieces of generative Zineart designed by wintersucks! With full rarity scale and seemingly containing a story in every piece.</p>
        <p>
        <a href="https://opensea.io/collection/thedecentrazineproject">https://opensea.io/collection/thedecentrazineproject</a>
        </p>
        <p>
        2.	The Community Collection: 250 different pieces by 250 different artists, each with their interpretation of the word "Community". Done in the styles and mediums of their creators with artists ranging from nine year olds releasing their first piece all the way up to one of the highest selling NFT artists in the space.</p>
        <p>
        <a href="https://opensea.io/collection/the-community-collection">https://opensea.io/collection/the-community-collection</a>
        </p>
        <Signature>
          <SignatureImage src={signature} alt="signature" />
        </Signature>
      </PageContent>
    </PageWrapper>
  );
};

export default UpcomingCollections;
