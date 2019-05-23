import axios from "axios";

const endpoint = "https://api.spotify.com/v1/";

function getArtistList(searchedName, authToken, history) {
  return axios
    .get(encodeURI(`${endpoint}search?q=*${searchedName}*&type=artist`), {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .catch(error => {
      history.push("/");
    });
}

function getArtistName(artistId, authToken, history) {
  return axios
    .get(`${endpoint}artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .catch(error => {
      history.push("/");
    });
}

function getAlbumList(artistId, authToken, history) {
  return axios
    .get(`${endpoint}artists/${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .catch(error => {
      history.push("/");
    });
}

function getTrackList(albumId, authToken, history) {
  return axios
    .get(`${endpoint}albums/${albumId}/tracks`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .catch(error => {
      history.push("/");
    });
}


export { getArtistList, getArtistName, getAlbumList, getTrackList };
