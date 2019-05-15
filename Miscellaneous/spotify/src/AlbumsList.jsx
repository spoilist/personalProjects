import React from "react";
import AlbumCard from "./AlbumCard";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { getArtistName, getAlbumsList } from "./services/spotify-api";

class AlbumsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: "",
      retrievedAlbums: null
    };
  }

  componentDidMount() {
    getAlbumsList(
      this.props.match.params.artistId,
      this.props.authToken,
      this.props.history
    ).then(response => {
      this.setState({ retrievedAlbums: response.data.items })
    });

    getArtistName(
      this.props.match.params.artistId,
      this.props.authToken,
      this.props.history
    ).then(response => {
      this.setState({ artistName: response.data.name });
    });
  }

  render() {
    return (
      <div>
        <Header>
          <ArtistName>{this.state.artistName}</ArtistName>
          <Albums>Albums</Albums>
        </Header>

        <StyledList>
          {this.state.retrievedAlbums
            ? this.state.retrievedAlbums.map(album => {
                return <AlbumCard key={album.id} album={album} />;
              })
            : null}
        </StyledList>
      </div>
    );
  }
}

export default withRouter(AlbumsList);

const StyledList = styled.div`
  display: flex;

  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Header = styled.div`
  margin: 40px 65px;
`;

const ArtistName = styled.div`
  font-size: 40px;
`;

const Albums = styled.div`
  font-size: 24px;
  color: grey;
`;
