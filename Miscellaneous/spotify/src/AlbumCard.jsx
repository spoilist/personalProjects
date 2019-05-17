import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { getArtistsNames, formatString } from "./util";
import * as BasicCardStyles from "./styles/BasicCard";

class AlbumCard extends React.Component {
  render() {
    const { album } = this.props;

    return (
      <Album>
        {<AlbumImage src={album.images[0] ? album.images[0].url : null} />}
        <AlbumBody>
          <AlbumHeader>
            <AlbumTitle>{formatString(album.name)}</AlbumTitle>
            <AlbumSubtitle>
              {formatString(getArtistsNames(this.props.album.artists))}
            </AlbumSubtitle>
          </AlbumHeader>
          <AlbumFooter>
            <StyledAlbumInfo>{album.release_date}</StyledAlbumInfo>
            <StyledAlbumInfo>
              {album.total_tracks}{" "}
              {album.total_tracks === 1 ? "track" : "tracks"}
            </StyledAlbumInfo>
          </AlbumFooter>
        </AlbumBody>
        <Preview>
          <PreviewButton href={album.external_urls.spotify} target="_blank">
            Preview on Spotify
          </PreviewButton>
        </Preview>
      </Album>
    );
  }
}

export default withRouter(AlbumCard);

const Album = styled(BasicCardStyles.BasicCard)`
  height: 480px;
`;

const AlbumImage = styled(BasicCardStyles.BasicImage)``;

const AlbumBody = styled(BasicCardStyles.BasicCardBody)``;

const AlbumHeader = styled(BasicCardStyles.BasicCardHeader)``;

const AlbumTitle = styled(BasicCardStyles.BasicCardTitle)``;

const AlbumSubtitle = styled(BasicCardStyles.BasicCardSubtitle)``;

const StyledAlbumInfo = styled(BasicCardStyles.BasicCardSubtitle)`
  margin-top: 0;
`;

const AlbumFooter = styled(BasicCardStyles.BasicCardFooter)``;

const PreviewButton = styled.a`
  color: white;
  display: block;
  text-decoration: none;
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
