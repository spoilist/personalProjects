import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import ArtistSearch from "./ArtistSearch";
import AlbumsList from "./AlbumsList";
import Login from "./Login";
import Auth from "./Auth";
import styled from "styled-components";

const AuthContext = React.createContext(null);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: null
    };
    this.setAuthToken = this.setAuthToken.bind(this);
  }

  setAuthToken(authToken) {
    this.setState({ authToken });
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.authToken}>
        <Router>
          <Auth onGetAuthToken={this.setAuthToken} />
          <ArtistSearchApp>
            {this.state.authToken ? <Header /> : <div />}
            <Route exact path="/" component={Login} />
            <AuthContext.Consumer>
              {value => (
                <Route
                  path="/search"
                  render={() => <ArtistSearch authToken={value} />}
                />
              )}
            </AuthContext.Consumer>
            <AuthContext.Consumer>
              {value => (
                <Route
                  path="/albums/:artistId"
                  render={({ match }) => (
                    <AlbumsList
                      match={match.params.artistId}
                      authToken={value}
                    />
                  )}
                />
              )}
            </AuthContext.Consumer>
          </ArtistSearchApp>
        </Router>
      </AuthContext.Provider>
    );
  }
}
export default App;

const ArtistSearchApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ace5c0;
  min-width: 400px;
  width: auto !important;
  width: 400px;

  @font-face {
    font-family: "spotifyFontBold";
    src: url("/fonts/ProximaNovaBold.otf")
  }

  @font-face {
    font-family: "spotifyFontThin";
    src: url("/fonts/ProximaNovaThin.otf")
  }

  @font-face {
    font-family: "spotifyFontRegular";
    src: url("/fonts/ProximaNovaRegular.otf")
  }

`;
