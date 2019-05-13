import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArtistSearch from "./ArtistSearch";
import ArtistsList from "./ArtistsList";
import AlbumsList from "./AlbumsList";
import Login from "./Login";
import Auth from "./Auth";


class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loggedIn: false,
      authToken: null,
    }

    this.setAuthToken = this.setAuthToken.bind(this);
  }

  /*componentDidMount() {
    const accessToken = checkUrlForAccessToken();
    accessToken ? this.setState({loggedIn: true, accessToken: accessToken}) : this.setState({loggedIn: false, accessToken: null});
  }*/


  setAuthToken(authToken) {
    this.setState({authToken});
  }

  render() {
    const {authToken} = this.state;

    return (
      <Router>
        <div className="Hello">
        <Header/>
        <Auth onGetAuthToken={this.setAuthToken}/>
        
          <Route exact path='/' component={Login} />
          <Route path='/search' render={() => <ArtistSearch authToken={authToken}/>} />
          <Route path='/artists/' render={() => <ArtistsList authToken={authToken}/>} />
          <Route path='/albums/:artistId' render={() => <AlbumsList authToken={authToken}/>} />

        </div>
      </Router>
    );
  }
}

export default App;

function Header() {
  return(
    <header className="App-header">
      Spotify Artist Search
    </header>
  );
}
