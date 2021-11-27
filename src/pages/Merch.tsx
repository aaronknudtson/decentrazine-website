import React from "react";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { COLORS } from "../constants";
import BG from "../images/bg.jpg";
import merch from "../images/merch.png";

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

  img {
    width: 100%;
  }
`;

const ComingSoon = styled.h2`
  color: ${COLORS.red};
`;

const Merch: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>Dziner Threads</PageTitle>
        <ComingSoon>Shipping Now (Public Store Opening Soon!)</ComingSoon>
        <p>
          These shirts, hoodies and framed zines will be a part of giveaways for
          the first drop.
        </p>
        <img src={merch} alt="merch samples" />
      </PageContent>
    </PageWrapper>
  );
};

export default Merch;
