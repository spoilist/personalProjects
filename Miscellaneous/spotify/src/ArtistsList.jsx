import React from "react";
import ArtistCard from "./ArtistCard";
import * as BasicCardsListStyles from "./styles/BasicCardsList";
 
class ArtistsList extends React.Component {
  render() {
    return (
      <BasicCardsListStyles.BasicCardsList>
        {this.props.artistsToDisplay
          ? this.props.artistsToDisplay.map(artist => {
              return <ArtistCard key={artist.id} artist={artist} />;
            })
          : null}
      </BasicCardsListStyles.BasicCardsList>
    );
  }
}

export default ArtistsList;
