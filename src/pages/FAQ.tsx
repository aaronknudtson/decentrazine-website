import React from "react";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { COLORS } from "../constants";
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

const FAQContainer = styled.div`
  margin-top: 3em;
  h2 {
    color: ${COLORS.red};
    font-family: "LeagueSpartan-Bold";
    text-align: left;
    text-decoration: underline;
    line-height: 1.2;
    margin-top: 12px;
    margin-bottom: 18px;
    font-weight: 500;
  }

  p {
    font-family: "LeagueSpartan-Light";
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin-bottom: 3em;
  }
`;

const FAQ: React.FC = () => {
  return (
    <PageWrapper>
      <PageContent>
        <PageTitle>FAQ</PageTitle>

        <FAQContainer>
          <h2>What is a Decentrazine?</h2>
          <p>
          A Decentrazine is a piece of zineart that is randomly generated using pre-created traits. However, Decentrazines double as an "entry ticket" of sorts to the larger Decentrazine Project. Without a Decentrazine, you won't be able to participate in the future drops and activities from the project. Additionally, its just a pretty cool piece of art you can hang in your home or put up on a street corner.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>Is this the art style that will always be used?</h2>
          <p>
          Each drop from the Decentrazine Project will have a different artist and different style of art. While some artists may work with us more than once, you can generally expect a wildly different array of styles and influences. This is likely to be the only, or one of the only, zineart drops.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>What is the Decentrazine Project?</h2>
          <p>
          The Decentrazine Project is an endeavor with the end goal of exposing up and coming artists to a larger audience who is explicitly looking for what they are trying to sell. Giving buyers an easy place to find great new artists, and artists an easy place to find a large group of buyers who would be interested in their work.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>
            What makes Decentrazines different from all the other projects
            around?
          </h2>
          <p>
          There are a few major points of pride for us at The Decentrazine Project compared to many other drops currently in the space.
          </p>
          <p>
          #1: We are a dedicated group of doxxed founders.
          </p>
          <p>
          #2: Within our founders are people who have run successful businesses in other spaces. It's not our first company, and intend to bring more professionalism and preparedness than most projects currently in the space.
          </p>
          <p>
          #3: The utility of a Decentrazine is up front and easy to understand. No promises of future utility that may not exist. The utility is as a ticket to the rest of the project, and the rest of the project is laid out and easy to understand, nothing theoretical.
          </p>
          <p>
          #4: The reason for an increase in valuation is obvious and easy to understand. Why might a Decentrazine be more valuable in a week than it is now? Because there is going to be art released by exciting up and coming artists and without a Decentrazine you can't buy it. Additionally, the price if a Decentrazine can never be worth less than its stake in the community wallet, which will rise automatically with each drop. Once again, nothing abstract and theoretical.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>Are there royalties on Decentrazine projects?</h2>
          <p>
          The majority of Decentrazine Project drops will not have royalties. We want artists to reap the majority of the rewards for their projects, and us taking royalties on their work wouldn't make any sense. The projects that will include a royalty percentage are the few projects made by those that work for the company. When royalties exist, they will be below the industry standard.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>
          Do I own the art commercially for my Decentrazine or future Decentrazine projects?
          </h2>
          <p>
          This is something we leave entirely to the artists. Each drop will be different in this respect and entirely at the will of the artist who created the drop. Some will give you full license to use, others will not. The Decentrazine Project will not take any ownership rights away from artists either.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>
            Does everyone have an equal chance of getting a rare or special
            Decentrazine?
          </h2>
          <p>
          Yes, absolutely, aside from the pre-created promotional pieces. When you click generate, you will get a random Decentrazine and that is true for everyone up to and including the founders. The promotional pieces are unique and include traits that are not in the main drop, to be easily identified.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>What is The Clash?</h2>
          <p>
          While we are keeping most of the secrets to The Clash close to the vest for now, its safe to say that it is a large-scale interactive game for members of the Decentrazine community. It will have facets that can be done online and facets that can be done in real life and will yield prizes for the members who complete the tasks. We consider The Clash a fun thank-you for people who participated in the first drop and hope to change some lives with it, but it is not a major function of the Decentrazine Project.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>
            Do you already have other artists lined up for the future drops?
          </h2>
          <p>
          Yes. The first few artists for the project are already tapped and ready to go, but as time moves on we will be searching extensively to continue adding talented artists for future drops.
          </p>
        </FAQContainer>

        <FAQContainer>
          <h2>How will the IRL merch giveaways work?</h2>
          <p>
          When the first drop hits the threshholds required for IRL merch giveaways, we will send out IRL merch NFTs to random holders. You'll merely have to send those tokens back to us and provide us the information needed to send it. If you aren't really interested in the IRL merch, you can sell your merch token to someone who is!
          </p>
        </FAQContainer>
      </PageContent>
    </PageWrapper>
  );
};

export default FAQ;
