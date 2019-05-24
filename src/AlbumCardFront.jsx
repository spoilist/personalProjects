import React from "react";
import styled from "styled-components";

import { getArtistsNames, formatString } from "./util";
import {
  BasicImage,
  BasicCardBody,
  BasicCardTitle,
  BasicCardSubtitle,
  BasicCardFooter
} from "./styles/BasicCard";
import { BasicAlbumCard } from "./styles/BasicAlbumCard";

class AlbumCardFront extends React.Component {
  render() {
    const { album } = this.props;

    return (
      <BasicAlbumCard>
        {<BasicImage src={album.images[0] ? album.images[0].url : null} />}
        <BasicCardBody>
          <div>
            <BasicCardTitle title={album.name}>
              {formatString(album.name, 45)}
            </BasicCardTitle>
            <BasicCardSubtitle title={getArtistsNames(album.artists)}>
              {formatString(getArtistsNames(album.artists), 60)}
            </BasicCardSubtitle>
          </div>
          <BasicCardFooter>
            <StyledAlbumInfo>{album.release_date}</StyledAlbumInfo>
            <StyledAlbumInfo>
              {album.total_tracks}{" "}
              {album.total_tracks === 1 ? "track" : "tracks"}
            </StyledAlbumInfo>
          </BasicCardFooter>
        </BasicCardBody>

        <PreviewButton href={album.external_urls.spotify} target="_blank">
          Preview on{" "}
          <span style={{ fontFamily: "spotifyFontBold" }}>Spotify</span>
        </PreviewButton>
      </BasicAlbumCard>
    );
  }
}

export default AlbumCardFront;

const StyledAlbumInfo = styled(BasicCardSubtitle)`
  margin-top: 0;
`;

const PreviewButton = styled.a`
  color: white;
  display: block;
  text-decoration: none;
  font-family: "spotifyFontRegular";

  background-color: #1db954;
  text-align: center;
  padding: 8px 0;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
