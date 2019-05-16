import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import ArtistSearch from "./ArtistSearch";
import AlbumsList from "./AlbumsList";
import Login from "./Login";
import Auth from "./Auth";
import styled from "styled-components";



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
    const { authToken } = this.state;

    return (
      <Router>
        <Auth onGetAuthToken={this.setAuthToken} />
        <ArtistSearchApp>
          {this.state.authToken ? (
            <Header />
          ) : (
            <div></div>
          )}
          <Route exact path="/" component={Login} />
          <Route
            path="/search"
            render={() => <ArtistSearch authToken={authToken} />}
          />
          <Route
            path="/albums/:artistId"
            render={({ match }) => (
              <AlbumsList authToken={authToken} match={match.params.artistId} />
            )}
          />
        </ArtistSearchApp>
      </Router>
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
`;
