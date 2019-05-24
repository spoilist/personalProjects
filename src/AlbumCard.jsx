import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import AlbumCardFront from "./AlbumCardFront";
import AlbumCardBack from "./AlbumCardBack";
import * as BasicCardStyles from "./styles/BasicCard";

class AlbumCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingTracklist: false,
    }

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    console.log("state before: " + this.state.showingTracklist);
    this.setState({
      showingTracklist: !this.state.showingTracklist
    })
    console.log("state after: " + this.state.showingTracklist);    
  }

  render() {
    const { album } = this.props;

    return (
      <AlbumCardWrapper onClick={this.flipCard}>
        {
          this.state.showingTracklist ? (
            <AlbumCardBack album={album} />
          ) : (
            <AlbumCardFront album={album} />
          )
        }
      </AlbumCardWrapper>
    );
  }
}

export default withRouter(AlbumCard);

const AlbumCardWrapper = styled(BasicCardStyles.BasicCard)`
  height: 480px;
  position: relative;
  overflow-y: auto;
`;