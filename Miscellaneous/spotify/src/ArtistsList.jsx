import React from 'react';
import ArtistCard from './ArtistCard';
import styled from 'styled-components';

class ArtistsList extends React.Component {

  displayArtists() {
    const artistsList = this.props.artistsToDisplay;
    if (artistsList) {
      return (
        artistsList.map((artist) => {
          return <ArtistCard  key={artist.id} artist={artist} />
        })
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <StyledList>
        {this.displayArtists()}
      </StyledList>
    );
  }
}
  
export default ArtistsList;

const StyledList = styled.div`
  display: flex;

  flex-flow: row wrap;
  justify-content: space-evenly;
`;