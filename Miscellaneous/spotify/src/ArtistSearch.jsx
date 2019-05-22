import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import withAuth from "./withAuth";
import { getArtistsList } from "./services/spotify-api";
import ArtistsList from "./ArtistsList";


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
      getArtistsList(
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
          <SearchBarText>Search for an artist:</SearchBarText>
          <StyledSearchBar
            type="search"
            placeholder="Artist name"
            value={this.state.searchedName}
            onChange={this.handleChange}
          />
        </SearchBarContainer>
        {this.state.retrievedArtists && (
          <ArtistsList artistsToDisplay={this.state.retrievedArtists} />
        )}
      </SearchPage>
    );
  }
}

export default withRouter(withAuth(ArtistSearch));

const SearchPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBarText = styled.div`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 20px;
  font-family: "spotifyFontBold";
`;

const SearchBarContainer = styled.div`
  padding: 30px 0;
  margin-bottom: ${props => (props.isSearching ? 80 : 0)}px;
`;

const StyledSearchBar = styled.input`
  width: 400px;
  font-size: 28px;
  font-family: "SpotifyFontRegular";
  border: 3px solid #1db954;
  color: #16873e;
  outline: none;
  appearance: none;
  padding: 8px;

  ::placeholder {
    color: #6fd292;
    font-family: "spotifyFontRegular";
  }

  ::-webkit-search-cancel-button {
    margin-right: 8px;
  }
`;
