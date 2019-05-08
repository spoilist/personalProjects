import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "1ae9d7e331e24b0b8413360563338962";
const redirectUri = "http://localhost:3000/search";
const responseType = "token";



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
        
          <Route exact path='/' component={Home} />
          <Route path='/search' component={ArtistSearch} />
          <Route path='/artists/' component={ArtistsList} />
          <Route path='/albums/:artistId' component={AlbumsList} />
          <Route path='/callback' component={CallBack}/>

        </div>
      </Router>
    );
  }
}

export default App;

class Home extends React.Component {
  render() {
    return (
      <a
        className="loginBtn"
        href={authEndpoint + "?client_id=" + clientId + "&redirect_uri=" + redirectUri + 
          "&scope=user-read-private%20user-read-email&response_type=" + responseType + "&state=" + 123}>
        Login to Spotify
      </a>
    );
  }
}

function ArtistSearch() {
  return (
    <input type="text" value="Enter artist name"></input>
  );
}

function ArtistsList() {
  return (
    <div>
      List of artists + search bar
    </div>
  );
}

function AlbumsList({ match }) {
  return (
    <div>
      List of albums by artist {match.params.artistId}
    </div>
  );
}

function Header() {
  return(
    <header className="App-header">
      Spotify Artist Search
    </header>
  );
}

class CallBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: 0,    }
  }
  render() {
    return(
      this.state.token
    );
  }

}

function redirectUrlToSpotifyLogin() {
  const clientId = "1ae9d7e331e24b0b8413360563338962";
  const redirectUri = "http://localhost:3000/search";

  return (
    "https://accounts.spotify.com/authorize?client_id=" +
    clientId +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=token"
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/