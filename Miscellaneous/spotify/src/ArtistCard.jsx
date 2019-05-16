import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { MdStar, MdStarBorder } from "react-icons/md";

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);

    this.searchAlbums = this.searchAlbums.bind(this);
  }

  convertPopularity() {
    const { popularity } = this.props.artist;

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
    const { total } = this.props.artist.followers;
    if (total) {
      return total.toLocaleString();
    }
    return null;
  }

  searchAlbums(artistId) {
    this.props.history.push(`/albums/${artistId}`);
  }

  render() {
    const { artist } = this.props;
    const starRatings = [1, 2, 3, 4, 5];

    return (
      <StyledCard onClick={() => this.searchAlbums(artist.id)}>
        {artist.images.length > 0 ? (
          <ResizedImage src={artist.images[0].url} />
        ) : (
          <ResizedImage src="https://britz.mcmaster.ca/images/nouserimage.gif/image" />
        )}
        <ArtistDesc>
          <StyledArtistDetails>
            <StyledArtistName>{artist.name}</StyledArtistName>
            <StyledNumberFollowers>
              {this.formatFollowersNumber()} followers
            </StyledNumberFollowers>
          </StyledArtistDetails>
          <StyledStarRatings>
            <StarRatings>
              {starRatings.map((numberOfStar) => {
                return (numberOfStar <= this.convertPopularity()) ? (
                  <FullStar size="30px" key={numberOfStar}/>
                ) : (
                  <EmptyStar size="30px" key={numberOfStar}/>
                )
              })}
            </StarRatings>
          </StyledStarRatings>
        </ArtistDesc>
      </StyledCard>
    );
  }
}

export default withRouter(ArtistCard);

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 280px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  border: 2px solid grey;
  justify-content: space-between;
  background-color: white;

  :hover {
    opacity: 0.7;
    border-color: white;
    cursor: pointer;
  }
`;

const ResizedImage = styled.div`
  background-image: url(${props => props.src});
  height: 250px;
  width: 100%;
  background-size: cover;
`;

const ArtistDesc = styled.div `
  flex: 1 1 auto;
  margin: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledArtistDetails = styled.div``;

const StyledArtistName = styled.p`
  font-size: 20px;
  margin-bottom: 0;
`;

const StyledNumberFollowers = styled.p`
  font-size: 18px;
  color: grey;
  line-height: 5px;
`;

const StarRatings = styled.div `
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;

const FullStar = styled(MdStar) `
  color: orange;
`;

const EmptyStar = styled(MdStarBorder) `
  color: grey;
`

const StyledStarRatings = styled.div`
  position: relative;
  margin-bottom: 0;
`;