import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import withAuth from "./withAuth";

import { getArtistsNames, formatString } from "./util";
import {
  BasicCardTitle,
  BasicCardSubtitle,
  BasicCardBody
} from "./styles/BasicCard";
import { BasicAlbumCard } from "./styles/BasicAlbumCard";
import { getTrackList } from "./services/spotify-api";

class AlbumCardBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    };
  }

  componentDidMount() {
    getTrackList(
      this.props.album.id,
      this.props.authToken,
      this.props.history
    ).then(response => {
      this.setState({ tracks: response.data.items });
    });
  }

  render() {
    const { album } = this.props;

    return (
      <StyledAlbumCard>
        <StyledAlbumBody>
          <Title album={album.name} />
          <Subtitle artists={getArtistsNames(album.artists)} />
          <Tracklist tracks={this.state.tracks} />
        </StyledAlbumBody>
      </StyledAlbumCard>
    );
  }
}

function Title({ album }) {
  return (
    <BasicCardTitle title={album}>{formatString(album, 45)}</BasicCardTitle>
  );
}

function Subtitle({ artists }) {
  return (
    <BasicCardSubtitle title={artists}>
      {formatString(artists, 60)}
    </BasicCardSubtitle>
  );
}

function Tracklist({ tracks }) {
  return (
    <StyledList>
      {tracks.map(track => {
        return <Track key={track.id}>{track.name}</Track>;
      })}
    </StyledList>
  );
}

export default withAuth(withRouter(AlbumCardBack));

const StyledAlbumCard = styled(BasicAlbumCard)`
  bottom: 0;
`;

const StyledAlbumBody = styled(BasicCardBody)`
  justify-content: flex-start;
`;

const StyledList = styled.ul`
  list-style-image: url("/itunes-note-brands.svg");
  font-size: 18px;
  padding-inline-start: 20px;
`;

const Track = styled.li`
  padding: 5px;
`;
