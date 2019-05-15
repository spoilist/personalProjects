import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class AlbumCard extends React.Component {

  getArtistsNames() {
    const artistsNames = this.props.album.artists.map( artist => artist.name).join(", ");
    
    return artistsNames;
  }

  render() {
    const {album} = this.props;
    console.log(album);
    
    return (

      <StyledCard>
        {album.images.length > 0 ? (
          <ResizedImage src={album.images[0].url}></ResizedImage>
        ) : (
          <ResizedImage src="https://britz.mcmaster.ca/images/nouserimage.gif/image"></ResizedImage>
        )}
        <AlbumDesc>
          <StyledAlbumDetails>
            <StyledAlbumName>{this.props.album.name}</StyledAlbumName>
            <StyledArtistsNames>{this.getArtistsNames()}</StyledArtistsNames>
          </StyledAlbumDetails>
          <StyledAlbumDescription>
            <StyledAlbumInfo>{this.props.album.release_date}</StyledAlbumInfo>
            <StyledAlbumInfo>{this.props.album.total_tracks} tracks</StyledAlbumInfo>
          </StyledAlbumDescription>
        </AlbumDesc>
        <Preview>
          <StyledPreviewButton href={this.props.album.external_urls.spotify}>Preview on Spotify
          </StyledPreviewButton>
        </Preview>
      </StyledCard>
    )
  }
}
  
export default withRouter(AlbumCard);

const StyledCard = styled.div `
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 280px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  border: 2px solid grey;
  justify-content: space-between;
  background-color: white;
`

const ResizedImage = styled.div `
  background-image: url(${props => props.src});
  height: 280px;
  background-size: cover;
  border-bottom: 2px solid grey;
`

const AlbumDesc = styled.div `
  flex: 1 1 auto;
  margin: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledAlbumDetails = styled.div `

`;

const StyledAlbumName = styled.p `
  font-size: 20px;
  margin-bottom: 0;
`;

const StyledArtistsNames = styled.p `
  font-size: 14px;
  color: grey;
  margin-top: 6px;
  margin-bottom: 0;
`;

const StyledAlbumInfo = styled.p `
  font-size: 14px;
  color: grey;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledAlbumDescription = styled.div `
  position: relative;
  margin-bottom: 10px;
`;

const StyledPreviewButton = styled.a `
  color: white;
  display: block;
  text-decoration: none;
`;

const Preview = styled.div `
  background-color: #1DB954;
  color: white;
  text-align: center;
  padding: 8px 0;
`;
