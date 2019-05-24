import React from "react";

import ArtistCard from "./ArtistCard";
import { BasicCardsList } from "./styles/BasicCardsList";

class ArtistsList extends React.Component {
  render() {
    return (
      <BasicCardsList>
        {this.props.artistsToDisplay
          ? this.props.artistsToDisplay.map(artist => {
              return <ArtistCard key={artist.id} artist={artist} />;
            })
          : null}
      </BasicCardsList>
    );
  }
}

export default ArtistsList;
