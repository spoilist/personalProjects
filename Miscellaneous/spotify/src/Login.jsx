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
  background-color: #EFFAF3;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.a `
  /* display: inline-block;
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
  /* :focus {
    color: white;
  } */


  letter-spacing:2px;
  text-transform:uppercase;
  display:inline-block;
  text-align:center;
  width:270px;
  font-weight:bold;
  padding:14px 0px;
  border:3px solid #F97D11;
  border-radius:2px;
  position:relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.1);
  &:before {
    -webkit-transition:0.5s all ease;
    transition:0.5s all ease;
    position:absolute;
    top:0;
    left:50%;
    right:50%;
    bottom:0;
    opacity:0;
    content:'';
    background-color:#F97D11;
    z-index:-2;
  }
  &:hover {
    &:before {
      -webkit-transition:0.5s all ease;
      transition:0.5s all ease;
      left:0;
      right:0;
      opacity:1;
    }
  }
  &:focus {
    &:before {
      transition:0.5s all ease;
      left:0;
      right:0;
      opacity:1;
    }
  }
}


`;
