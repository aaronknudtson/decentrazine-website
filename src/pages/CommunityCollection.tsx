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

const CommunityCollection: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>The Community Collection</PageTitle>
        <p>
          The Decentrazine Project Community Collection is a community-driven
          collaborative project showcasing hundreds of artists from all walks of
          life.
        </p>
        <p>
          The collection requires all artists to create a unique 1/1 piece based
          around a single focus-word, showcasing the wide array of styles,
          mediums, interpretations and invocations that the artists of the NFT
          world can create around a singular inspiration.
        </p>
        <p>
          The collection includes works from some of the best and well-known
          artists in the NFT space, career artists, artists who are new to the
          space, and even artists releasing their pieces for the very first time
          including a few very talented child artists and everything in between.
        </p>
        <p>
          All pieces will be put up for a 7-day bid auction starting on December
          5th. At the end of that 7-day period, the highest bidder who is a
          Decentrazine owner will win the auction and purchase the piece. Some
          pieces have hidden minimum acceptance prices as dictated by the
          artists.
        </p>
        <p>
          All proceeds from any piece sold from the Community Collection go
          directly back to the artists who created the pieces, with The
          Decentrazine Project keeping 0% of sales from this collection.
        </p>
        <p>
          This truly is an initiative to bring artists together and to help them
          support each other, while we continue to live up to the ethos of the
          Decentrazine Project by supporting artists in the space and helping
          collectors find exciting and original pieces by the extremely talented
          NFT art community.
        </p>
        <p>
          The beauty of the collection is in its diversity. With everything from
          fine art to dada to generative to AI to 2d to 3d to stop-motion to
          photography to music. With artists from Alaska to Thailand of all
          ages, races and creeds, there truly is something for everyone in the
          Community Collection."
        </p>
        <Signature>
          <SignatureImage src={signature} alt="signature" />
        </Signature>
      </PageContent>
    </PageWrapper>
  );
};

export default CommunityCollection;
