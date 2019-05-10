import React from 'react';
import * as utilFunctions from "./util";

class Login extends React.Component {
  render() {
    return (
      <div className="loginSpotify">
        <a href={utilFunctions.redirectUrlToSpotifyLogin()}>
          <button>Login to Spotify</button>
        </a>
      </div>
    );
  }
}

export default Login;