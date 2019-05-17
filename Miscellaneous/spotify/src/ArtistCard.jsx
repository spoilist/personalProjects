import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { MdStar, MdStarBorder } from "react-icons/md";
import { convertPopularity, formatFollowersNumber } from "./util";
import * as BasicCardStyles from "./styles/BasicCard";

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);

    this.searchAlbums = this.searchAlbums.bind(this);
  }

  searchAlbums(artistId) {
    this.props.history.push(`/albums/${artistId}`);
  }

  render() {
    const { artist } = this.props;
    const starRatings = [1, 2, 3, 4, 5];

    return (
      <Artist onClick={() => this.searchAlbums(artist.id)}>
        {<ArtistImage src={artist.images[0] ? artist.images[0].url : null} />}
        <ArtistBody>
          <ArtistHeader>
            <ArtistTitle>{artist.name}</ArtistTitle>
            <ArtistSubtitle>
              {formatFollowersNumber(this.props.artist.followers.total)}{" "}
              {this.props.artist.followers.total === 1
                ? "follower"
                : "followers"}
            </ArtistSubtitle>
          </ArtistHeader>
          <ArtistFooter>
            <StarRatings>
              {starRatings.map(numberOfStar => {
                return numberOfStar <=
                  convertPopularity(this.props.artist.popularity) ? (
                  <FullStar size="30px" key={numberOfStar} />
                ) : (
                  <EmptyStar size="30px" key={numberOfStar} />
                );
              })}
            </StarRatings>
          </ArtistFooter>
        </ArtistBody>
      </Artist>
    );
  }
}

export default withRouter(ArtistCard);

const Artist = styled(BasicCardStyles.BasicCard)`
  :hover {
    opacity: 0.7;
    border-color: white;
    cursor: pointer;
  }
`;

const ArtistImage = styled(BasicCardStyles.BasicImage)`
  ${Artist}:hover & {
    border-bottom: white;
  }
`;

const ArtistBody = styled(BasicCardStyles.BasicCardBody)``;

const ArtistHeader = styled.div``;

const ArtistTitle = styled(BasicCardStyles.BasicCardTitle)``;

const ArtistSubtitle = styled(BasicCardStyles.BasicCardSubtitle)``;

const ArtistFooter = styled(BasicCardStyles.BasicCardFooter)`
  position: relative;
  margin-bottom: 0;
`;

const StarRatings = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;

const FullStar = styled(MdStar)`
  color: orange;
`;

const EmptyStar = styled(MdStarBorder)`
  color: grey;
`;
