import React from 'react';
import * as utilFunctions from "./util";
import styled from "styled-components";

class Login extends React.Component {
  render() {
    return (
      <StyledLogin>
        <StyledButton href={utilFunctions.redirectUrlToSpotifyLogin()}>
          Login to Spotify
        </StyledButton>
      </StyledLogin>
    );
  }
}

export default Login;

const StyledLogin = styled.div `
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const StyledButton = styled.a `
  display: block;
  text-decoration: none;
  border-style: solid;
  color: #F97D11;
  font-size: 48px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  padding: 20px;
  margin: 100px 0 200px 0;

  filter: blur(0);
	transition: .3s ease-in-out;

  :hover {
  filter: blur(3px);
  }
`;
