import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";
import Logo from "../images/logo.png";
import DiscordLogo from "../images/logos/discord_white.png";
import InstagramLogo from "../images/logos/instagram.png";
import TwitterLogo from "../images/logos/twitter_white.png";

const NavbarWrapper = styled.nav`
  display: flex;
  background-color: ${COLORS.charcoal};
  height: 60px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 36px;
  padding-right: 36px;
  color: white;
  font-family: "LeagueSpartan-Bold";
  align-items: center;
  justify-content: space-between;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: inherit;
  text-decoration: none;
  margin-left: 16px;
  margin-right: 16px;

  &:hover {
    color: ${COLORS.orange};
  }
`;

const NavLogo = styled.img`
  width: 175px;
  height: auto;
`;

const NavLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;

  img {
    height: 60%;
    width: auto;
  }
`;

const BuyButton = styled(Link)`
  background-color: ${COLORS.red};
  color: white;
  padding-left: 22px;
  padding-right: 22px;
  width: 175px;
  height: 48px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  margin-left: 16px;

  &:hover {
    color: white;
  }
`;

const LINKS = [
  {
    path: "/decentrazine",
    name: "Decentrazine Project",
  },
  {
    path: "/drop",
    name: "Drop Info",
  },
  {
    path: "/team",
    name: "The Team",
  },
  {
    path: "/merch",
    name: "Merch Redemption",
  },
  {
    path: "/faq",
    name: "FAQ",
  },
  {
    path: "/community",
    name: "Community Wallet",
  },
  {
    path: "/upcomingcollections",
    name: "Upcoming Collections",
  },
];

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavLogoWrapper to="/">
        <NavLogo src={Logo} alt="logo" />
      </NavLogoWrapper>
      <NavLinkWrapper>
        {LINKS.map(({ path, name }) => {
          return (
            <NavLink to={path} key={path}>
              {name.toUpperCase()}
            </NavLink>
          );
        })}
        <BuyButton to="/mint">BUY A ZINE</BuyButton>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <SocialLink
          href="https://discord.gg/Nt59wjWPff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DiscordLogo} alt="discord" />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/decentrazine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt="instagram" />
        </SocialLink>
        <SocialLink
          href="https://twitter.com/Decentrazines"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TwitterLogo} alt="twitter" />
        </SocialLink>
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
