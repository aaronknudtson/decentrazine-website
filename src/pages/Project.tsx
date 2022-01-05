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

const Project: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>The Decentrazine Project</PageTitle>
        <p>
        The goal of the Decentrazine project can be most easily broken down into five major values:
        </p>
        <p>
        #1: Search out promising undiscovered artists and allow them access to a group of enthusiastic buyers.
        </p>
        <p>
        #2: Provide an easy way for collectors to find undiscovered artists and acquire early pieces at reasonable prices.
        </p>
        <p>
        #3: Create an easy mechanism for symbiotic relationships between emerging artists and collectors.
        </p>
        <p>
        #4: Make sure all releases align completely with the wishes of the artist while still offering any support and advice that the Decentrazine Project staff can offer.
        </p>
        <p>
        #5: Offer all holders a legitimate long term investment with concrete fundamentals and utility.
        </p>
        <p>
        Those are the tenets by which we created the project. Creating something that elevated every part of the chain was the foremost intent for us and I think we've achieved it with this project. A project that not only helps artists but saves times for collectors and creates a legitimate long term investment for all involved.
        </p>
      </PageContent>
    </PageWrapper>
  );
};

export default Project;
