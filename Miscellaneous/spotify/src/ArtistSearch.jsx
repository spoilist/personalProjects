import React from 'react';
import axios from 'axios';
import ArtistsList from './ArtistsList';
import {withRouter} from 'react-router-dom';
import styled from "styled-components";

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      searchedName: "",
      retrievedArtists: null,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  getArtistsList(searchedName) {
    const endpoint = "https://api.spotify.com/v1/search?";
    const query = "q=*" + searchedName + "*&type=artist"; 
    axios.get(endpoint + query, {
      headers: {
        "Authorization": "Bearer " + this.props.authToken
      },
    })
    .then(response => {
      this.setState({retrievedArtists: response.data.artists.items});
    })
    .catch(error => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("Error 400: Bad Request");
            break;
          case 403:
            alert("Error 403: Forbidden");
            break;
          case 404:
            alert("Error 404: Not Found");
            break;
          case 429:
            alert("Error 429: Too Many Requests");
            break;
          case 500:
            alert("Error 500: Internal Server Error");
            break;
          case 502:
            alert("Bad Gateway");
            break;
          case 503:
            alert("Error 503: Service unavailable");
            break;
          default:
            this.props.history.push("/");
            break;
        }
      } else {
        this.props.history.push("/");
      }
    });
  }

  handleChange(event) {
    this.setState({searchedName: event.target.value}, () => this.getArtistsList(this.state.searchedName));
  }

  render() {
    return (
      <SearchPage>
        <SearchBarContainer isSearching={!!this.state.searchedName}>
          <SearchBarText>Search for an artist:</SearchBarText>
          <StyledSearchBar type="search" placeholder="Artist name" value={this.state.searchedName} onChange={this.handleChange} />
        </SearchBarContainer>
        {this.state.retrievedArtists && <ArtistsList artistsToDisplay={this.state.retrievedArtists} />}
      </SearchPage>
    );
  }
}
  
export default withRouter(ArtistSearch);

const SearchPage = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const SearchBarText = styled.div `
  font-size: 28px;
  font-weight: 900;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  margin-bottom: 20px;
`

const SearchBarContainer = styled.div `
  padding: 30px 0;
  margin-bottom: ${(props) => props.isSearching ? 80 : 0}px;
`;

const StyledSearchBar = styled.input `
  width: 400px;
  font-size: 28px;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  border: 3px solid #1DB954;
  color: #16873E;
  outline: none;
  appearance: none;
  padding: 8px;

  ::placeholder {
    color: #6FD292;
  }

  ::-webkit-search-cancel-button {
    margin-right: 8px;
  }
`;
