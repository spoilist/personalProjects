import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import ArtistSearch from "./ArtistSearch";
import AlbumsList from "./AlbumsList";
import Login from "./Login";
import AuthProvider from "./Auth";


class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <ArtistSearchApp>
            <Header/>
            <Route exact path="/" component={Login} />
            <Route path="/search" render={() => <ArtistSearch />} />
            <Route
              path="/albums/:artistId"
              render={({ match }) => (
                <AlbumsList artistId={match.params.artistId} />
              )}
            />
          </ArtistSearchApp>
        </AuthProvider>
      </Router>
    );
  }
}
export default App;

const ArtistSearchApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #effaf3;
  min-width: 400px;
  width: auto !important;
  width: 400px;

  @font-face {
    font-family: "spotifyFontBold";
    src: url("/fonts/ProximaNovaBold.otf");
  }

  @font-face {
    font-family: "spotifyFontThin";
    src: url("/fonts/ProximaNovaThin.otf");
  }

  @font-face {
    font-family: "spotifyFontRegular";
    src: url("/fonts/ProximaNovaRegular.otf");
  }
`;
