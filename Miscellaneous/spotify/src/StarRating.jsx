import React from "react";
import styled from "styled-components";
import { MdStar, MdStarBorder } from "react-icons/md";

import { convertPopularity } from "./util";

class StarRating extends React.Component {
  render() {
    const starRating = [1, 2, 3, 4, 5];

    return (
      <StarRatingWrapper>
        {starRating.map(numberOfStar => {
          return numberOfStar <= convertPopularity(this.props.popularity) ? (
            <FullStar size="30px" key={numberOfStar} />
          ) : (
            <EmptyStar size="30px" key={numberOfStar} />
          );
        })}
      </StarRatingWrapper>
    );
  }
}
export default StarRating;

const StarRatingWrapper = styled.div`
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
