import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);

    this.searchAlbums = this.searchAlbums.bind(this);
  }

  render() {
    const {album} = this.props;
    
    return (
      <StyledCard>
        {album.images.length > 0 ? (
          <ResizedImage src={album.images[0].url}></ResizedImage>
        ) : (
          <ResizedImage src="https://britz.mcmaster.ca/images/nouserimage.gif/image"></ResizedImage>
        )}
        <StyledArtistDetails>
          <StyledArtistName>{album.name}</StyledArtistName>
          <StyledNumberFollowers>{album.artists}}</StyledNumberFollowers>
        </StyledArtistDetails>
      </StyledCard>
    );
  }
}
  
export default withRouter(ArtistCard);

const StyledCard = styled.div`
  width: 280px;
  height: 450px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  border-style: solid;
  position: relative;
`;

const ResizedImage = styled.div`
  background-image: url(${props => props.src});
  height: 250px;
  width: 100%;
  background-size: cover;
`;

const StyledArtistName = styled.p`
  font-size: 25px;
  margin-bottom: 0;
`;

const StyledNumberFollowers = styled.p`
  font-size: 18px;
  color: grey;
  line-height: 5px;
`;

const StyledArtistDetails = styled.div`
  margin-left: 20px;
`

const StyledStarRatings = styled.div`
  margin-left: 10px;
  position: absolute;
  bottom: 0;
`