import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import StarRating from "./StarRating";
import { formatFollowersNumber, formatString } from "./util";
import {
  BasicImage,
  BasicCardBody,
  BasicCardTitle,
  BasicCardSubtitle,
  BasicCard,
  BasicCardFooter
} from "./styles/BasicCard";

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

    return (
      <Artist onClick={() => this.searchAlbums(artist.id)}>
        {<BasicImage src={artist.images[0] ? artist.images[0].url : null} />}
        <BasicCardBody>
          <div>
            <BasicCardTitle title={artist.name}>
              {formatString(artist.name, 60)}
            </BasicCardTitle>
            <BasicCardSubtitle>
              {formatFollowersNumber(this.props.artist.followers.total)}{" "}
              {this.props.artist.followers.total === 1
                ? "follower"
                : "followers"}
            </BasicCardSubtitle>
          </div>
          <ArtistFooter>
            <StarRating popularity={this.props.artist.popularity} />
          </ArtistFooter>
        </BasicCardBody>
      </Artist>
    );
  }
}

export default withRouter(ArtistCard);

const Artist = styled(BasicCard)`
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

const ArtistFooter = styled(BasicCardFooter)`
  position: relative;
  margin-bottom: 0;
`;
