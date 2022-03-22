import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { COLORS } from "../constants";

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  position: relative;
`;

// const BuyButton = styled(Link)`
//   background-color: ${COLORS.red};
//   color: white;
//   padding-left: 40px;
//   padding-right: 40px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   width: 425px;
//   display: inline-block;
//   height: 48px;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 48px;
//   z-index: 1;
//   letter-spacing: 0.1rem;

//   position: absolute;
//   top: 60%;
//   left: 50%;
//   transform: translateX(-50%);
//   font-family: "LeagueSpartan-Bold";
//   font-size: 22px;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: black;
//     color: white;
//   }
// `;

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <div className="message">
        <h1>ZineWallet: Coming Soon</h1>
      </div>
      <video
        style={{ width: "100%" }}
        autoPlay
        loop
        muted
        poster="screenshot.jpg"
        controls={false}
      >
        <source
          src="https://decentrazine-assets.s3.amazonaws.com/bg.mp4"
          type="video/mp4"
        />
        <source
          src="https://decentrazine-assets.s3.amazonaws.com/bg.ogg"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
      {/* <BuyButton to="/mint">MINT YOUR UNIQUE ZINE</BuyButton> */}
    </PageWrapper>
  );
};

export default Home;
