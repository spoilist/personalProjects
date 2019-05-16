import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledLink to="/search">
          <StyledIcon src="/Spotify_LOGO_RGB_White.png" alt="Icon" />
        </StyledLink>
        <StyledLink to="/search">
          <HeaderText>Artist Search</HeaderText>
        </StyledLink>
      </StyledHeader>
    );
  }
}

export default Header;

const StyledHeader = styled.div `
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

const StyledLink = styled(Link) `
  text-decoration: none;
  display: flex;
`;

const StyledIcon = styled.img `
  height: 50px;
  margin-left: 20px;
`;

const HeaderText = styled.div`
  color: white;
  margin: 0 20px 0 0;
  font-size: 30px;
`;

