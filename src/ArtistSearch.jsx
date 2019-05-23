import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import withAuth from "./withAuth";
import { getArtistList } from "./services/spotify-api";
import ArtistList from "./ArtistList";

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedName: "",
      retrievedArtists: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchedName: event.target.value }, () =>
      getArtistList(
        this.state.searchedName,
        this.props.authToken,
        this.props.history
      ).then(response =>
        this.setState({ retrievedArtists: response.data.artists.items })
      )
    );
  }

  render() {
    return (
      <SearchPage>
        <SearchBarContainer isSearching={!!this.state.searchedName}>
          <StyledSearchBar
            type="search"
            placeholder="Enter artist name"
            value={this.state.searchedName}
            onChange={this.handleChange}
          />
        </SearchBarContainer>
        {this.state.retrievedArtists && (
          <ArtistList artistsToDisplay={this.state.retrievedArtists} />
        )}
      </SearchPage>
    );
  }
}
export default withRouter(withAuth(ArtistSearch));

const SearchPage = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  padding: 30px 0;
  margin-bottom: ${props => (props.isSearching ? 60 : 80)}px;
`;

const StyledSearchBar = styled.input`
  width: 400px;
  font-size: 20px;
  font-family: "SpotifyFontRegular";
  border: 3px solid #1db954;
  border-radius: 500px;
  color: #16873e;
  outline: none;
  appearance: none;
  padding: 8px 0 8px 48px;
  background-image: url("/search_icon.png");
  background-repeat: no-repeat;
  background-position: left 15px center;
  background-size: 24px;

  ::placeholder {
    color: #6fd292;
    font-family: "spotifyFontRegular";
  }

  ::-webkit-search-cancel-button {
    margin-right: 8px;
  }
`;
