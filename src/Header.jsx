import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import withAuth from "./withAuth";

class Header extends React.Component {
  render() {
    return this.props.authToken ? (
      <StyledHeader>
        <StyledLink to="/search">
          <IconContainer>
            <StyledIconGreen src="/Spotify_LOGO_RGB_Green.png" alt="Icon" />
            <StyledIconWhite src="/Spotify_LOGO_RGB_White.png" alt="Icon" />
          </IconContainer>
        </StyledLink>
        <StyledLink to="/search">
          <HeaderText>Artist Search</HeaderText>
        </StyledLink>
      </StyledHeader>
    ) : (
      <div />
    );
  }
}

export default withAuth(Header);

const StyledHeader = styled.div`
  height: 80px;
  font-size: 40px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  background-color: #191414;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    height: 70px;
  }
  @media (max-width: 700px) {
    height: 60px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;

const IconContainer = styled.div`
  margin-left: 20px;
  position: relative;
  display: flex;
`;

const StyledIconWhite = styled.img`
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;

  ${IconContainer}:hover & {
    opacity: 0;
  }
`;

const StyledIconGreen = styled.img`
  height: 50px;
  opacity: 0;

  ${IconContainer}:hover & {
    opacity: 1;
  }
`;

const HeaderText = styled.div`
  color: white;
  margin: 0 20px 0 0;
  font-size: 35px;
  font-family: "spotifyFontBold";

  :hover {
    color: #1db954;
  }
`;
