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
          The goal of the Decentrazine project can be most easily broken down
          into four major values:
        </p>
        <p>
          #1: Search out and expand the reach of promising non-traditional
          artists, allowing them access to a group of avid and enthusiastic
          buyers from around the world. Anyone in any realm knows the struggle
          of being or knowing an extremely talented person and just not being
          able to get the word out to the world.
        </p>
        <p>
          #2: Provide an exclusive marketplace for fans of non-traditional art
          to get early looks at emerging artists and acquire their early pieces.
          In the upcoming years there will be thousands upon thousands of
          artists releasing pieces via a variety of mediums in the NFT world. It
          can already be hard enough to keep up with the multitude of daily
          drops and often impossible to find what you are really looking for.
        </p>
        <p>
          The Decentrazine Project's aim is to not only create a place where you
          can easily find the type of art that you enjoy, but to also make sure
          that that art is easy to access and exclusive to you and others like
          you. We expect to host a wide variety of different styles of both art
          and dispersion. Everything from hand crafted 1/1s to ten thousand
          count generative projects and everything in between.
        </p>
        <p>
          #3: Create a symbiotic environment for large groups of both investors
          and artists, allowing them to fuse their interests and create
          opportunities for mutual benefit. There is nothing that so truly says
          “Art” as allowing a passionate patron to support an artist through
          exposure and marketplace validity while also allowing the artist to
          reward that patron for their faith with exclusive perks and additional
          pieces. That is at the heart of The Decentrazine Project. To allow a
          collector to raise the value of an artist through their faith and to
          have that artist be able to thank the collectors with exclusive
          content or additional market flow.
        </p>
        <p>
          #4: Continue the proud non-traditional art philosophy of freedom for
          creators. Tailoring each release to its specific creator, their style
          and their wants and needs. Too often in the arena of art, music,
          television and film we see artists constrained by being forced into
          company-sided contracts in return for exposure, often tying them up
          for years or stifling some of their best work.
        </p>
        <p>
          At The Decentrazine Project it is our foremost promise that we will
          never have long-term contracts or further obligations. Artists work
          with us entirely at their own discretion and according to the rules
          that they themselves set in regards to the release and distribution of
          their work. Ownership of all art will be between creators and buyers,
          with Decentrazines keeping no rights or ownership of anything that
          passes through our doors unless specified by the artist themselves.
        </p>
        <p>
          #5: Support young artists and art programs around the world. 10% of
          all sales from Decentrazines will go towards supporting teachers and
          programs related to the arts at the grassroots level. After the first
          drop we will take applications from teachers, schools and programs
          looking for additional funding and donate at the ground level, helping
          students in need to continue their education in the arts.
        </p>
        <p>
          Those are the tenets by which we created the project. Creating
          something that elevated every part of the chain was the foremost
          intent for us and I think we've achieved it with this project. We hope
          to see you for the drop, when details are announced in the near
          future.
        </p>
      </PageContent>
    </PageWrapper>
  );
};

export default Project;
