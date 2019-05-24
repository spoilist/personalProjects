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
      <StyledAlbumCard>
        <StyledAlbumBody>

            <BasicCardStyles.BasicCardTitle title={album.name}>
              {formatString(album.name, 45)}
            </BasicCardStyles.BasicCardTitle>
            <BasicCardStyles.BasicCardSubtitle
              title={getArtistsNames(album.artists)}
            >
              {formatString(getArtistsNames(album.artists), 60)}
            </BasicCardStyles.BasicCardSubtitle>

          <TrackList>
            {this.state.tracks.map((track) => {
              return <Track key={track.id}>{track.name}</Track>
            })}
          </TrackList>
        </StyledAlbumBody>
      </StyledAlbumCard>
    );
  }
}

export default withAuth(withRouter(AlbumCardBack));

const StyledAlbumCard = styled(BasicAlbumCard) `
  bottom: 0;
`;

const StyledAlbumBody = styled(BasicCardStyles.BasicCardBody) `
  justify-content: flex-start;
`;

const TrackList = styled.ul `
  list-style-image: url("/itunes-note-brands.svg");
  font-size: 18px;
  padding-inline-start: 20px;
`;

const Track = styled.li `
  padding: 5px;
`;
