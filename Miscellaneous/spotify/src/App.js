import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
       

        <Route exact path='/' component={Home} />
        <Route path='/search' component={ArtistSearch} />
        <Route path='/artists/' component={ArtistsList} />
        <Route path='/albums/:artistId' component={AlbumsList} />

      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <button>
      Log In
    </button>
  );
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