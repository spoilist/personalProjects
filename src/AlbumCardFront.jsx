import React from "react";
import styled from "styled-components";

import { getArtistsNames, formatString } from "./util";
import * as BasicCardStyles from "./styles/BasicCard";
import { BasicAlbumCard } from "./styles/BasicAlbumCard";

class AlbumCardFront extends React.Component {
  render() {
    const { album } = this.props;

    return (
      <BasicAlbumCard>
        {
          <BasicCardStyles.BasicImage
            src={album.images[0] ? album.images[0].url : null}
          />
        }
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
          <BasicCardStyles.BasicCardFooter>
            <StyledAlbumInfo>{album.release_date}</StyledAlbumInfo>
            <StyledAlbumInfo>
              {album.total_tracks}{" "}
              {album.total_tracks === 1 ? "track" : "tracks"}
            </StyledAlbumInfo>
          </BasicCardStyles.BasicCardFooter>
        </BasicCardStyles.BasicCardBody>
        <Preview>
          <PreviewButton href={album.external_urls.spotify} target="_blank">
            Preview on <span style={{ fontFamily: "spotifyFontBold" }}>Spotify</span>
          </PreviewButton>
        </Preview>
      </BasicAlbumCard>
    );
  }
}

export default AlbumCardFront;

const StyledAlbumInfo = styled(BasicCardStyles.BasicCardSubtitle)`
  margin-top: 0;
`;

const PreviewButton = styled.a`
  color: white;
  display: block;
  text-decoration: none;
  font-family: "spotifyFontRegular";
`;

const Preview = styled.div`
  background-color: #1db954;
  color: white;
  text-align: center;
  padding: 8px 0;

  :hover {
    opacity: 0.8;
  }
`;
