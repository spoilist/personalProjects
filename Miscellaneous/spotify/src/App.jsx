import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

  /*componentDidMount() {
    const accessToken = checkUrlForAccessToken();
    accessToken ? this.setState({loggedIn: true, accessToken: accessToken}) : this.setState({loggedIn: false, accessToken: null});
  }*/

  setAuthToken(authToken) {
    this.setState({ authToken });
  }

  render() {
    const { authToken } = this.state;

    return (
      <Router>
        <ArtistSearchApp>
          <StyledHeader>
            <HeaderText>Spotify Artist Search</HeaderText>
          </StyledHeader>
          <Auth onGetAuthToken={this.setAuthToken} />
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

const StyledHeader = styled.div`
  min-height: 80px;
  font-size: 40px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  background-color: #191414;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderText = styled.div`
  color: white;
  margin: 0 20px 0 0;
`;

const ArtistSearchApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ace5c0;
`;
