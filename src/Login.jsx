import React from "react";
import styled from "styled-components";

import { redirectUrlToSpotifyLogin } from "./util";

class Login extends React.Component {
  render() {
    return (
      <StyledLogin>
        <LoginHeader>
          <Title>Welcome to Spotify Artist Search</Title>
          <StyledButton href={redirectUrlToSpotifyLogin()}>
            Login to the App
          </StyledButton>
        </LoginHeader>
      </StyledLogin>
    );
  }
}

export default Login;

const StyledLogin = styled.div`
  background-color: #effaf3;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginHeader = styled.div`
  /* display: block; */
  font-family: "spotifyFontBold";
  line-height: 1.5;
  text-align: center;
  color: #000000;
`;

const Title = styled.h2`
  font-size: 40px;
  letter-spacing: -0.015em;
`;

const StyledButton = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;

  color: #f97d11;
  box-shadow: 0 0 0 2px #f97d11 inset;
  background-color: transparent;

  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;

  margin: 100px 0 200px 0;

  &:hover {
    color: #effaf3;
    background-color: #f97d11;
  }
  &:active {
    color: #ffffff;
    background-color: #5b2e07;
    outline: 0;
    box-shadow: 0 0 0 2px #5b2e07 inset;
  }
`;
