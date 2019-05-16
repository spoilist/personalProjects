import React from "react";
import ArtistsList from "./ArtistsList";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { getArtistsList } from "./services/spotify-api";

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

export default withRouter(ArtistSearch);

const SearchPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBarText = styled.div`
  font-size: 28px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  margin-bottom: 20px;
`;

const SearchBarContainer = styled.div`
  padding: 30px 0;
  margin-bottom: ${props => (props.isSearching ? 80 : 0)}px;
`;

const StyledSearchBar = styled.input`
  width: 400px;
  font-size: 28px;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  border: 3px solid #1db954;
  color: #16873e;
  outline: none;
  appearance: none;
  padding: 8px;

  ::placeholder {
    color: #6fd292;
  }

  ::-webkit-search-cancel-button {
    margin-right: 8px;
  }
`;
