import React from "react";
import AlbumCard from "./AlbumCard";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AlbumsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: "",
      retrievedAlbums: null,
    };

    this.getAlbumsList = this.getAlbumsList.bind(this);
  }

  componentDidMount() {
    this.getAlbumsList();
    this.getArtistName();
  }

  getArtistName() {
    const endpoint = "https://api.spotify.com/v1/artists/";
    const query = this.props.match.params.artistId;
    axios
      .get(endpoint + query, {
        headers: {
          Authorization: "Bearer " + this.props.authToken
        }
      })
      .then(response => {
        this.setState({ artistName: response.data.name });
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

  getAlbumsList() {
    const endpoint = "https://api.spotify.com/v1/artists/";
    const query = this.props.match.params.artistId + "/albums";
    axios
      .get(endpoint + query, {
        headers: {
          Authorization: "Bearer " + this.props.authToken
        }
      })
      .then(response => {
        console.log(response);
        this.setState({ retrievedAlbums: response.data.items });
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

  displayAlbums() {
    const retrievedAlbums = this.state.retrievedAlbums;
    if (retrievedAlbums) {
      return retrievedAlbums.map(album => {
        return <AlbumCard key={album.id} album={album} />;
      });
    } else {
      console.log("NULL: " + this.state.retrievedAlbums);
      return null;
    }
  }

  render() {
    return (
      <div>
        <Header>
          <ArtistName>{this.state.artistName}</ArtistName>
          <Albums>Albums</Albums>
        </Header>

        <StyledList>
          {this.displayAlbums()}
        </StyledList>
      </div>
    );
  }
}

export default withRouter(AlbumsList);

const StyledList = styled.div `
  display: flex;

  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Header = styled.div `
  margin: 40px 65px;
`;

const ArtistName = styled.div `
  font-size: 40px;
`;

const Albums = styled.div `
  font-size: 24px;
  color: grey;
`;

