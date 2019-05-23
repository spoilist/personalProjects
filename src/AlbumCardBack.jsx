import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import withAuth from "./withAuth";

import { getArtistsNames, formatString } from "./util";
import * as BasicCardStyles from "./styles/BasicCard";
import { BasicAlbumCard } from "./styles/BasicAlbumCard";
import { getTrackList } from "./services/spotify-api";

class AlbumCardBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
    }
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
      <BasicAlbumCard>
        <BasicCardStyles.BasicCardBody>
          <div>
            <BasicCardStyles.BasicCardTitle title={album.name}>
              {formatString(album.name, 45)}
            </BasicCardStyles.BasicCardTitle>
            <BasicCardStyles.BasicCardSubtitle
              title={getArtistsNames(album.artists)}
            >
              {formatString(getArtistsNames(album.artists), 60)}
            </BasicCardStyles.BasicCardSubtitle>
          </div>
          <TrackList>
            {this.state.tracks.map((track) => {
              return <li key={track.id}>{track.name}</li>
            })}
          </TrackList>
        </BasicCardStyles.BasicCardBody>
      </BasicAlbumCard>
    );
  }
}

export default withAuth(withRouter(AlbumCardBack));

const TrackList = styled.ul `
`;
