import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import AlbumCardFront from "./AlbumCardFront";
import AlbumCardBack from "./AlbumCardBack";
import * as BasicCardStyles from "./styles/BasicCard";

class AlbumCard extends React.Component {
  render() {
    const { album } = this.props;

    return (
      <AlbumCardWrapper>
        <AlbumCardBack album={album} />
        {/* <AlbumCardFront album={album} /> */}
      </AlbumCardWrapper>
    );
  }
}

export default withRouter(AlbumCard);

const AlbumCardWrapper = styled(BasicCardStyles.BasicCard)`
  height: 480px;
  position: relative;
`;