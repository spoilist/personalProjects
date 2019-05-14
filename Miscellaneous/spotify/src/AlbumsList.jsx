import React from 'react';
import AlbumCard from './AlbumCard';
import styled from 'styled-components';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      artistId: this.props.match.params.artistId,
      retrievedAlbums: null,
    }

    this.getAlbumsList = this.getAlbumsList.bind(this);
  }

  componentDidMount() {
    this.getAlbumsList();
  }

  getAlbumsList() {
    const endpoint = "https://api.spotify.com/v1/artists/";
    const query = this.state.artistId + "/albums"; 
    axios.get(endpoint + query, {
      headers: {
        "Authorization": "Bearer " + this.props.authToken
      },
    })
    .then(response => {
      console.log(response);
      this.setState({retrievedAlbums: response.data.items});
    })
    .catch(error => {
      if (error.response.status === 401) {
        this.props.history.push("/");
      }
    })
  }

  displayAlbums() {
    const retrievedAlbums = this.state.retrievedAlbums;
    if (retrievedAlbums) {
      return (
        retrievedAlbums.map((album) => {
          return <AlbumCard key={album.id} album={album} />
        })
      );
    } else {
      console.log("NULL");
      return null;
    }
  }

  render() {

    return (
      this.displayAlbums()
    );
  }
}
  
export default withRouter(AlbumsList);
