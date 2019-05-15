import React from 'react';
import ArtistCard from './ArtistCard';
import styled from 'styled-components';

class ArtistsList extends React.Component {
  render() {
    return (
      <StyledList>
        {
          this.props.artistsToDisplay ? (
            this.props.artistsToDisplay.map((artist) => {
              return <ArtistCard key={artist.id} artist={artist} />;
            })
          ) : (
              null
          )
        }
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