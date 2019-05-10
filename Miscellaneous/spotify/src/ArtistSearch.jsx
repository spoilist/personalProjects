import React from 'react';
import axios from 'axios';
import ArtistsList from './ArtistsList';
import {withRouter} from 'react-router-dom';

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      searchedName: "",
      retrievedArtists: null,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  getArtistsList(searchedName) {
    const endpoint = "https://api.spotify.com/v1/search?";
    const query = "q=*" + searchedName + "*&type=artist"; 
    axios.get(endpoint + query, {
      headers: {
        "Authorization": "Bearer " + this.props.authToken
      },
    })
    .then(response => {
      this.setState({retrievedArtists: response.data.artists.items});
      console.log(this.state.retrievedArtists);
    })
    .catch(error => {
      if (error.response.status === 401) {
        this.props.history.push("/");
      }
    })
  }

  handleChange(event) {
    this.setState({searchedName: event.target.value}, () => this.getArtistsList(this.state.searchedName));
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search for an artist" value={this.state.searchedName} onChange={this.handleChange}></input>
        <ArtistsList artistsToDisplay={this.state.retrievedArtists} />
      </div>
    );
  }
}
  
export default withRouter(ArtistSearch);