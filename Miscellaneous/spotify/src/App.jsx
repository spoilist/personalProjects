import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
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
        <ArtistSearchApp>
          <StyledHeader>
            <StyledLink to="/">
              <StyledIcon src="/Spotify_LOGO_RGB_White.png" alt="Icon"/>
              <HeaderText>Artist Search</HeaderText>
            </StyledLink>
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
  height: 80px;
  font-size: 40px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  background-color: #191414;
  display: flex;

  @media (max-width: 900px) { 
    height: 70px;
  }
  @media (max-width: 700px) { 
    height: 50px;
  }
  @media (max-width: 400px) { 
    height: 30px;
  }
`;

const StyledLink = styled(Link) `
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
`;

const StyledIcon = styled.img `
  height: 50px;
  margin-left: 20px;
`;

const HeaderText = styled.div`
  color: white;
  margin: 0 20px 0 0;
  font-size: 30px;
`;

const ArtistSearchApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ace5c0;

  @media (min-width: 450px) {
    min-width: 450px;
  }
`;
