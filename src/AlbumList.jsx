import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import withAuth from "./withAuth";
import { getArtistName, getAlbumList } from "./services/spotify-api";
import { BasicCardsList } from "./styles/BasicCardsList";
import AlbumCard from "./AlbumCard";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: null,
      retrievedAlbums: null
    };
  }

  componentDidMount() {
    getAlbumList(
      this.props.artistId,
      this.props.authToken,
      this.props.history
    ).then(response => {
      this.setState({ retrievedAlbums: response.data.items });
    });

    getArtistName(
      this.props.artistId,
      this.props.authToken,
      this.props.history
    ).then(response => {
      this.setState({ artistName: response.data.name });
    });
  }

  render() {
    return (
      <>
        <Header>
          <Title>{this.state.artistName}</Title>
          <Subtitle>Albums</Subtitle>
        </Header>

        <BasicCardsList>
          {this.state.retrievedAlbums
            ? this.state.retrievedAlbums.map(album => {
                return <AlbumCard key={album.id} album={album} />;
              })
            : null}
        </BasicCardsList>
      </>
    );
  }
}

export default withAuth(withRouter(AlbumList));

const Header = styled.div`
  margin: 40px 65px;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  color: grey;
`;
