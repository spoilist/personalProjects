import React from "react";
import styled from "styled-components";

import * as utilFunctions from "./util";


class Login extends React.Component {
  render() {
    return (
      <StyledLogin>
        <StyledButton href={utilFunctions.redirectUrlToSpotifyLogin()}>
          Login to the App
        </StyledButton>
      </StyledLogin>
    );
  }
}

export default Login;

const StyledLogin = styled.div `
  background-color: #effaf3;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.a `
  display: inline-block;
  text-decoration: none;
  border: 3px solid #F97D11;
  border-radius: 3px;
  box-shadow: 11px 18px 24px -9px rgba(77,72,77,1);
  color: #F97D11;
  font-size: 48px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  padding: 20px;
  margin: 100px 0 200px 0;
  transition: .3s all ease;

  &:before {
    transition: .5s all ease;
    position: absolute;
    top: 0%;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: #EFFAF3;
    z-index: -2;
  }

  &:hover {
    color: black;
    &:before {
      transition: .5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }

`;
