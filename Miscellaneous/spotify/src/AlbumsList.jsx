import React from "react";
import AlbumCard from "./AlbumCard";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { getArtistName, getAlbumsList } from "./services/spotify-api";
import * as BasicCardsListStyles from "./styles/BasicCardsList";

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
    console.log(this.props);
    return (
      <div>
        <Header>
          <Title>{this.state.artistName}</Title>
          <Subtitle>Albums</Subtitle>
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

const StyledList = styled(BasicCardsListStyles.BasicCardsList) `
`;

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
