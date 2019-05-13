import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);

    this.searchAlbums = this.searchAlbums.bind(this);
  }

  convertPopularity() {
    const {popularity} = this.props.artist;

    if (popularity > 80) {
      return 5;
    } else if (popularity > 60) {
      return 4;
    } else if (popularity > 40) {
      return 3;
    } else if (popularity > 20) {
      return 2;
    } else {
      return 1;
    }
  }

  formatFollowersNumber() {
    const {total} = this.props.artist.followers;

    return total.toLocaleString();
  }

  searchAlbums() {
    console.log(this.props);
    // this.props.history.push("/artist:artistId");
  }

  render() {
    const {artist} = this.props;

    return (
      <StyledCard onClick={this.searchAlbums}>
        {artist.images.length > 0 && <ResizedImage src={artist.images[0].url} alt="missing"></ResizedImage>}
        <StyledArtistDetails>
          <StyledArtistName>{artist.name}</StyledArtistName>
          <StyledNumberFollowers>{this.formatFollowersNumber()} followers</StyledNumberFollowers>
        </StyledArtistDetails>
        <StyledStarRatings>
          <StarRatings
            rating={this.convertPopularity()}
            numberOfStars={5}
            starDimension="30px"
            starSpacing="2px" />
        </StyledStarRatings>
      </StyledCard>
    );
  }
}
  
export default ArtistCard;

const StyledCard = styled.div`
  width: 280px;
  height: 450px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  border-style: solid;
  position: relative;
`;

const ResizedImage = styled.img`
  max-height: 250px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

const StyledArtistDetails = styled.p`
  margin-left: 20px;
`

const StyledStarRatings = styled.div`
  margin-left: 10px;
  position: absolute;
  bottom: 0;
`